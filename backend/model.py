import torch
import torch.nn as nn
import torchvision.transforms as transforms
from torch.utils.data import Dataset
import cv2
import numpy as np

CHAR_CLASSES = {
    'digits': list('0123456789'),
    'operators': ['+', '-', '*', '/', '=', '(', ')', '^'],
    'variables': list('xyzαβγ'),
    'special': ['sqrt', 'frac', 'sum', 'int']
}

class EquationImageDataset(Dataset):
    def __init__(self, images, labels, transform=None):
        self.images = images
        self.labels = labels
        self.transform = transform
    
    def __getitem__(self, idx):
        image = self.images[idx]
        label = self.labels[idx]
        if self.transform:
            image = self.transform(image)
        return image, label

class CharacterDetector(nn.Module):
    def __init__(self):
        super().__init__()
        self.features = nn.Sequential(
            nn.Conv2d(1, 64, 3, padding=1),
            nn.ReLU(),
            nn.MaxPool2d(2),
            nn.Conv2d(64, 128, 3, padding=1),
            nn.ReLU(),
            nn.MaxPool2d(2),
            nn.Conv2d(128, 256, 3, padding=1),
            nn.ReLU()
        )
        
        self.classifier = nn.Sequential(
            nn.Linear(256 * 7 * 7, 512),
            nn.ReLU(),
            nn.Dropout(0.5),
            nn.Linear(512, len(CHAR_CLASSES['digits'] + 
                              CHAR_CLASSES['operators'] + 
                              CHAR_CLASSES['variables'] + 
                              CHAR_CLASSES['special']))
        )

    def forward(self, x):
        x = self.features(x)
        x = x.view(x.size(0), -1)
        x = self.classifier(x)
        return x

class SpatialRelationship(nn.Module):
    def __init__(self):
        super().__init__()
        self.position_encoder = nn.Sequential(
            nn.Linear(4, 32),
            nn.ReLU(),
            nn.Linear(32, 64)
        )
        self.relationship_classifier = nn.Sequential(
            nn.Linear(64, 32),
            nn.ReLU(),
            nn.Linear(32, 5)  # horizontal, superscript, subscript, fraction, root
        )
    
    def forward(self, bbox_coords):
        encoded = self.position_encoder(bbox_coords)
        return self.relationship_classifier(encoded)


class EquationReconstructor:
    def __init__(self):
        self.char_detector = CharacterDetector()
        self.spatial_model = SpatialRelationship()
    
    def segment_characters(self, image):
        # Use CV2 contour detection to find character regions
        gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
        _, thresh = cv2.threshold(gray, 127, 255, cv2.THRESH_BINARY_INV)
        contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
        
        chars = []
        positions = []
        for contour in contours:
            x, y, w, h = cv2.boundingRect(contour)
            char_img = gray[y:y+h, x:x+w]
            chars.append(char_img)
            positions.append([x, y, w, h])
        return chars, positions

    def to_latex(self, chars, positions):
        # Convert recognized characters and positions to LaTeX
        latex = ""
        prev_pos = None
        for char, pos in zip(chars, positions):
            if prev_pos and pos[1] < prev_pos[1] - prev_pos[3]/2:
                latex += "^{"
            elif prev_pos and pos[1] > prev_pos[1] + prev_pos[3]/2:
                latex += "_{"
            latex += char
            prev_pos = pos
        return latex
    
    def process_equation(self, image):
        chars, positions = self.segment_characters(image)
        
        # Normalize and prepare characters
        processed_chars = []
        for char in chars:
            # Resize to model input size
            char = cv2.resize(char, (28, 28))
            char = torch.FloatTensor(char).unsqueeze(0).unsqueeze(0)
            processed_chars.append(char)
        
        # Get character predictions
        char_preds = []
        for char in processed_chars:
            with torch.no_grad():
                pred = self.char_detector(char)
                char_preds.append(pred.argmax().item())
        
        # Convert to LaTeX with spatial relationships
        latex = self.to_latex(char_preds, positions)
        return latex
from flask import Flask, request, jsonify
import datetime
import base64
import io
from PIL import Image

#initialize the app
app = Flask(__name__)

# define the route
@app.route('/user-input', methods=['POST'])
def show_image():
    try:
        data = request.get_json()
        
        # Extract base64 image data from the data URL
        image_data = data['imageData'].split(",")[1]
        # Convert base64 image data to image
        img = base64_to_image(image_data)
        # Name it after the current date and time
        filename = datetime.datetime.now().strftime("%Y-%m-%d_%H-%M-%S") + ".png"
        img.save(f"temp/{filename}")
        
        return jsonify({"message": "Image processed successfully"}), 200
    
    # Error handling    
    except base64.binascii.Error:
        return jsonify({"error": "Invalid base64 data"}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500


def base64_to_image(base64_string):
    imgdata = base64.b64decode(base64_string)
    return Image.open(io.BytesIO(imgdata))

if __name__ == "__main__":
    #run the app
    app.run(debug=True)
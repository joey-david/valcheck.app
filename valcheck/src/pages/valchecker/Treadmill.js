import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../../components/ThemeContext";
import { Camera, Trash2, Upload } from "lucide-react";
import "./Treadmill.css";

const Treadmill = () => {
    const { theme } = useTheme();
    const [selectedOption, setSelectedOption] = useState();
    const canvasRef = useRef(null);
    const videoRef = useRef(null);
    const fileInputRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        let drawing = false;

        const startDrawing = (e) => {
            drawing = true;
            draw(e);
        };

        const stopDrawing = () => {
            drawing = false;
            context.beginPath();
        };

        const draw = (e) => {
            if (!drawing) return;
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            context.lineWidth = 3;
            context.lineCap = 'round';
            context.strokeStyle = theme === 'dark' ? 'white' : 'black'; 
            context.lineTo(x, y);
            context.stroke();
            context.beginPath();
            context.moveTo(x, y);
        };

        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseout', stopDrawing);

        return () => {
            canvas.removeEventListener('mousedown', startDrawing);
            canvas.removeEventListener('mouseup', stopDrawing);
            canvas.removeEventListener('mousemove', draw);
            canvas.removeEventListener('mouseout', stopDrawing);
        };
    }, [theme]);

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
    };

    const openCamera = () => {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
                videoRef.current.srcObject = stream;
                videoRef.current.play();
            });
        }
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log("File uploaded:", file.name);
        }
    };

    return (
        <div className={`treadmill ${theme}`}>
            <div className="treadmill-content" style={{ transform: `translateX(-${selectedOption * 100}%)` }}>
                <div className="treadmill-section canvas-section">
                    <canvas ref={canvasRef} width="1280" height="720"></canvas>
                    <button className="clear-button" onClick={clearCanvas}>
                        <Trash2 size={18} />
                        Clear Canvas
                    </button>
                </div>
                <div className="treadmill-section camera-section">
                    <video ref={videoRef} width="1280" height="720"></video>
                    <button className="camera-button" onClick={openCamera}>
                        <Camera size={18} />
                        Open Camera
                    </button>
                </div>
                <div className="treadmill-section upload-section">
                    <div className="file-upload-container">
                        <input
                            type="file"
                            id="fileInput"
                            ref={fileInputRef}
                            onChange={handleFileUpload}
                            hidden
                        />
                        <label htmlFor="fileInput" className="file-upload-label">
                            <Upload size={24} />
                            <span>Choose a file or drag it here</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Treadmill;
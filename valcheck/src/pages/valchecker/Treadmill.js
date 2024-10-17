import React, { useEffect, useRef } from "react";
import { useTheme } from "../../components/ThemeContext";
import { Camera, Trash2, Upload } from "lucide-react";
import { useState } from "react";

const Treadmill = ({ selectedOption }) => {
    const { theme } = useTheme();
    const canvasRef = useRef(null);
    const videoRef = useRef(null);
    const fileInputRef = useRef(null);
    const [canvasContext, setCanvasContext] = useState(null);
    const [slideDirection, setSlideDirection] = useState('next');
    const [prevOption, setPrevOption] = useState(selectedOption);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Track transitions
    useEffect(() => {
        if (selectedOption !== prevOption) {
            setIsTransitioning(true);
            const timer = setTimeout(() => {
                setIsTransitioning(false);
            }, 500); // Match transition duration
            return () => clearTimeout(timer);
        }
    }, [selectedOption, prevOption]);

    // Determine slide direction
    useEffect(() => {
        const options = ['draw', 'camera', 'upload'];
        const prevIndex = options.indexOf(prevOption);
        const currentIndex = options.indexOf(selectedOption);
        
        if (prevIndex !== currentIndex) {
            setSlideDirection(
                currentIndex > prevIndex ? 'next' : 'prev'
            );
            setPrevOption(selectedOption);
        }
    }, [selectedOption, prevOption]);

    // Initialize canvas with proper dimensions
    useEffect(() => {
        if (canvasRef.current) {
            const container = canvasRef.current.parentElement;
            const context = canvasRef.current.getContext('2d');
            
            // Set canvas size based on container
            const updateCanvasSize = () => {
                const rect = container.getBoundingClientRect();
                canvasRef.current.width = rect.width;
                canvasRef.current.height = rect.height;
            };

            updateCanvasSize();
            window.addEventListener('resize', updateCanvasSize);
            setCanvasContext(context);

            return () => window.removeEventListener('resize', updateCanvasSize);
        }
    }, []);

    // Canvas drawing functionality
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        let drawing = false;
        let lastX = 0;
        let lastY = 0;

        const getCoordinates = (e) => {
            const rect = canvas.getBoundingClientRect();
            const scaleX = canvas.width / rect.width;
            const scaleY = canvas.height / rect.height;
            return {
                x: (e.clientX - rect.left) * scaleX,
                y: (e.clientY - rect.top) * scaleY
            };
        };

        const startDrawing = (e) => {
            drawing = true;
            const coords = getCoordinates(e);
            lastX = coords.x;
            lastY = coords.y;
        };

        const draw = (e) => {
            if (!drawing) return;
            
            const coords = getCoordinates(e);
            const context = canvas.getContext('2d');
            
            context.beginPath();
            context.moveTo(lastX, lastY);
            context.lineTo(coords.x, coords.y);
            context.strokeStyle = theme === 'dark' ? 'white' : 'black';
            context.lineWidth = 2;
            context.lineCap = 'round';
            context.stroke();
            
            lastX = coords.x;
            lastY = coords.y;
        };

        const stopDrawing = () => {
            drawing = false;
        };

        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseout', stopDrawing);

        return () => {
            canvas.removeEventListener('mousedown', startDrawing);
            canvas.removeEventListener('mousemove', draw);
            canvas.removeEventListener('mouseup', stopDrawing);
            canvas.removeEventListener('mouseout', stopDrawing);
        };
    }, [theme]);

    const clearCanvas = () => {
        if (canvasRef.current) {
            const context = canvasRef.current.getContext('2d');
            context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        }
    };

    const openCamera = () => {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then((stream) => {
                    if (videoRef.current) {
                        videoRef.current.srcObject = stream;
                        videoRef.current.play();
                    }
                })
                .catch(err => console.error("Error accessing camera:", err));
        }
    };

    return (
        <div className={`treadmill ${theme}`}>
            <div className="treadmill-viewport">
                <div className="treadmill-content">
                    <div 
                        className={`treadmill-section ${
                            selectedOption === 'draw' ? 'active' : ''
                        } ${slideDirection} ${isTransitioning ? 'transitioning' : ''}`}
                    >
                        <div className="canvas-container">
                            <canvas 
                                ref={canvasRef}
                                className="drawing-canvas"
                            />
                            <button className="clear-button" onClick={clearCanvas}>
                                <Trash2 size={18} />
                                Clear Canvas
                            </button>
                        </div>
                    </div>

                    <div 
                        className={`treadmill-section ${
                            selectedOption === 'camera' ? 'active' : ''
                        } ${slideDirection} ${isTransitioning ? 'transitioning' : ''}`}
                    >
                        <div className="video-container">
                            <video ref={videoRef} />
                            <button className="camera-button" onClick={openCamera}>
                                <Camera size={18} />
                                Open Camera
                            </button>
                        </div>
                    </div>

                    <div 
                        className={`treadmill-section ${
                            selectedOption === 'upload' ? 'active' : ''
                        } ${slideDirection} ${isTransitioning ? 'transitioning' : ''}`}
                    >
                        <div className="file-upload-container">
                            <input
                                type="file"
                                id="fileInput"
                                ref={fileInputRef}
                                onChange={(e) => console.log("File selected:", e.target.files[0])}
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
        </div>
    );
};

export default Treadmill;
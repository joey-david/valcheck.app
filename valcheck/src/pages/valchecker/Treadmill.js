import React, { useEffect, useRef, useState } from "react";
import { Camera, Eraser, Upload, ImagePlus, X } from "lucide-react";
import { useTheme } from "../../components/ThemeContext";
import "./Treadmill.css";

const Treadmill = ({ selectedOption }) => {
    const { theme } = useTheme();
    const canvasRef = useRef(null);
    const videoRef = useRef(null);
    const fileInputRef = useRef(null);
    const videoStreamRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [lastPos, setLastPos] = useState({ x: 0, y: 0 });
    const [uploadedFile, setUploadedFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [isDragging, setIsDragging] = useState(false);

    // Map options to indices for carousel positioning
    const optionToIndex = {
        'draw': 0,
        'camera': 1,
        'upload': 2
    };

    // Initialize canvas
    useEffect(() => {
        if (!canvasRef.current) return;

        const container = canvasRef.current.parentElement;
        
        const updateCanvasSize = () => {
            const rect = container.getBoundingClientRect();
            canvasRef.current.width = rect.width;
            canvasRef.current.height = rect.height;
        };

        updateCanvasSize();
        window.addEventListener('resize', updateCanvasSize);

        return () => {
            window.removeEventListener('resize', updateCanvasSize);
        };
    }, []);

    // Handle drawing functionality
    const getCoordinates = (e) => {
        if (!canvasRef.current) return { x: 0, y: 0 };
        
        const rect = canvasRef.current.getBoundingClientRect();
        const scaleX = canvasRef.current.width / rect.width;
        const scaleY = canvasRef.current.height / rect.height;
        
        return {
            x: (e.clientX - rect.left) * scaleX,
            y: (e.clientY - rect.top) * scaleY
        };
    };

    const startDrawing = (e) => {
        const coords = getCoordinates(e);
        setIsDrawing(true);
        setLastPos(coords);
    };

    const draw = (e) => {
        if (!isDrawing || !canvasRef.current) return;

        const coords = getCoordinates(e);
        const context = canvasRef.current.getContext('2d');
        
        context.beginPath();
        context.moveTo(lastPos.x, lastPos.y);
        context.lineTo(coords.x, coords.y);
        context.strokeStyle = 'black';
        context.lineWidth = 2;
        context.lineCap = 'round';
        context.stroke();
        
        setLastPos(coords);
    };

    const stopDrawing = () => {
        setIsDrawing(false);
    };

    // Add drawing event listeners
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

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
    }, [isDrawing, lastPos, theme]);

    // Clean up video stream when component unmounts or camera section is not active
    useEffect(() => {
        return () => {
            if (videoStreamRef.current) {
                const tracks = videoStreamRef.current.getTracks();
                tracks.forEach(track => track.stop());
                videoStreamRef.current = null;
            }
        };
    }, [selectedOption]);

    const clearCanvas = () => {
        if (!canvasRef.current) return;
        const context = canvasRef.current.getContext('2d');
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    };

    const openCamera = async () => {
        try {
            if (!navigator.mediaDevices?.getUserMedia) {
                throw new Error('Camera access not supported');
            }

            // Stop any existing stream
            if (videoStreamRef.current) {
                const tracks = videoStreamRef.current.getTracks();
                tracks.forEach(track => track.stop());
            }

            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                videoStreamRef.current = stream;
                await videoRef.current.play();
            }
        } catch (err) {
            console.error("Error accessing camera:", err);
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.type.startsWith('image/')) {
                setUploadedFile(file);
                const reader = new FileReader();
                reader.onload = (event) => {
                    setImagePreview(event.target.result);
                };
                reader.readAsDataURL(file);
            } else {
                alert("Please upload an image file");
            }
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files?.[0];
        if (file && file.type.startsWith('image/')) {
            setUploadedFile(file);
            const reader = new FileReader();
            reader.onload = (event) => {
                setImagePreview(event.target.result);
            };
            reader.readAsDataURL(file);
        } else {
            alert("Please upload an image file");
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const removeImage = () => {
        setUploadedFile(null);
        setImagePreview(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    useEffect(() => {
        const uploadDiv = document.querySelector('.upload-div');
        if (!uploadDiv) return;

        uploadDiv.addEventListener('dragover', handleDragOver);
        uploadDiv.addEventListener('drop', handleDrop);

        return () => {
            uploadDiv.removeEventListener('dragover', handleDragOver);
            uploadDiv.removeEventListener('drop', handleDrop);
        };
    }, []);

    return (
        <div className={`treadmill ${theme}`}>
            <div className="carousel-wrapper">
                <div 
                    className="carousel-inner" 
                    style={{ transform: `translateX(-${optionToIndex[selectedOption] * 100}%)` }}
                >
                    <div className="carousel-section">
                        <div className="content-container">
                            <canvas 
                                ref={canvasRef}
                                className="drawing-canvas"
                            />
                            <button className="action-button clear-canvas-button" onClick={clearCanvas}>
                                <Eraser size={18} />
                                Clear Canvas
                            </button>
                        </div>
                    </div>

                    <div className="carousel-section">
                        <div className="content-container">
                            <video 
                                ref={videoRef} 
                                className="camera-feed"
                                playsInline // Better mobile support
                            />
                            <button className="action-button" onClick={openCamera}>
                                <Camera size={18} />
                                Open Camera
                            </button>
                        </div>
                    </div>

                    <div className="carousel-section">
                        <div 
                            className={`content-container upload-div ${isDragging ? 'dragging' : ''}`}
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}
                            onDragLeave={handleDragLeave}
                        >
                            <input
                                type="file"
                                id="fileInput"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                accept="image/*"
                                hidden
                            />
                            
                            {!imagePreview ? (
                                <label 
                                    htmlFor="fileInput" 
                                    className="upload-label"
                                >
                                    <Upload 
                                        size={32} 
                                        className="upload-icon" 
                                        strokeWidth={1.5} 
                                    />
                                    <div className="upload-text">
                                        <span className="primary-text">
                                            Choose a file or drag it here
                                        </span>
                                        <span className="secondary-text">
                                            Supports: JPG, PNG, GIF
                                        </span>
                                    </div>
                                </label>
                            ) : (
                                <div className="preview-container">
                                    <div className="preview-header">
                                        <span className="filename">
                                            {uploadedFile?.name}
                                        </span>
                                        <button 
                                            className="remove-button"
                                            onClick={removeImage}
                                            aria-label="Remove image"
                                        >
                                            <X size={20} />
                                        </button>
                                    </div>
                                    <div className="image-preview">
                                        <img src={imagePreview} alt="Preview" />
                                    </div>
                                    <label 
                                        htmlFor="fileInput" 
                                        className="replace-button"
                                    >
                                        <ImagePlus size={18} />
                                        Replace Image
                                    </label>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Treadmill;
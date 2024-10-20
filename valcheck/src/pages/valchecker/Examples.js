import React from 'react';
import { useTheme } from '../../components/ThemeContext';
import './Examples.css';
import { useEffect } from 'react';


function Examples() {
    const { theme } = useTheme();
    
    return (
        <div className={`examples ${theme}`}>
            <div className='content' id="examples">
                <h2>Usage Demonstration</h2>
                <section id="mode-choice">
                    <div className="text">
                        <h3>Using the three-switch</h3>
                        <p></p>
                        <p>Choose your input type by clicking the appropriate section.</p>
                        <p>You can either draw a mathematical expression, take a picture using your webcam, or upload directly from your local files.</p>
                    </div>
                    <img src="./gif/three-switch.gif" alt="Three-switch demonstration" className="three-switch-gif" />
                </section>
                <section id="example-gifs">
                    <h3>Visual demonstration</h3>
                    <div className="demo-gifs">
                        <div className="example-mode">
                            <h4>Canvas</h4>
                            <p>Draw a mathematical expression using your mouse on the canvas. You can use the clear canvas button to start over if needed. Once you're done drawing, simply press the process image button at the top right to proceed.</p>
                            <img src="./gif/canvas.gif" alt="Draw example" className="example-gif" />
                        </div>
                        <div className="example-mode">
                            <h4>Camera</h4>
                            <p>Open the camera with the dedicated button. Ensure the expression is clearly visible and well-lit for the best results, then press the process image button.</p>
                            <img src="./gif/camera.gif" alt="Camera example" className="example-gif" />
                        </div>
                        <div className="example-mode">
                            <h4>Upload</h4>
                            <p>Upload a picture of a mathematical expression from your local files. Make sure the image is clear and the expression is easily readable, then press the process image button.</p>
                            <img src="./gif/upload.gif" alt="Upload example" className="example-gif" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Examples;
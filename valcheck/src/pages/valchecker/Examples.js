import React from 'react';
import { useTheme } from '../../components/ThemeContext';
import './Examples.css';

function Examples() {
    const { theme } = useTheme();
    
    return (
        <div className={`examples ${theme}`}>
        <h2>Examples</h2>
        <div className="example">
            <h3>Example 1</h3>
            <p>Input: 2 + 2</p>
            <p>Output: 4</p>
        </div>
        <div className="example">
            <h3>Example 2</h3>
            <p>Input: 3 * 4</p>
            <p>Output: 12</p>
        </div>
        <div className="example">
            <h3>Example 3</h3>
            <p>Input: 5 / 2</p>
            <p>Output: 2.5</p>
        </div>
        </div>
    );
}

export default Examples;
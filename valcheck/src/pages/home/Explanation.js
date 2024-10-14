import React from 'react';
import { useTheme } from '../../components/ThemeContext';
import './Explanation.css';

function Explanation() {
  const { theme } = useTheme();

  return (
    <div className={`explanation ${theme}`}>
      <div className='content' id="#home/how-it-works">
        <h2>How it works</h2>
        <section id="individual-symbol-recognition" className="individual-symbol-recognition-section">
          <h3>I. Individual Symbol Recognition</h3>
          <h4>Neural Network</h4>
          <div className="individual-symbol">
            <p id="p-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <img src="./gif/neural-network-placeholder.gif" alt="PyTorch model structure" className="neural-net-gif" />
          </div>
          <h4>Training Dataset</h4>
          <div className="dataset-section">
            <img src="./gif/dataset-placeholder.gif" alt="Training dataset visualization" className="dataset-gif" />
            <p id="p-right">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <h4>Libraries</h4>
          <div className='libraries-div'>
            <div className='pytorch-div'>
              <img src="/img/pytorch-logo.png" alt="PyTorch logo" className="pytorch-logo" />
              <p id='pytorch-p'>
              PyTorch is a powerful open-source deep learning framework that provides a seamless path from research prototyping to production deployment. Its dynamic computation graph and intuitive interface make it a favorite among researchers and developers. PyTorch's extensive library of pre-trained models and tools for building custom neural networks enable rapid experimentation and innovation. Whether you're working on computer vision, natural language processing, or any other machine learning task, PyTorch offers the flexibility and performance needed to bring your ideas to life.
              </p>
            </div>
            <div className='flask-div'>
              <img src="/img/flask_logo.png" alt="Flask logo" className="flask-logo" />
              <p id='flask-p'>
                Flask, a micro web framework for Python, is incredibly lightweight and flexible, allowing developers to create robust web applications with minimal overhead. It provides a powerful toolkit for building everything from simple web pages to complex web applications. Flask's modular design and extensive documentation make it easy to get started, while Python's vast ecosystem of libraries and frameworks ensures that you have all the tools you need to bring your ideas to life. Whether you're a seasoned developer or just starting out, Flask and Python offer a seamless and enjoyable development experience.
              </p>
            </div>
          </div>
        </section>
        <section className="building-expressions-section">
          <h3>II. Building Expressions</h3>
          <div className="building-expressions">
            <p id='p-left'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <img src="./gif/equation-solving-placeholder.gif" alt="Expression building process" className="equation-solving-gif" />
          </div>
        </section>
        <section className="evaluating-expressions-section">
          <h3>III. Evaluating Expressions and other implementations</h3>
          <div className="evaluating-expressions">
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <img id = "p-right" src="./gif/wolfram-alpha-my-beloved-placeholder.gif" alt="Expression evaluation process" className="wolfram-alpha-gif" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Explanation;
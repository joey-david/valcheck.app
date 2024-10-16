import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home/Home';
import Valchecker from './pages/Valchecker';
import About from './pages/About';
import { ThemeProvider } from './components/ThemeContext';
import './App.css';

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Header
            isDropdownOpen={isDropdownOpen}
            setIsDropdownOpen={setIsDropdownOpen}
          />
          {isDropdownOpen && <div className="page-overlay"></div>}
          <main className={isDropdownOpen ? 'greyed' : ''}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/valchecker" element={<Valchecker />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer className={isDropdownOpen ? 'greyed' : ''} />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
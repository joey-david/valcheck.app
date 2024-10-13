import React from 'react';
import { useTheme } from '../../components/ThemeContext';
import Presentation from './Presentation';
import Explanation from './Explanation';
import './Home.css';

function Home() {
  const { theme } = useTheme();

  return (
    <div className={`home ${theme}`}>
      <Presentation />
      <Explanation />
    </div>
  );
}

export default Home;
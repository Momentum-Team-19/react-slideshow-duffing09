import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Slideshow from './slideshow';

function App() {
  const [filmIndex, setFilmIndex] = useState(0);
  return (
    <>
      <h1>Slidshow!</h1>
      <div>
        <Slideshow filmIndex={filmIndex} setFilmIndex={setFilmIndex}/>
      </div>
    </>
  );
  }
export default App

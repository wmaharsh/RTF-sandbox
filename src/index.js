import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Canvas } from 'react-three-fiber';


function App() {
  return (
    <>
      <Canvas>
      </Canvas>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
import React from 'react';
import reactLogo from './assets/hello/react.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1>hello from react</h1>
      <h2>second line</h2>
      <img src='/hello2/vite.svg' alt='' />
      <img src={reactLogo} alt='' />
    </div>
  );
}

export default App;

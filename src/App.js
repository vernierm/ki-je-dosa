import React from 'react';
import './App.css';
import Game from './components/Game.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL + '/kjd.png'} className="App-logo" alt="logo" />
      </header>
      <div className="App-body">
        <Game />
      </div>
    </div>
  );
}

export default App;

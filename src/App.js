import React from 'react';
import './App.css';
import Game from './components/Game.js';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
  position: 'bottom center',
  timeout: 2000,
  offset: '30px',
  transition: 'scale'
}

function App() {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <div className="App">
        <header className="App-header">
          <img src={process.env.PUBLIC_URL + '/kjd.png'} className="App-logo" alt="logo" />
        </header>
        <div className="App-body">
          <Game />
        </div>
      </div>
    </AlertProvider>
  );
}

export default App;

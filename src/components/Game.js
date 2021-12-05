import React from 'react';
import './Game.css';
import Display from './Display.js';
import Form from './Form.js';

const INPUT_STATE = "INPUT_STATE";
const OUTPUT_STATE = "OUTPUT_STATE";
const MIN_NUMBER_OF_ROUNDS = 3;

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submittedForms: [],
      gameState: INPUT_STATE,
    };

    this.enterOutputState = this.enterOutputState.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
  }

  saveForm(f) {
    this.setState({
      submittedForms: this.state.submittedForms.concat([f]),
    });
  }

  enterOutputState(event) {
    if (this.state.submittedForms.length < MIN_NUMBER_OF_ROUNDS) {
        alert('unesi baren ' + MIN_NUMBER_OF_ROUNDS);
        return;
    }

    this.setState({
      gameState: OUTPUT_STATE,
    });
  }

  handleNewGame() {
    this.setState({
      submittedForms: [],
      gameState: INPUT_STATE,
    });
  }

  render() {
    if (this.state.gameState === INPUT_STATE) {
      return (
        <div>
          <div>
            <Form
              onClick={(v)=>this.saveForm(v)}
            />
            <p>Broj rundi: {this.state.submittedForms.length}</p>
            <button className="Game-button" onClick={this.enterOutputState}>Amooo</button>
          </div>
        </div>
      );
    } else {
      return (
        <Display items={this.state.submittedForms} onNewGameClick={this.handleNewGame} />
      );
    }
  }
}

export default Game;
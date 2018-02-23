import React from 'react';
import TopOptions from './top-options';
import QuizArea from './quiz-area';
import HelpPanel from './help-panel';
import './hot-or-cold.css';

export default class HotOrCold extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHelp: false,
      guessesSoFar: [],
      lastGuess: 0,
      rightAnswer: Math.floor(Math.random() * 100)
    }
  }

  toggleHelp() {
    this.setState({ showHelp: !(this.state.showHelp) })
  }

  checkGuessIsUnique(guessNum) {
    if (this.state.guessesSoFar.indexOf(guessNum) > -1) {
      return false
    }
    else return true;
  }

  handleValidGuess(guessNum) {
    const guessesSoFar = this.state.guessesSoFar;
    guessesSoFar.push(guessNum);
    this.setState({ guessesSoFar })
    console.log(this.state.guessesSoFar);
  }

  addGuess(guessNum) {
    if (typeof guessNum !== 'number') {
      alert('Please enter a number');
    } else if (!this.checkGuessIsUnique(guessNum)) {
      alert('You guessed this number already');
    } else {
      this.handleValidGuess(guessNum);
    }
  }

  resetGame() {
    console.log(this.state.rightAnswer);
    this.setState({
      showHelp: false,
      guessesSoFar: [],
      lastGuess: 0,
      rightAnswer: Math.floor(Math.random() * 100)
    })
  }

  checkGuess(guess, rightAnswer) {
    return guess === rightAnswer;
  }

  render() {
    if(this.state.showHelp) {
      return (
        <div className="outer-container">
          <TopOptions 
            resetGame={() => this.resetGame()}
            toggleHelp={() => this.toggleHelp()}/>
          <QuizArea addGuess={() => this.addGuess()}/>
          <HelpPanel toggleHelp={() => this.toggleHelp()}/>
        </div>
      ) 
    } else {
      return ( 
        <div className="outer-container">
          <TopOptions 
            toggleHelp={() => this.toggleHelp()}
            resetGame={() => this.resetGame()}/>
          <QuizArea addGuess={(e) => this.addGuess(e)}/>
        </div>
      )
    }
  }
}
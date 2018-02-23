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
      currentInput: 0,
      rightAnswer: Math.floor(Math.random() * 99 + 1),
      clueText: 'Make your guess!'
    }
  }

  toggleHelp() {
    this.setState({ showHelp: !(this.state.showHelp) })
  }

  resetGame() {
    this.setState({
      showHelp: false,
      guessesSoFar: [],
      lastGuess: 0,
      rightAnswer: Math.floor(Math.random() * 99 + 1),
      clueText: 'Make your guess!'
    })
  }

  checkWarmth(guess) {
    const answer = this.state.rightAnswer;
    const difference = Math.abs(guess - answer);
    if (guess === answer) {
      this.setState({ 
        clueText: 'You Won! Click \'new game\' to play again.'});
    } else if (difference < 5) {
      this.setState({clueText: 'Hot!'});
    } else if (difference < 10) {
      this.setState({clueText: 'Warm'});
    } else if (difference < 15) {
      this.setState({clueText: 'Kinda warm'});
    } else if (difference < 20) {
      this.setState({clueText: 'Less than warm'});
    } else {
      this.setState({clueText: 'Cold'});
    }
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
    this.setState({ guessesSoFar });
    this.checkWarmth(guessNum);
  }

  checkGuessIsValid(guessNum) {
    console.log(guessNum);
    return ( 
      guessNum.length < 1
      || typeof guessNum !== 'number'
      || guessNum < 1 
      || guessNum > 99 
    );
  }

  // On clicking 'guess'
  handleGuess(guessNum) {
    const parsedGuess = parseInt(guessNum, 10);
    if (this.checkGuessIsValid(Number(guessNum))) {
      alert('Please enter a number from 1 to 99');
    } else if (!this.checkGuessIsUnique(parsedGuess)) {
      alert('You guessed this number already');
    } else {
      this.handleValidGuess(parsedGuess);
    }
  }

  // Updates state with current text in input field
  getInput(value) {
    this.setState({ currentInput: value});
  }

  render() {
    const input = this.state.currentInput;
    if(this.state.showHelp) {

      return (
        <div className="outer-container">
          <HelpPanel toggleHelp={() => this.toggleHelp()}/>
        </div>
      ) 
    } else {
      return ( 
        <div className="outer-container">
          <TopOptions 
            toggleHelp={() => this.toggleHelp()}
            resetGame={() => this.resetGame()}/>
          <QuizArea 
            clueText={this.state.clueText}
            getInput={(value) => this.getInput(value)}
            handleGuess={() => this.handleGuess(input)}
            totalGuesses={this.state.guessesSoFar.length}
            guessesSoFar={this.state.guessesSoFar}/>
        </div>
      )
    }
  }
}
import React from 'react';
import TopOptions from './top-options';
import QuizArea from './quiz-area';
import HelpPanel from './help-panel';

export default class HotOrCold extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHelp: false,
      guessesSoFar: [],
      currentInput: '',
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

  // On clicking 'guess'
  handleGuess() {
    const guessNum = this.state.currentInput;
    const parsedGuess = parseInt(guessNum, 10);
    if (!this.checkGuessIsUnique(parsedGuess)) {
      alert('You guessed this number already');
    } else {
      this.handleValidGuess(parsedGuess);
    }
  }

  // Updates state with current text in input field
  setInput(value) {
    console.log(value);
    if (!isNaN(value)) { 
      this.setState({ currentInput: value});
    }
  }

  render() {
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
            setInput={(value) => this.setInput(value)}
            inputValue={this.state.currentInput}
            handleGuess={this.handleGuess.bind(this)}
            totalGuesses={this.state.guessesSoFar.length}
            guessesSoFar={this.state.guessesSoFar}/>
        </div>
      )
    }
  }
}

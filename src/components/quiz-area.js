import React from 'react';
import ClueText from './clue-text';
import GuessInput from './guess-input';
import GuessButton from './guess-button';
import GuessCount from './guess-count';
import AnswersSoFar from './answers-so-far';
import './quiz-area.css';

export default function QuizArea(props) {
  const answerLis = props.guessesSoFar.map((guess,index) => {
    return <AnswersSoFar guess={guess} key={index}/>
  })
  
  return (
    <main>
      <h1>HOT or COLD</h1>
      <div>
        <section className="clue-text-wrapper">
          <ClueText clueText={props.clueText}/>
        </section>
        <section className="input-area-wrapper">
          <GuessInput 
            onChange={(value) => props.setInput(value)}
            inputValue={props.inputValue}
            onKeyPress={() => props.handleGuess()}/> <br/>
          <GuessButton onClick={() => props.handleGuess()}/> <br/>
          <GuessCount totalGuesses={props.totalGuesses}/>
        </section>
        <section className="answers-so-far-wrapper">
          <ul>{answerLis}</ul>
        </section>
      </div>
    </main>
  );
}
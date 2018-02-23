import React from 'react';
import ClueText from './clue-text';
import GuessInput from './guess-input';
import GuessButton from './guess-button';
import GuessCount from './guess-count';
import AnswersSoFar from './answers-so-far';
import './quiz-area.css';

export default function QuizArea(props) {
  return (
    <main>
      <h1>HOT or COLD</h1>
      <div>
        <section className="clue-text-wrapper">
          <ClueText />
        </section>
        <section className="input-area-wrapper">
          <GuessInput /> <br/>
          <GuessButton onClick={(e) => props.addGuess(e)}/> <br/>
          <GuessCount />
        </section>
        <section className="answers-so-far-wrapper">
          <AnswersSoFar />
        </section>
      </div>
    </main>
  );
}
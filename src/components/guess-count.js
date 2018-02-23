import React from 'react';
import './guess-count.css';

export default function GuessCount(props) {
  return (
    <p className="guess-count">Guess #
      <span className="guess-number">{props.totalGuesses}</span>! 
    </p>
  )
}

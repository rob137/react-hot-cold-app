import React from 'react';
import './guess-count.css';

export default function GuessCount(prop) {
  return (
    <p className="guess-count">Guess #
      <span className="guess-number">{prop.guessNumber}</span>! 
    </p>
  )
}

GuessCount.defaultProps = {
  guessNumber: 0
}
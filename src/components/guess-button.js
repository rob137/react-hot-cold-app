import React from 'react';
import './guess-button.css';
export default function GuessButton(props) {
  return <button className="guess-button"
    onClick={() => props.onClick()}>Guess</button>
}
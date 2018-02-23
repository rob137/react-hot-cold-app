import React from 'react';
import './guess-input.css';

export default function GuessInput(props) {
  return (
    <input className="guess-input" 
      placeholder="Enter your Guess" 
      onChange={ e => props.onChange(e.target.value)}>
    </input>
  );
}
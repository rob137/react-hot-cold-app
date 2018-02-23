import React from 'react';
import './clue-text.css';

export default function ClueText(props) {
  return (
    <p className="clue-text">{props.text}</p>
  )
}

ClueText.defaultProps = {
  text: 'Make your Guess!'
}
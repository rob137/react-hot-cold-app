import React from 'react';
import './answers-so-far.css';

export default function AnswersSoFar(props) {
  return (
    <li className="answer-so-far">{props.guess}</li>
  )
}

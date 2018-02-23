import React from 'react';
import './answers-so-far.css';

export default function AnswersSoFar(prop) {
  return (
    <li className="answer-so-far">{prop.answer}</li>
  )
}

AnswersSoFar.defaultProps = {
  answer: ''
}
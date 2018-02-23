import React from 'react';
import './help-text.css';

export default function HelpText() {
  return (
    <div className="help-text">
      <p>This is a Hot or Cold Number Guessing Game. 
        The game goes like this:</p>
      <ol>
        <li>I pick a 
          <span className="underline"> random secret number </span> 
          between1 to 100 and keep it hidden.</li>
        <li>You need to
          <span className="underline"> guess </span> 
          until you can find the hidden secret number.</li>
        <li>You will 
          <span className="underline"> get feedback </span>
           on how close ("hot") or far ("cold") your guess is.</li>
      </ol>
      <p>So, Are you ready?</p>
    </div>
  )
}
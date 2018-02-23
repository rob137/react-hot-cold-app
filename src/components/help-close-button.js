import React from 'react';
import './help-close-button.css';

export default function HelpCloseButton(props) {
  return (
    <button className="help-close-button"
      onClick={() => props.onClick()}>Got It!
    </button>
  )
}
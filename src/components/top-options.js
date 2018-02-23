import React from 'react';
import NewGameLink from './new-game-link';
import HelpLink from './help-link';
import './top-options.css';

export default function TopOptions(props) {
  return (
    <nav className="top-options">
      <HelpLink onClick={() => props.toggleHelp()}/>
      <NewGameLink onClick={() => props.resetGame()} />
    </nav>
  );
}
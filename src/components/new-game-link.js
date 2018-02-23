import React from 'react';

export default function NewGameLink(props) {
  return( 
    <h2 className="new-game-link"
      onClick={() => props.onClick()}>
      +NEWGAME
    </h2>
  )
} 
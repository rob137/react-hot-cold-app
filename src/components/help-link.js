import React from 'react';

export default function HelpLink(props) {
  return <h2 className="help-link" onClick={() => props.onClick()}>WHAT?</h2>;
}
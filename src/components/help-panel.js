import React from 'react';
import HelpText from './help-text';
import HelpCloseButton from './help-close-button';
import './help-panel.css';
export default function HelpPanel(props) {
  return(
    <aside className="help-panel">
      <div className="help-panel-inner">
        <header className="help-heading-wrapper">
          <h2 className="help-heading">What do I do?</h2>
        </header>
        <section className="text-and-button-section">
          <HelpText />
          <HelpCloseButton onClick={() => props.toggleHelp()}/>
        </section>
      </div>
    </aside>
  )
}
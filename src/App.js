import logo from './logo.svg';
import './App.css';

import React from 'react'

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>paradio official site [WIP]</code>
        </p>
        <a
          className="App-link"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link
        </a>
      </header>
    </div>
  );
}


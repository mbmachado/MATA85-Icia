import './App.scss';

import React from 'react';

function App() {
  const logo = './assets/logo.png';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-Title">ICIA</h1>
      </header>
    </div>
  );
}

export default App;

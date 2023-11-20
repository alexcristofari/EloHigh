import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// App.js
import React from 'react';
import Formulario from './Formulario';

function App() {
  return (
    <div className="App">
      <h1>Meu Formulário</h1>
      <Formulario />
    </div>
  );
}

export default App;
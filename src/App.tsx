import React, { Component } from 'react';
import { Button } from 'reactstrap';

import './App.scss';
import logo from './logo.svg';

class App extends Component {
  render(): JSX.Element {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Edit <code>src/App.js</code> and save to reload (oki).</p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          <Button color="primary">test</Button>
        </header>
      </div>
    );
  }
}

export default App;

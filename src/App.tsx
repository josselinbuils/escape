import React, { Component } from 'react';

import './App.scss';
import Timer from './timer/Timer';

class App extends Component<any> {
  render(): JSX.Element {
    return (
      <div className="App">
        <header className="App-header">
          <Timer/>
        </header>
      </div>
    );
  }
}

export default App;

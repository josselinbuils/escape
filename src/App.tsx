import React, { Component } from 'react';

import './App.scss';
import Timer from './Timer';
import TimerController from './Timer/TimerController';

class App extends Component<any> {
  render(): JSX.Element {
    return (
      <div className="App">
        <header className="App-header">
          <TimerController />
          <Timer />
        </header>
      </div>
    );
  }
}

export default App;

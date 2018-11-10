import React, { Component } from 'react';

import './App.scss';
import Timer from './components/Timer';
import TimerControls from './components/Timer/Controls';

class App extends Component<any> {
  render(): JSX.Element {
    return (
      <div className="App">
        <header className="App-header">
          <TimerControls />
          <Timer />
        </header>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import { TimerControls } from '../Timer';

import './Admin.scss';

export class Admin extends Component<any> {
  render(): JSX.Element {
    return (
      <div className="Admin">
        <header className="header">
          <TimerControls />
        </header>
      </div>
    );
  }
}

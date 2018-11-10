import React, { Component } from 'react';

import { Timer } from '../Timer';

import './Escape.scss';

export class Escape extends Component<any> {
  render(): JSX.Element {
    return (
      <div className="Escape">
        <header className="header">
          <Timer />
        </header>
      </div>
    );
  }
}

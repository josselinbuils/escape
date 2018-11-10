import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Admin } from './components/Admin';
import { Escape } from './components/Escape';

export class App extends Component<any> {
  render(): JSX.Element {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" component={Escape} />
          <Route path="/admin" component={Admin} />
        </div>
      </BrowserRouter>
    );
  }
}

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

import { simpleAction } from './actions/simpleAction';
import './App.scss';
import logo from './logo.svg';

class App extends Component {

  simpleAction = () => (this.props as any).simpleAction();

  render(): JSX.Element {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Edit <code>src/App.js</code> and save to reload (oki).</p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          <Button onClick={this.simpleAction}>Test redux action</Button>
        </header>
        <pre>{JSON.stringify(this.props)}</pre>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({ ...state });
const mapDispatchToProps = (dispatch: any) => ({ simpleAction: () => dispatch(simpleAction()) });

export default connect(mapStateToProps, mapDispatchToProps)(App);

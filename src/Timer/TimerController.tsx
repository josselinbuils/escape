import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

import { startMainTimer, stopMainTimer } from './actions';

class TimerController extends Component<any> {
  render(): JSX.Element {
    const mainStarted = this.props.main.started;

    return (
      <div>
        <Button onClick={this.toggleMainTimer}>{mainStarted ? 'Stop' : 'Start'}</Button>{' '}
      </div>
    );
  }

  toggleMainTimer = () => {
    if (this.props.main.started) {
      this.props.stopMainTimer();
    } else {
      this.props.startMainTimer();
    }
  }
}

const mapStateToProps = (state: any) => state.timerReducer;

const mapDispatchToProps = (dispatch: any) => ({
  startMainTimer: () => dispatch(startMainTimer()),
  stopMainTimer: () => dispatch(stopMainTimer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TimerController);

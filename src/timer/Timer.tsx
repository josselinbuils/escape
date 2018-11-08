import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Fade } from 'reactstrap';

import { startMainTimer, stopMainTimer } from './actions';

class Timer extends Component<any> {
  render(): JSX.Element {
    const mainStarted = this.props.main.started;

    return (
      <div>
        <Button onClick={this.toggleMainTimer}>{mainStarted ? 'Stop' : 'Start'}</Button>{' '}
        <Fade in={this.props.main.timeLeft !== undefined} tag="h5" className="mt-3">
          {this.props.main.timeLeft !== undefined ? Math.ceil(this.props.main.timeLeft) : null}
        </Fade>
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

const mapStateToProps = (state: any) => (state.timerReducer);

const mapDispatchToProps = (dispatch: any) => ({
  startMainTimer: () => dispatch(startMainTimer()),
  stopMainTimer: () => dispatch(stopMainTimer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);

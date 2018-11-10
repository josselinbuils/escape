import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Fade } from 'reactstrap';

class Index extends Component<any> {
  render(): JSX.Element {
    return (
      <div>
        <Fade in={this.props.main.timeLeft !== undefined} tag="h5" className="mt-3">
          {this.props.main.timeLeft !== undefined ? Math.ceil(this.props.main.timeLeft) : null}
        </Fade>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => (state.timerReducer);

export default connect(mapStateToProps)(Index);

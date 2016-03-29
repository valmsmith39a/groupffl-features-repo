import React, { Component } from 'react';
import { verifyLogin } from '../actions/index';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class JoinPanel extends Component {
  handleClick() {
    this.props.verifyLogin();
  }

  render() {
    return (
      <div className="col-xs-3 join-panel">
          <Link to="/join"
            className="join-button join-panel-buttons"
            onClick={this.handleClick.bind(this)}>Join League</Link>
          <Link to="/create"
            className="create-button join-panel-buttons"
            onClick={this.handleClick.bind(this)}>Create League</Link>
      </div>
    );
  }
}

export default connect(null, { verifyLogin })(JoinPanel);

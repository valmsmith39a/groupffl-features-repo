import React, { Component } from 'react';
import { connect } from 'react-redux';
import { verifyLogin } from '../actions/index';

import Navbar from './Navbar';
import JoinPanel from './JoinPanel';
import LeaguesPanel from './LeaguesPanel';

class App extends Component {
  componentWillMount() {
    this.props.verifyLogin();
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          {this.props.children}
          <JoinPanel />
          <LeaguesPanel />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state.isLoggedIn;
}

export default connect(mapStateToProps, { verifyLogin })(App);

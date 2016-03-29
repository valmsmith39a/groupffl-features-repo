import React, { Component } from 'react';
import { connect } from 'react-redux';
import { verifyLogin } from '../actions/index';

import JoinPanel from './JoinPanel';
import LeaguesPanel from './LeaguesPanel';
import Navbar from './Navbar';

class App extends Component {
  componentWillMount() {
    this.props.verifyLogin();
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            {this.props.children}
            <JoinPanel />
            <LeaguesPanel />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.isLoggedIn;
}

export default connect(mapStateToProps, { verifyLogin })(App);

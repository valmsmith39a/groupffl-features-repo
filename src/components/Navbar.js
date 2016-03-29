import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { verifyLogin } from '../actions/index';

class Navbar extends Component {
  componentWillMount() {
    // action to check if user is logged in.
  }

  handleClick() {
    console.log('nav me');
    this.props.verifyLogin();
  }

  render() {
    return (
      <div className="col-xs-12 navbar">
        <div className="container">
          <div className="pull-left navbar-logo">
            <h3>
              <Link to="/" className="navbar-logo-button"> GroupFFL</Link>
            </h3>
          </div>
          <div className="pull-right navbar-buttons">
            <Link to="/register"
              className="btn btn-primary navbar-register"
              onClick={this.handleClick.bind(this)}> Register</Link>
            <Link to="/login"
              className="btn btn-primary navbar-login"
              onClick={this.handleClick.bind(this)}> Login</Link>
          </div>
          <div className="text-center navbar-title">
            <h2>This Is A Super Awesome Title</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { verifyLogin })(Navbar);

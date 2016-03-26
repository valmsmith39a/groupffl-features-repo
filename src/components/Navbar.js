import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navbar extends Component {
  componentWillMount() {
    // action to check if user is logged in.
  }

  render() {
    return (
      <div className="col-xs-12 navbar">
        <div className="pull-left navbar-logo">
          <h3>GroupFFL</h3>
        </div>
        <div className="pull-right navbar-buttons">
          <Link to="/register" className="btn btn-primary navbar-register"> Register</Link>
          <Link to="/login" className="btn btn-primary navbar-login"> Login</Link>
        </div>
        <div className="text-center navbar-title">
          <h2>This Is A Super Awesome Title</h2>
        </div>
      </div>
    )
  }
}

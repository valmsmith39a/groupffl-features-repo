import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navbar extends Component {
  componentWillMount() {
    // action to check if user is logged in.
  }

  render() {
    return (
      <div>
        <Link to="/register" className="btn btn-primary"> Register</Link>
        <Link to="/login" className="btn btn-primary"> Login</Link>
      </div>
    )
  }
}

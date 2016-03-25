import {/*Router, Route, , browserHistory*/ Link } from 'react-router';
import React from 'react';

class SplashLogin extends React.Component {
  render() {
    return (
      <div>
        <Link to="/register">
          <button>Register</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    );
  }
}

export default SplashLogin;

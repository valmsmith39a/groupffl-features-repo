import React from 'react'; 
import { Router, Route, Link, browserHistory } from 'react-router'

class SplashLogin extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>Hello from SplashLogin
        <Link to='/register'>
          <button>Register</button>
        </Link>
        <Link to='/login'>
          <button>Login</button>
        </Link>
      </div>
    );
  }
}

export default SplashLogin;
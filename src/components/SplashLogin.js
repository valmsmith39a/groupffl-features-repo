import React from 'react'; 
import Router from 'react-router';

class SplashLogin extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>Hello from SplashLogin
        <button>Register</button>
        <button>Login</button>
      </div>
    );
  }
}

export default SplashLogin;
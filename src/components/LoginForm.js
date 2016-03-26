import React, { Component } from 'react';

export default class LoginForm extends Component {
  render() {
    return (
      <div className="col-xs-6 login-form">
        <h2 className="login-title">Login</h2>
        <form className="col-xs-10 col-xs-offset-1">
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-default">Login</button>
        </form>
      </div>
    );
  }
}

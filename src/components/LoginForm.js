import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { loginUser } from '../actions/index';


class LoginForm extends Component {

  onSubmit(props) {
    console.log('props: ', props);
    this.props.loginUser(props)
      .then(() => {
        console.log('login successful');
      })
  }

  render() {
    const { fields: {email, password}, handleSubmit } = this.props;

    return (

      <div className="col-xs-6 login-form">
        <h2 className="login-title">Login</h2>
        <form
          onSubmit={handleSubmit(this.onSubmit.bind(this))}
          className="col-xs-10 col-xs-offset-1">
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              {...email} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              {...password} />
          </div>
          <button type="submit" className="btn btn-default">Login</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'LoginForm',
  fields: ['email', 'password'],
}, null, { loginUser })(LoginForm);

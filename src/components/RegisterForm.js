import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { registerUser } from '../actions/index';
import { Link } from 'react-router'; // Only for Cancel

class RegisterForm extends Component {
  onSubmit(props) {
    console.log(props)
    this.props.registerUser(props)
      .then(() => {
        console.log('resolved');
      })
  }

  render() {
    const { fields: { email, password, password2}, handleSubmit } = this.props;

    return (
      <div className="col-xs-6 register-form">
        <h2 className="login-title">Register</h2>

        <form
          onSubmit={handleSubmit(this.onSubmit.bind(this))}
          className="col-xs-10 col-xs-offset-1">
          <div className="form-group">
            <label>Email address</label>
            <input
              type="text"
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
          <div className="form-group">
            <label>Password (again)</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              {...password2} />
          </div>
          <button type="submit" className="btn btn-default">Register</button>
        </form>

      </div>
    );
  }
}

export default reduxForm({
  form: 'RegisterForm',
  fields: ['email', 'password', 'password2']
  // validate
}, null, { registerUser } )(RegisterForm);

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
          <div className={`form-group ${email.touched && email.invalid ? 'has-danger' : ''}`}>
            <label>Email address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter an email"
              {...email} />
            <div className="text-help">
              {email.touched ? email.error : ''}
            </div>
          </div>
          <div className={`form-group ${password.touched && password.invalid ? 'has-danger' : ''}`}>
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              {...password} />
            <div className="text-help">
              {password.touched ? password.error : ''}
            </div>
          </div>
          <div className={`form-group ${password2.touched && password2.invalid ? 'has-danger' : ''}`}>
            <label>Password (again)</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              {...password2} />
            <div className="text-help">
              {password2.touched ? password2.error : ''}
            </div>
          </div>
          <button type="submit" className="btn btn-default">Register</button>
        </form>

      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = 'Enter an email';
  }
  if (!values.password) {
    errors.password = 'Enter a password';
  }
  if (!values.password2) {
    errors.password2 = 'Enter a password';
  }

  if (values.password !== values.password2) {
    errors.password2 = 'Passwords Do Not Match'
  }
  return errors;
}

export default reduxForm({
  form: 'RegisterForm',
  fields: ['email', 'password', 'password2'],
  validate
}, null, { registerUser } )(RegisterForm);

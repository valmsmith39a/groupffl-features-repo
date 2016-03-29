import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { loginUser } from '../actions/index';
import { Link, browserHistory } from 'react-router';



class LoginForm extends Component {

  componentWillMount() {
    if(this.props.isLoggedIn) {
      this.props.history.push('/');
    }
  }

  onSubmit(props) {
    console.log('props: ', props);
    this.props.loginUser(props)
      .then(() => {
        this.props.history.push('/');
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
          <div className={`form-group ${email.touched && email.invalid ? 'has-danger' : ''}`}>
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              {...email} />
          </div>
          <div className="text-help">
            {email.touched ? email.error : ''}
          </div>
          <div className={`form-group ${email.touched && email.invalid ? 'has-danger' : ''}`}>
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              {...password} />
          </div>
          <div className="text-help">
            {password.touched ? password.error : ''}
          </div>
          <button type="submit" className="btn btn-default">Login</button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if(!values.email) {
    errors.email = 'Enter an email';
  }

  if(!values.password) {
    errors.password = 'Enter a password';
  }

  return errors;
}

function mapStateToProps(state) {
  return state.isLoggedIn;
}

export default reduxForm({
  form: 'LoginForm',
  fields: ['email', 'password'],
  validate
}, mapStateToProps, { loginUser })(LoginForm);

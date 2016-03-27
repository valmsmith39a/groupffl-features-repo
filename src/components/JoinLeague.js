/*

Wires in redux-form higher order component
Sets up mechanisms to obtain data from form
Sets up input error handling
Implements action creator to make PUT request to join a league
Creates join league reducers to update application state

*/

import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
// import { joinLeague } from '../actions/index';

class JoinLeague extends Component {
  onSubmit(props) {
    console.log('on submit', props);
  }
  render() {
    const { fields: {league, name }, handleSubmit } = this.props;

    return (
      <div className="col-xs-6 join-league-form">
        <h2 className="login-title">Join League</h2>

        <form
          onSubmit={handleSubmit(this.onSubmit.bind(this))}
          className="col-xs-10 col-xs-offset-1">
          <div className={`form-group ${league.touched && league.invalid ? 'has-danger' : ''}`}>
            <label>League Id</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter League Id"
              {...league}
              />
              <div className="text-help">
                {league.touched ? league.error : ''}
              </div>
          </div>
          <div className={`form-group ${name.touched && name.invalid ? 'has-danger' : ''}`}>
            <label>Team Name</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Team Name"
              {...name}
              />
              <div className="text-help">
                {name.touched ? name.error : ''}
              </div>
          </div>
          <button type="submit" className="btn btn-default">Join</button>
        </form>

      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if(!values.league) {
    errors.league = 'Enter a league ID';
  }

  if(!values.name) {
    errors.name = 'Enter a team name';
  }
  return errors;
}


export default reduxForm ({
  form: 'JoinLeague',
  fields: ['league', 'name'],
  validate
}, null, null)(JoinLeague);

/*
Get the data from form and send create a league object in League database

// Change to Container, link component to dispatcher
// Connect to reduxForm higher order component
// Post request to create a league

*/
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
// import { createLeague } from '../actions/index';
// import { Link, browserHistory } from 'react-router';

class CreateLeague extends Component {
  onSubmit(props) {
    console.log(props);

  }
  render() {
    const { fields: { leagueName, leagueURL, teamName }, handleSubmit } = this.props;

    return (
      <div className="col-xs-6 create-league-form">
        <h2 className="login-title">Create League</h2>

        <form
          onSubmit={handleSubmit(this.onSubmit.bind(this))}
          className="col-xs-10 col-xs-offset-1">
          <div className={`form-group ${leagueName.touched && leagueName.invalid ? 'has-danger' : ''}`}>
            <label>League Name</label>
            <input type="text" className="form-control" placeholder="Enter League Name"
            {...leagueName} />
            <div className="text-help">
              {leagueName.touched ? leagueName.error : ''}
            </div>
          </div>
          <div className={`form-group ${leagueURL.touched && leagueURL.invalid ? 'has-danger' : ''}`}>
            <label>Fantasy League Url</label>
            <input type="text" className="form-control" placeholder="Enter The Url For Your Fantasy League"
            {...leagueURL} />
            <div className="text-help">
              {leagueURL.touched ? leagueURL.error : ''}
            </div>
          </div>
          <div className={`form-group ${leagueURL.touched && teamName.invalid ? 'has-danger' : ''}`}>
            <label>Team Name</label>
            <input type="text" className="form-control" placeholder="Enter Team Name"
            {...teamName} />
            <div className="text-help">
              {teamName.touched ? teamName.error : ''}
            </div>
          </div>
          <button type="submit" className="btn btn-default">Create</button>
        </form>

      </div>
    );
  }
}

export default reduxForm ({
  form: 'CreateLeague',
  fields: ['leagueName', 'leagueURL', 'teamName'],
  //validate
}, null, null)(CreateLeague);

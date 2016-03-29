import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createLeague } from '../actions/index';
// import { Link, browserHistory } from 'react-router';

class CreateLeague extends Component {
  componentWillMount() {
    if (!this.props.isLoggedIn) {
      this.props.history.push('/login');
    }
  }

  onSubmit(props) {
    this.props.createLeague(props)
      .then((res) => {
        // this.props.fetchLeagues();
      })
  }
  render() {
    const { fields: { name, leagueURL, team }, handleSubmit } = this.props;

    return (
      <div className="col-xs-6 create-league-form">
        <h2 className="login-title">Create League</h2>

        <form
          onSubmit={handleSubmit(this.onSubmit.bind(this))}
          className="col-xs-10 col-xs-offset-1">
          <div className={`form-group ${name.touched && name.invalid ? 'has-danger' : ''}`}>
            <label>League Name</label>
            <input type="text" className="form-control" placeholder="Enter League Name"
            {...name} />
            <div className="text-help">
              {name.touched ? name.error : ''}
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
          <div className={`form-group ${leagueURL.touched && team.invalid ? 'has-danger' : ''}`}>
            <label>Team Name</label>
            <input type="text" className="form-control" placeholder="Enter Team Name"
            {...team} />
            <div className="text-help">
              {team.touched ? team.error : ''}
            </div>
          </div>
          <button type="submit" className="btn btn-default">Create</button>
        </form>

      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if(!values.name) {
    errors.name = 'Enter a league name';
  }
  if(!values.leagueURL) {
    errors.leagueURL = 'Enter a league URL';
  }
  if(!values.team) {
    errors.team = 'Enter a team name';
  }

  return errors;
}

function mapStateToProps(state) {
  return state.isLoggedIn;
}

export default reduxForm ({
  form: 'CreateLeague',
  fields: ['name', 'leagueURL', 'team'],
  validate
}, mapStateToProps, { createLeague })(CreateLeague);

/*

Wires in redux-form higher order component
Sets up mechanisms to obtain data from form
Sets up input error handling
Implements action creator to make PUT request to join a league
Creates join league reducers to update application state

*/

import React, { Component } from 'react';

export default class JoinLeague extends Component {
  render() {
    return (
      <div className="col-xs-6 join-league-form">
        <h2 className="login-title">Join League</h2>
        <form className="col-xs-10 col-xs-offset-1">
          <div className="form-group">
            <label>League Id</label>
            <input type="email" className="form-control" placeholder="Enter League Id" />
          </div>
          <div className="form-group">
            <label>Team Name</label>
            <input type="password" className="form-control" placeholder="Enter Team Name" />
          </div>
          <button type="submit" className="btn btn-default">Join</button>
        </form>
      </div>
    );
  }
}

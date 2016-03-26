import React, { Component } from 'react';

export default class CreateLeague extends Component {
  render() {
    return (
      <div className="col-xs-6 create-league-form">
        <h2 className="login-title">Create League</h2>
        <form className="col-xs-10 col-xs-offset-1">
          <div className="form-group">
            <label>League Name</label>
            <input type="email" className="form-control" placeholder="Enter League Name" />
          </div>
          <div className="form-group">
            <label>Fantasy League Url</label>
            <input type="email" className="form-control" placeholder="Enter The Url For Your Fantasy League" />
          </div>
          <div className="form-group">
            <label>Team Name</label>
            <input type="password" className="form-control" placeholder="Enter Team Name" />
          </div>
          <button type="submit" className="btn btn-default">Create</button>
        </form>
      </div>
    );
  }
}

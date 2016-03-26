import React, { Component } from 'react';

export default class JoinLeague extends Component {
  render() {
    return (
      <div className="col-xs-6 join-league-form">
        <h2 className="login-title">Login</h2>
        <form className="col-xs-10 col-xs-offset-1">
          <div className="form-group">
            <label>League Id</label>
            <input type="email" className="form-control" placeholder="Enter League Id" />
          </div>
          <div className="form-group">
            <label>Team Name</label>
            <input type="password" className="form-control" placeholder="Enter Team Name" />
          </div>
          <button type="submit" className="btn btn-default">Login</button>
        </form>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Link } from 'react-router';

export default () => {
    return (
      <div className="col-xs-3 join-panel">
          <Link to="/join" className="join-button join-panel-buttons">Join League</Link>
          <Link to="/create" className="create-button join-panel-buttons">Create League</Link>
      </div>
    )
}

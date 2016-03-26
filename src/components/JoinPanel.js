import React, { Component } from 'react';
import { Link } from 'react-router';

export default () => {
    return (
      <div>
        <Link to="/join" className="btn btn-primary">Join League</Link>
        <Link to="/create" className="btn btn-primary">Create League</Link>
      </div>
    )
}

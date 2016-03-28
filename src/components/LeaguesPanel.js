import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class LeaguesPanel extends Component {
  renderList() {
    /*
    return this.props.leagues.map( (league) => {

    });
    */
  }

  render() {
    return (
      <div className="col-xs-3 league-panel">
        <h3>
          <Link to='/league'>My Leagues</Link>
        </h3>
        <ul className='list-group'>
          {this.renderList()}
        </ul>
       {/*
        <h6>Lorem ipsum dolor sit.</h6>
        <p>Lorem ipsum</p>
        <h6>Lorem ipsum dolor sit.</h6>
        <p>Lorem ipsum</p>
        <h6>Lorem ipsum dolor sit.</h6>
        <p>Lorem ipsum</p>
      */}
      </div>

    )
  }
}

function mapStateToProps(state) {
  return { posts: state.leagues };
}

export default connect(mapStateToProps, null)(LeaguesPanel);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLeagues } from '../actions/index'
import { Link } from 'react-router';

class LeaguesPanel extends Component {
  componentWillMount() {
    this.props.fetchLeagues()
    .then((response) => {
      console.log('fetched Leagues');
    })
  }

  renderList() {
    console.log(this.props.leagues);
    if(!this.props.leagues) {
      return (
        <div>Loading Leagues...</div>
      )
    }

    return this.props.leagues.map((league) => {
      console.log(league);
      return (
        <li className="leagues-group-item list-group-item" key={league._id}>
          <h5><Link to={"league/" + league._id}>
            <span>{league.leagueName}</span>
          </Link></h5>
          <h6>{league.teamName}</h6>
        </li>
      )
    });
  }

  render() {
    return (
      <div className="col-xs-3 league-panel">
        <h3>
          My Leagues
        </h3>
        <ul className='leagues-group'>
          {this.renderList()}
        </ul>
      </div>

    )
  }
}

function mapStateToProps(state) {
  console.log('state is: ', state);
  console.log('state.leagues.all is: ', state.league.all);

  return { leagues: state.league.all };
}

export default connect(mapStateToProps, { fetchLeagues })(LeaguesPanel);

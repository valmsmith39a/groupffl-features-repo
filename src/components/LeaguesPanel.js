import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLeagues } from '../actions/index'
import { Link } from 'react-router';

class LeaguesPanel extends Component {
  componentWillMount() {
    this.props.fetchLeagues();
  }

  renderList() {
    console.log(this.props.leagues);
    return this.props.leagues.map((league) => {
      return (
        <li className="leagues-group-item" key={league._id}>
          <Link to={"league/" + league._id}>
            <span>{league.name}</span>
          </Link>
        </li>
      )
    });
  }

  render() {
    return (
      <div className="col-xs-3 league-panel">
        <h3>
          <Link to='/league'>My Leagues</Link>
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

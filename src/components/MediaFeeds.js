import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


class MediaFeeds extends Component {
  componentWillMount() {
    this.props.fetchRSS()
      .then((response) => {
        console.log('recieved fantasydata');
      })
  }

  render() {
    console.log(this.props.rss.data);
    const placehold1 = "http://placehold.it/300x200";
    const placehold2 = "http://placehold.it/300x400";
    return (
      <div className="col-xs-3 media-feeds">

        <div className="row">

        </div>

        <div className="row">
          <a className="twitter-timeline" href="https://twitter.com/hashtag/FantasyFootball" data-widget-id="713864014485282816">#FantasyFootball Tweets</a>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { rss: state.rss.rss }
}

export default connect(mapStateToProps, actions)(MediaFeeds)

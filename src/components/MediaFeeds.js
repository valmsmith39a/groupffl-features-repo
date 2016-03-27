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

  renderList() {
    console.log(this.props.rss)
    return this.props.rss.data.map(article => {
      return (
        <li
          key={article.NewsID}
          className="list-group-item">
          <h4>{article.Title}</h4>
          <h6>{article.Content}</h6>
          <a href={article.Url}>Player Info</a>
        </li>
      );
    });
  }

  render() {

    if (!this.props.rss.data) {
      return (
        <div>Loading...
        {/*
        <div className="row">
          <a className="twitter-timeline" href="https://twitter.com/hashtag/FantasyFootball" data-widget-id="713864014485282816">#FantasyFootball Tweets</a>
        </div>
        */}
        </div>
      )
    }
    console.log(this.props.rss.data);
    return (
      <div className="col-xs-3 media-feeds">

        <div className="row">
          <div className="media-rss">
            <ul>
              {this.renderList()}
            </ul>
          </div>
        </div>

        {/*
        <div className="row">
          <a className="twitter-timeline" href="https://twitter.com/hashtag/FantasyFootball" data-widget-id="713864014485282816">#FantasyFootball Tweets</a>
        </div>
        */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { rss: state.rss.rss }
}

export default connect(mapStateToProps, actions)(MediaFeeds)

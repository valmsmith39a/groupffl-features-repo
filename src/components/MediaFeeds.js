import React, { Component } from 'react';

export default class MediaFeeds extends Component {
  render() {
    const placehold1 = "http://placehold.it/300x200";
    const placehold2 = "http://placehold.it/300x400";
    return (
      <div className="col-xs-3 media-feeds">
        {/*}
        <div className="row">
          <img className="img-responsive feeds" src={placehold1} />
        </div>
        */}
        <div className="row">
          <a className="twitter-timeline" href="https://twitter.com/hashtag/FantasyFootball" data-widget-id="713864014485282816">#FantasyFootball Tweets</a>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';

export default class MediaVideo extends Component {
  render() {
    return (
      <div className="col-xs-6 media-panel">
        <div>

          <h2>Connect with friends and the football world around you on GroupFFL.</h2>

          <h4><Glyphicon glyph="comment" /> Talk fantasy football with friends</h4>
          <h4>Get recent news from around the league</h4>
          <h4>Find more of what you've been missing</h4>
        </div>
        <iframe width="100%" height="320px" src="https://www.youtube.com/embed/Y_NmwtttzA8" frameborder="0" allowfullscreen></iframe>
      </div>
    );
  }
}

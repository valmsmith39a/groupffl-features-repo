import React, { Component } from 'react';

export default class MediaVideo extends Component {
  render() {
    const placehold = 'http://placehold.it/600x200';

    return (
      <div className="col-xs-6 media">
        <div className="row">
          <img className="img-responsive" src={placehold} />
          <iframe width="100%" height="320px" src="https://www.youtube.com/embed/Y_NmwtttzA8" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    );
  }
}

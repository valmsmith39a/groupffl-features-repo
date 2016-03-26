import React, { Component } from 'react';

export default class MediaVideo extends Component {
  render() {
    const placehold = "http://placehold.it/600x600";

    return (
      <div className="col-xs-6 media">
        <img src={placehold} />
      </div>
    )
  }
}

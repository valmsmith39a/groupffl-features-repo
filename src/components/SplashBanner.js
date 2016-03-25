import React from 'react';

import SplashLogin from './SplashLogin';

class SplashBanner extends React.Component {
  constructor(props) {
    super(props);
    this.logoUrl = 'https://pbs.twimg.com/profile_images/696734415813120000/1QlOcYT7.jpg';
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <img src={this.logoUrl} className="col-md-2"/>
          <h1 className="col-md-8 text-center">Awesome Title</h1>
          <SplashLogin />
        </div>
      </div>
    );
  }
}

export default SplashBanner;

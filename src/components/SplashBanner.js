import React from 'react';
import SplashLogin from './SplashLogin';

class SplashBanner extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>Hello from Splash Banner
        <img src="https://pbs.twimg.com/profile_images/696734415813120000/1QlOcYT7.jpg" />
        <h1>Awesome Title</h1>
        <SplashLogin />
      </div>
    )
  }
}

export default SplashBanner;

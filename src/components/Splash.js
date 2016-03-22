import React from 'react';

import SplashBanner from './SplashBanner';
import SplashBody from './SplashBody';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <SplashBanner />
        <SplashBody />
      </div>
    );
  }
}

export default Splash;

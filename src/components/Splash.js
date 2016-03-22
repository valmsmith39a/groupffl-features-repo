import React from 'react';

import SplashBanner from './SplashBanner';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <SplashBanner />
        <div>Hello from Splash</div>
      </div>
    );
  }
}

export default Splash;

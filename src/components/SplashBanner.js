import React from 'react';
import SplashTitle from './SplashTitle';

class SplashBanner extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>Hello from Splash Banner
        <SplashTitle />
      </div>
    )
  }
}

export default SplashBanner;

import React from 'react';
import SplashTitle from './SplashTitle';
import SplashLogin from './SplashLogin';

class SplashBanner extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>Hello from Splash Banner
        <SplashTitle />
        <SplashLogin />
      </div>
    )
  }
}

export default SplashBanner;

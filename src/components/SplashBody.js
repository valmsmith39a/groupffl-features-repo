import React from 'react';

import SplashDemo from './SplashDemo';
import SplashSidebar from './SplashSidebar';

class SplashBody extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>Really Super Sweet Slogan</h1>
        <SplashDemo />
        <SplashSidebar />
      </div>
    )
  }
}

export default SplashBody;

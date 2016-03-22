import React from 'react'; 

import Leagues from './Leagues';
import NewsFeed from './NewsFeed';

class SplashSidebar extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>Hello from Sidebar
        <Leagues />
        <NewsFeed />
      </div>
    );
  }
}

export default SplashSidebar;
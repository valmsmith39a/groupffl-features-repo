import Leagues from './Leagues';
import NewsFeed from './NewsFeed';
import React from 'react';


class SplashSidebar extends React.Component {
  render() {
    return (
      <div>Hello from Sidebar
        <Leagues />
        <NewsFeed />
      </div>
    );
  }
}

export default SplashSidebar;

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import MediaVideo from './components/MediaVideo';

export default (
  <Route path="/" component={App}>

    <IndexRoute component={MediaVideo} />
    {/*
    <Route path="register" component={RegisterForm} />
    <Route path="login" component={LoginForm} />
    <Route path="join" component={JoinLeague} />
    <Route path="create" component={CreateLeague} />
    */}

  </Route>
);

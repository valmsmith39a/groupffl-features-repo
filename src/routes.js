import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import MediaVideo from './components/MediaVideo';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import JoinLeague from './components/JoinLeague';
import CreateLeague from './components/CreateLeague';
import League from './components/League';
import Posts from './components/Posts';

export default (
  <div>
    <Route path="/" component={App}>
      <IndexRoute component={MediaVideo} />
      <Route path="register" component={RegisterForm} />
      <Route path="login" component={LoginForm} />
      <Route path="join" component={JoinLeague} />
      <Route path="create" component={CreateLeague} />
    </Route>
    <Route path="/league/:id" component={League}>
      <IndexRoute component={Posts} />
    </Route>
  </div>
);

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Index from './containers/indexPosts';
import New from './containers/post';
import Show from './containers/showPosts';

import App from './components/app';
import RequireAuth from './components/require-auth';
import Signin from './components/sign-in';
import Signup from './components/sign-up';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <Route path="/posts/new" component={RequireAuth(New)} />
    <Route path="/posts/:id" component={Show} />
    <Route path="/signin" component={Signin} />
    <Route path="/signup" component={Signup} />
  </Route>
);

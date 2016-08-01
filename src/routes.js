import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Index from './containers/indexPosts';
import New from './containers/post';
import Show from './containers/showPosts';

import App from './components/app';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <Route path="posts/new" component={New} />
    <Route path="posts/:id" component={Show} />
  </Route>
);

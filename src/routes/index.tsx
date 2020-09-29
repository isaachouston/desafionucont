import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard/index';
import Thanks from '../pages/Thanks/index';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/thanks" component={Thanks} />
  </Switch>
);

export default Routes;

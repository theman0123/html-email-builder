/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './screens/App';
import { Home, LandingContainer } from 'screens';

export default () => (
  <App>
    <Switch>
      <Route path="/build-invoices" component={LandingContainer} />
      <Route path="/" component={Home} />
    </Switch>
  </App>
);

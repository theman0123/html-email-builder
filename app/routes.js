/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './screens/App';
import { Home, BuildInvoices } from 'screens';

export default () => (
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/build-invoices" component={BuildInvoices} />
    </Switch>
  </App>
);

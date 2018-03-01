/* eslint flowtype-errors/show-errors: 0 */
import React from 'react'
import { Switch, Route } from 'react-router'
import App from './containers/App'
import { HomeContainer, LandingContainer } from 'containers'

export default () => (
  <App>
    <Switch>
      <Route path="/landing" component={LandingContainer} />
      <Route path="/" component={HomeContainer} />
    </Switch>
  </App>
);

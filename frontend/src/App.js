import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Security, LoginCallback } from '@okta/okta-react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import LicenseManagement from './components/LicenseManagement';
import UserAccess from './components/UserAccess';
import { OktaAuth } from '@okta/okta-auth-js';

const oktaAuth = new OktaAuth({
  issuer: 'https://your-org.okta.com/oauth2/default',
  clientId: 'your_client_id',
  redirectUri: window.location.origin + '/login/callback'
});

const App = () => {
  return (
    <Router>
      <Security oktaAuth={oktaAuth}>
        <Switch>
          <Route
            path='/login/callback'
            component={LoginCallback}
          />
          <Route
            path='/'
            exact
            component={Login}
          />
          <Route
            path='/dashboard'
            component={Dashboard}
          />
          <Route
            path='/license-management'
            component={LicenseManagement}
          />
          <Route
            path='/user-access'
            component={UserAccess}
          />
        </Switch>
      </Security>
    </Router>
  );
};

export default App;

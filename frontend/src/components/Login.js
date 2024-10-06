import React from 'react';
import { useOktaAuth } from '@okta/okta-react';

const Login = () => {
  const { oktaAuth, authState } = useOktaAuth();

  const login = async () => {
    await oktaAuth.signInWithRedirect();
  };

  return (
    <div>
      {!authState.isAuthenticated && (
        <button onClick={login}>Login with AD/Okta</button>
      )}
      {authState.isAuthenticated && (
        <div>You are logged in!</div>
      )}
    </div>
  );
};

export default Login;

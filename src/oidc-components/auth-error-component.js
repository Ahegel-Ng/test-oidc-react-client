import React from 'react';

const AuthenticatingErrorComponent = ({ error }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h2>An error occurred during authentication: {error.message}</h2>
    </div>
  );
};

export default AuthenticatingErrorComponent;

import React from 'react';
import { useOidc } from '@axa-fr/react-oidc';

const Home = () => {

  const { login, logout, isAuthenticated} = useOidc();
  
  return (
    <div className="container-fluid mt-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Welcome!</h5>
          <p className="card-text">React Demo Application protected by OpenID Connect</p>
          {!isAuthenticated && 
            <button type="button" className="btn btn-primary" onClick={() => login('/admin')}>Login</button>}
          {isAuthenticated && 
            <button type="button" className="btn btn-primary" onClick={() => logout('/')}>logout</button>}
        </div>
      </div>
    </div>
  )
};

export default Home;
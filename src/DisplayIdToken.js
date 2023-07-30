import React from 'react';
import { useOidcIdToken } from '@axa-fr/react-oidc';

const DisplayIdToken =() => {
  const{ idToken, idTokenPayload } = useOidcIdToken();

  if(!idToken){
    return <p>you are not authentified</p>
  }
  
  return (
    <div className="card text-white bg-info mb-3">
      <div className="card-body">
        <h5 className="card-title">ID Token</h5>
        {<p className="card-text">{JSON.stringify(idToken)}</p>}
        {idTokenPayload != null && 
          <p className="card-text">{JSON.stringify(idTokenPayload)}</p>}
      </div>
    </div>
  );
};

export default DisplayIdToken;
import React from "react";
import {useOidcUser, OidcUserStatus} from '@axa-fr/react-oidc';

const DisplayUserInfo = () => {
  const {oidcUser, oidcUserLoadingState} = useOidcUser();

  switch (oidcUserLoadingState) {
    case OidcUserStatus.Loading:
      return <p>User Information are loading</p>;
    case OidcUserStatus.Unauthenticated:
      return <p>you are not authenticated</p>;
    case OidcUserStatus.LoadingError:
      return <p>Fail to load user information</p>;
    default:
      return (
        <div className="card text-white bg-success mb-3">
          <div className="card-body">
            <h5 className="card-title">User information</h5>
            <p className="card-text">{JSON.stringify(oidcUser)}</p>
          </div>
        </div>
      );
  }
};

export default DisplayUserInfo;
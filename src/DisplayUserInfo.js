import React, {useEffect, useState} from "react";
import {useOidcUser, OidcUserStatus, useOidcFetch} from '@axa-fr/react-oidc';

const DisplayUserInfo = () => {
  const {oidcUser, oidcUserLoadingState, } = useOidcUser();
  const { fetch: oidcFetch } = useOidcFetch();
  const [user, setUser] = useState("");

  useEffect(() => {
    const logMessage = () => {
      oidcFetch('https://api.homnics.com/user-api/account/current-user')
      .then(response => response.json())
      .catch(error => console.log(error))
      .then(data => {
        setUser(data);
      });
    };

    logMessage();
  }, [oidcUser, oidcUserLoadingState]);

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
            <p className="card-text">{JSON.stringify(user)}</p>
            <p>Username: {oidcUser["user_hm.username"]}</p>
            <p>UserID: {oidcUser["user_hm.userId"]}</p>
            <p>Permissions: {oidcUser["user_hm.permissions"]}</p>
            <p>Email: {user.email}</p>
            <p>Avatar: {user.avatar}</p>
            <p>IsActive: {user.isActive.toString()}</p>
            <p>fullName: {user.fullName}</p>
          </div>
        </div>
      );
  }
};

export default DisplayUserInfo;
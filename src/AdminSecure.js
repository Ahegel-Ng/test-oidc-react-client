import React from 'react';
import { OidcSecure } from '@axa-fr/react-oidc';

const AdminSecure = () => (
  <OidcSecure>
    <h1>My Secured component</h1>
  </OidcSecure>
);

export default AdminSecure;
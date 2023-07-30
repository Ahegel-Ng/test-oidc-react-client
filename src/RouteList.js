import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminSecure from './AdminSecure';
import Home from './Home';
import DisplayIdToken from './DisplayIdToken';
import DisplayUserInfo from './DisplayUserInfo';

const RouteList = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminSecure />} />
        <Route path="/id-token" element={<DisplayIdToken />} />
        <Route path="/user-info" element={<DisplayUserInfo />} />
    </Routes>
  )
};

export default RouteList;
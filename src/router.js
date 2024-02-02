import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResetPassword from './ResetPassword';
const routerConainer = [{ path: '/', element: <ResetPassword /> }];
const NormalRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routerConainer.map((route) => {
          return <Route key={route.path} {...route} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default NormalRoutes;

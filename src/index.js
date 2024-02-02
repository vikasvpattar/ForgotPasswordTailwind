import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import NormalRoutes from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NormalRoutes />
  </React.StrictMode>
);

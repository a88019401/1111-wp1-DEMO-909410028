import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App_28 from './App_28';
import {AppProvider_28} from './Context_28';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider_28> 
      <App_28 />
    </AppProvider_28>
  </React.StrictMode>
);

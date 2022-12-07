import React, { Component }  from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App_28 from './App_28';

import {MenuContextProvider_28,useMenusContext_28} from './ContextApp_28';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MenuContextProvider_28>
    <App_28 />
    </MenuContextProvider_28>

  </React.StrictMode>
);
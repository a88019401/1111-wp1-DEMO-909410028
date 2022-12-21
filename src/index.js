import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App_28 from './App_28';
import {BlogContextProvider_28,useBlogsContext_28} from './BlogContext_28';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BlogContextProvider_28>

    <App_28 />
    
    </BlogContextProvider_28>
   
  </React.StrictMode>,
);
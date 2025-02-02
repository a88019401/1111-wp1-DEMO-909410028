import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App_28 from './App_28';

// 👇️ IMPORTANT: use correct ID of your root element
// this is the ID of the div in your index.html file
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


// 👇️ if you use TypeScript, add non-null (!) assertion operator
// const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <App_28 /> 
  </StrictMode>
);

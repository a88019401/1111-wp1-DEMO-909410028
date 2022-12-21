import React from 'react';

import {useGlobalContext_28} from './Context_28';
// components
import Navbar_28 from './components/Navbar_28';
import CartContainer_28 from './components/CartContainer_28';

// items

const App_28 = () => {
  const {loading, cart} = useGlobalContext_28();
   if (loading) {
     return (
       <div className='loading'>
         <h1>Loading...</h1>
       </div>
     );
   }
  return (
    <main>
      <Navbar_28 />
      <CartContainer_28 />
    </main>
  );
};

export default App_28;

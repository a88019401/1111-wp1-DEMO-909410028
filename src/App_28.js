import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout_28 from './pages/SharedLayout_28';
import AboutPage_28 from './pages/AboutPage_28';
import ProductsPage_28 from './pages/ProductsPage_28';
import ErrorPage_28 from './pages/ErrorPage_28';
import HomePage_28 from './pages/HomePage_28';
function App_28() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout_28 />}>
            <Route index element={<HomePage_28></HomePage_28>} />
            <Route path='about' element={<AboutPage_28></AboutPage_28>} />
            <Route
              path='products'
              element={<ProductsPage_28></ProductsPage_28>}
            />
            <Route path='*' element={<ErrorPage_28></ErrorPage_28>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App_28;

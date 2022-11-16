import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage_28 from './pages/HomePage_28';
import ErrorPage_28 from './pages/ErrorPage_28';
import SharedLayout_28 from './pages/SharedLayout_28';

import P1Page_28 from './pages/P1Page_28';
import P2Page_28 from './pages/P2Page_28';
import P3Page_28 from './pages/P3Page_28';
import P4Page_28 from './pages/P4Page_28';
import P5Page_28 from './pages/P5Page_28';
import P6Page_28 from './pages/P6Page_28';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout_28 />}>
          <Route path='p1_28' element={<P1Page_28 />} />
          <Route path='p2_28' element={<P2Page_28 />} />
          <Route path='p3_28' element={<P3Page_28 />} />
          <Route path='p4_28' element={<P4Page_28 />} />
          <Route path='p5_28' element={<P5Page_28 />} />
          <Route path='p6_28' element={<P6Page_28 />} />
          <Route index element={<HomePage_28 />} />
          <Route path='*' element={<ErrorPage_28 />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar_28 from '../components/Navbar_28';
const SharedLayout_28 = () => {
  return (
    <>
      <Navbar_28 />
      <section className='section'>
        <Outlet />
      </section>
    </>
  );
};
export default SharedLayout_28;

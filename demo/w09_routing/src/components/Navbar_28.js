import React from 'react';
import { Link } from 'react-router-dom';

const Navbar_28 = () => {
  return (
    <nav className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/products'>Products</Link>
      <Link to='/booklist'>booklist</Link>
    </nav>
  );
};

export default Navbar_28;

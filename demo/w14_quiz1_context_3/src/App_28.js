import React, { Component }  from 'react';
import {useState, useEffect, useContext} from 'react';
import './App_28.css';
import Menu_28 from './components/Menu_28';
import Category_28 from './components/Category_28';
import items from './data';
import {useMenusContext_28} from './ContextApp_28';

const allCategories = ['all', 'breakfast', 'lunch', 'shakes', '28'];

const App_28 = () => {
  const{menuItems,filterItems,categories} 
  =useMenusContext_28();
  return (
    <section className='menu'>
      {/*<!-- title -->*/}
      <div className='title'>
        <h2>our menu 90910028</h2>
        <div className='underline'></div>
      </div>
      {/*<!-- filter buttons -->*/}
      <Category_28 categories={categories}filterItems={filterItems} />
      {/*<!-- menu items -->*/}
      <Menu_28 items={menuItems} />
    </section>
  );
};

export default App_28;

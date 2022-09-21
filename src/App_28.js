import { useState } from 'react';
import './App_28.css';
import Menu_28 from './components/Menu_28';
import Category_28 from './components/Category_28';
import items from './data';

const allCategories = ['all', 'breakfast', 'lunch', 'shakes', 'dinner'];

const App_28 = () => {
  const [menuItems, setMenuItems] = useState(items);
  console.log('menuItems', menuItems);
  const [categories, setCategories] = useState(allCategories);
  console.log('categories', categories);
  return (
    <section className='menu'>
      {/*<!-- title -->*/}
      <div className='title'>
        <h2>our menu</h2>
        <div className='underline'></div>
      </div>
      {/*<!-- filter buttons -->*/}
      <Category_28 categories={categories} />
      {/*<!-- menu items -->*/}
      <Menu_28 items={menuItems} />
    </section>
  );
};

export default App_28;

import { useState } from 'react';
import './App_28.css';
import Menu_28 from './components/Menu_28';
import Category_28 from './components/Category_28';
import items from './data';

const allCategories = ['all', 'breakfast', 'lunch', 'shakes', '28'];

const App_28 = () => {
  const [menuItems, setMenuItems] = useState(items);
  console.log('menuItems', menuItems);
  const [categories, setCategories] = useState(allCategories);
  console.log('categories', categories);

  const filterItems = (category) =>{
    if (category === 'all') {
      setMenuItems(items)
      return
  }    
  const newItems = items.filter((item) => item.category === category)
  setMenuItems(newItems)
}
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

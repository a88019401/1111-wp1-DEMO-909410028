import React, { Component }  from 'react';
import {useState, useEffect, useContext} from 'react';import './App_28.css';
import Menu_28 from './components/Menu_28';
import Category_28 from './components/Category_28';
import items from './data';


const MenuContext = React.createContext();
const allCategories = ['all', 'breakfast', 'lunch', 'shakes', '28'];

const MenuContextProvider_28 = ({children}) => {
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
    <MenuContext.Provider 
    value={{menuItems,filterItems,categories}}>
     {children}
    </MenuContext.Provider>

  );
};


const useMenusContext_28 =() =>{
  return useContext(MenuContext)
}
export {MenuContextProvider_28,useMenusContext_28};

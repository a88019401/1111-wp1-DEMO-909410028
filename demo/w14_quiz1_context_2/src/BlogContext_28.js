import React, { useState, useEffect, useContext } from 'react';
import './App_28.css';
import items from './blogData_28';
import BlogList_28 from './components/BlogList_28';
import Alert_28 from './components/Alert_28';
import Blog_28 from './components/Blog_28';

const BlogContext = React.createContext();

const BlogContextProvider_28 = ({children}) => {
  const [blogs, setBlogs] = useState(items);
  console.log('blogs', blogs);
  const removeItem = (id) => {
    showAlert(true, 'blog removed', 'danger');
    setBlogs(blogs.filter((blog) => blog.id !== id));};

  const clearBlogs = (id) => {
    showAlert(true, 'byebye all blogs', 'danger');
    setBlogs([]);};
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',});
  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });};
  const filterItems = (category) => {
    if (category === 'all') {
      setBlogs(items);
    } else {
      const newBlogs = items.filter((blog) => blog.category === category);
      setBlogs(newBlogs);}};

  return (
    <BlogContext.Provider 
    value={{blogs,alert,clearBlogs,filterItems,removeItem}}>
      {children}
    </BlogContext.Provider>);};
const useBlogsContext_28 =() =>{
  return useContext(BlogContext)
}
export  {BlogContextProvider_28,useBlogsContext_28};


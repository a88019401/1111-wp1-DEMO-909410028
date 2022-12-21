import React, { useState, useEffect, useContext,useReducer } from 'react';
import './App_28.css';
import items from './blogData_28';
import BlogList_28 from './components/BlogList_28';
import Alert_28 from './components/Alert_28';
import Blog_28 from './components/Blog_28';
import Reducer_28 from './Reducer_28';
const BlogContext = React.createContext();

const initialState = {
  blogs: items,
  alert:{
    show: false,
    msg: '',
    type: '',}
}

const BlogContextProvider_28 = ({children}) => {

  const[state, dispatch] = useReducer(Reducer_28,initialState);
  //const [blogs, setBlogs] = useState(items);
  //console.log('blogs', blogs);
  //const [alert, setAlert] = useState({
  //  show: false,
  //  msg: '',
  //  type: '',});

  const showAlert = (show = false, msg = '', type = '') => {
    //setAlert({ show, msg, type });
    //dispatch({type:'SHOW_ALERT',payload:{show, msg, type}});
  };
 

  const removeItem = (id) => {
    //showAlert(true, 'blog removed', 'danger');
    //setBlogs(blogs.filter((blog) => blog.id !== id));
   dispatch({type:'REMOVE_ITEM',payload:id})
   dispatch({type:'SHOW_ALERT',payload:{show:true, msg:'blog bye bye', type:'danger'}})

  };

  const clearBlogs = (id) => {
    //showAlert(true, 'byebye all blogs', 'danger');
    //setBlogs([]);
  };



  const filterItems = (category) => {
    if (category === 'all') {
      //setBlogs(items);
    } else {
      const newBlogs = items.filter((blog) => blog.category === category);
      //setBlogs(newBlogs);
    }};

  return (
    <BlogContext.Provider 
    value={{...state,alert,clearBlogs,filterItems,removeItem,showAlert}}>
      {children}
    </BlogContext.Provider>);};
const useBlogsContext_28 =() =>{
  return useContext(BlogContext)
}
export  {BlogContextProvider_28,useBlogsContext_28};


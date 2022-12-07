import React, { useState, useEffect, useContext } from 'react';
import './App_28.css';
import items from './blogData_28';
import BlogList_28 from './components/BlogList_28';
import Alert_28 from './components/Alert_28';
import {useBlogsContext_28} from './BlogContext_28';
import Blog_28 from './components/Blog_28';

const App_28 = () => {
  const{blogs,alert,clearBlogs,filterItems,removeItem,showAlert} 
  =useBlogsContext_28();
  return (
    <>
      <section className='blogs'>
        {alert.show && <Alert_28 {...alert} removeAlert={showAlert} />}
        <div className='section-title'>
          <h2>CSS Grid using breakpoints</h2>
        </div>
        <div className='filter-container'>
          <button
            type='button'
            className='filter-btn'
            onClick={() => filterItems('all')}
          >
            all
          </button>
          <button
            type='button'
            className='filter-btn'
            onClick={() => filterItems('lifestyle')}
          >
            lifestyle
          </button>
          <button
            type='button'
            className='filter-btn'
            onClick={() => filterItems('travel')}
          >
            travel
          </button>
        </div>
        <div className='blogs-center'>
          <BlogList_28 key={1}/>
          
        </div>
        <button className='clear-btn' onClick={clearBlogs}>
          clear all blogs
        </button>
      </section>
    </>
  );
};


export default App_28;


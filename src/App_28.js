import React, { useState, useEffect } from 'react';
import './App_28.css';
import items from './blogData_28';
import BlogList_28 from './components/BlogList_28';

const App_28 = () => {
  const [blogs, setBlogs] = useState(items);
  console.log('blogs', blogs);

  const removeItem = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  const allRemoveItem = (id) => {
    setBlogs([]);
  };

  const filterItems = (category) => {
    if (category === 'all') {
      setBlogs(items);
    } else {
      const newBlogs = items.filter((blog) => blog.category === category);
      setBlogs(newBlogs);
    }
  };

  return (
    <>
      <section className='blogs'>
        <div class='section-title'>
          <h2>CSS Grid using breakpoints</h2>
        </div>
        <div class='filter-container'>
          <button
            type='button'
            class='filter-btn'
            onClick={() => filterItems('all')}
          >
            all
          </button>
          <button
            type='button'
            class='filter-btn'
            onClick={() => filterItems('lifestyle')}
          >
            lifestyle
          </button>
          <button
            type='button'
            class='filter-btn'
            onClick={() => filterItems('travel')}
          >
            travel
          </button>
        </div>
        <div className='blogs-center'>
          <BlogList_28
            key={1}
            blogs={blogs}
            removeItem={removeItem}
          ></BlogList_28>
        </div>
        <button className='clear-btn' onClick={allRemoveItem}>
          clear all blogs
        </button>
      </section>
    </>
  );
};
export default App_28;

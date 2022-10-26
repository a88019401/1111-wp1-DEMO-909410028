import React, { useState, useEffect } from 'react';
import './App_28.css';
import items from './blogData_28';
import BlogList_28 from './components/BlogList_28';

const App_28 = () => {
  const [blogs, setBlogs] = useState(items);
  console.log('blogs', blogs);
  return (
    <section className='blogs'>
      <div class='section-title'>
        <h2>CSS Grid using breakpoints</h2>
      </div>
      <div class='filter-container'>
        <button type='button' class='filter-btn' data-id='all'>
          all
        </button>
        <button type='button' class='filter-btn' data-id='lifestyle'>
          lifestyle
        </button>
        <button type='button' class='filter-btn' data-id='travel'>
          travel
        </button>
      </div>
      <div className='blogs-center'>
        <BlogList_28 key={1} blogs={blogs}></BlogList_28>
      </div>
    </section>
  );
};
export default App_28;

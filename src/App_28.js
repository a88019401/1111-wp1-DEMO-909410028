import React, { useState, useEffect } from 'react';
import './App_28.css';
import items from './blogData_28';

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
      <div class='blogs-center'></div>
      <div className='blogs-center'>
        {blogs.map((blog) => {
          const { id, img, title, desc, category } = blog;
          return (
            <article className='blog'>
              <img src={img} alt='Coffee photo' className='img blog-img' />
              <div className='blog-content'>
                <span>{category}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className='item-control'>
                  <a href='#'>read more</a>
                  <div className='btn-container'>
                    <button type='button' className='edit-btn'>
                      edit
                    </button>
                    <button type='button' className='delete-btn'>
                      delete
                    </button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default App_28;

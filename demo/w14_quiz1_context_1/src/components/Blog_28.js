import React, { useState, useContext } from 'react';

import {useBlogsContext} from '../App_28';
const Blog_28 = ({ id, img, title, desc, category }) => {
  
  //const mainData = useContext(BlogContext);
  const {removeItem} = useBlogsContext();
  return (

  <>
    <article  className='blog'>
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
            <button
              type='button'
              className='delete-btn'
              //onClick={() => mainData.removeItem(id)}
              onClick={() => removeItem(id)}

            >
              delete
            </button>
          </div>
        </div>
      </div>
    </article>
  </>);
};

export default Blog_28;

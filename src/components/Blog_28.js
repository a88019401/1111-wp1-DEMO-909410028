import React from 'react';

const Blog_28 = ({ id, img, title, desc, category }) => {
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
};

export default Blog_28;

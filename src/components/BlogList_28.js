import React from 'react';
import Blog_28 from './Blog_28';
import '../App_28.css';

const BlogList_28 = ({ blogs, removeItem }) => {
  return (
    <div className='blogs-center'>
      {blogs.map((blog) => {
        const { id, img, title, desc, category } = blog;
        return (
          <Blog_28
            id={id}
            img={img}
            title={title}
            desc={desc}
            category={category}
            removeItem={removeItem}
          ></Blog_28>
        );
      })}
    </div>
  );
};

export default BlogList_28;

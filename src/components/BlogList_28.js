import React, { useState, useContext } from 'react';
import Blog_28 from './Blog_28';
import '../App_28.css';
const BlogList_28 = () => {
  const mainData = useContext(ItemContext);
  console.log('mainData',mainData);
  return (
    <div className='blogs-center'>
      {mainData.blogs.map((blog) => {
        const { id, img, title, desc, category } = blog;
        return (
          <Blog_28
            id={id}
            img={img}
            title={title}
            desc={desc}
            category={category}
            //removeItem={removeItem}
          ></Blog_28>
        );
      })}
    </div>
  );
};

export default BlogList_28;

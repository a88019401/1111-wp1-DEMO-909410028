import React, { useState, useContext } from 'react';
import Blog_28 from './Blog_28';
import '../App_28.css';
import {useBlogsContext} from '../App_28';
const BlogList_28 = () => {
  const {blogs} = useBlogsContext();
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
            //removeItem={removeItem}
          ></Blog_28>
        );
      })}
    </div>
  );
};

export default BlogList_28;

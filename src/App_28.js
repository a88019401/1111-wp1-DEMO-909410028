import React, { useState, useEffect, useContext } from 'react';
import './App_28.css';
import items from './blogData_28';
import BlogList_28 from './components/BlogList_28';
import Alert_28 from './components/Alert_28';


//import Blog_28 from './components/Blog_28';

const BlogContext = React.createContext();
const App_28 = () => {
  const [blogs, setBlogs] = useState(items);
  console.log('blogs', blogs);

  const removeItem = (id) => {
    showAlert(true, 'blog removed', 'danger');
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  const clearBlogs = (id) => {
    showAlert(true, 'byebye all blogs', 'danger');
    setBlogs([]);
  };
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
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
    <BlogContext.Provider value={{blogs,alert,clearBlogs,filterItems,removeItem}}>
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
    </BlogContext.Provider>
  );
};

const Blog_28 = ({ id, img, title, desc, category }) => {
  
  //const mainData = useContext(BlogContext);
  const {removeItem} = useContext(BlogContext);
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

const useBlogsContext =() =>{
  return useContext(BlogContext)
}
export  {App_28,useBlogsContext};


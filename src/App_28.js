import React, { useState, useEffect } from 'react';
import './App_28.css';

const App_28 = () => {
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
        <article className='blog'>
          <img
            src='/images/photo-8.jpg'
            alt='Coffee photo'
            className='img blog-img'
          />
          <div className='blog-content'>
            <span>travel</span>
            <h3>Quod expedita quam facere</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <div className='item-control'>
              <a href='#'>read more</a>
              <div className='btn-container'>
                <button type='button' className='edit-btn'>
                  {' '}
                  edit{' '}
                </button>
                <button type='button' className='delete-btn'>
                  {' '}
                  delete{' '}
                </button>
              </div>
            </div>
          </div>
        </article>
        <article className='blog'>
          <img
            src='/images/photo-2.jpg'
            alt='Coffee photo'
            className='img blog-img'
          />
          <div className='blog-content'>
            <span>travel</span>
            <h3>travel to paris</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <div className='item-control'>
              <a href='#'>read more</a>
              <div className='btn-container'>
                <button type='button' className='edit-btn'>
                  {' '}
                  edit{' '}
                </button>
                <button type='button' className='delete-btn'>
                  {' '}
                  delete{' '}
                </button>
              </div>
            </div>
          </div>
        </article>
        <article className='blog'>
          <img
            src='/images/photo-1.jpg'
            alt='Coffee photo'
            className='img blog-img'
          />
          <div className='blog-content'>
            <span>lifestyle</span>
            <h3>why coffee is awesome</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <div className='item-control'>
              <a href='#'>read more</a>
              <div className='btn-container'>
                <button type='button' className='edit-btn'>
                  {' '}
                  edit{' '}
                </button>
                <button type='button' className='delete-btn'>
                  {' '}
                  delete{' '}
                </button>
              </div>
            </div>
          </div>
        </article>
        <article className='blog'>
          <img
            src='/images/photo-1.jpg'
            alt='Coffee photo'
            className='img blog-img'
          />
          <div className='blog-content'>
            <span>lifestyle</span>
            <h3>why coffee is awesome</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <div className='item-control'>
              <a href='#'>read more</a>
              <div className='btn-container'>
                <button type='button' className='edit-btn'>
                  {' '}
                  edit{' '}
                </button>
                <button type='button' className='delete-btn'>
                  {' '}
                  delete{' '}
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default App_28;

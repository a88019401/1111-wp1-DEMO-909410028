import React from 'react';

const Category_28 = ({ categories }) => {
  return (
    <div className='btn-container'>
      {categories.map((categories, index) => {
        return (
          <button
            key={index}
            type='button'
            className='filter-btn'
            data-id='all'
          >
            {categories}
          </button>
        );
      })}
    </div>
  );
};

export default Category_28;

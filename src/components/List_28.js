import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
const List_28 = ({ items }) => {
  return (
    <div className='grocery-list'>
      {items.map((item) => {
        const { id, title } = item;

        return (
          <article className='grocery-item' key={id}>
            <p className='title'>{title}</p>
            <div>
              <button className='edit-btn'>
                <FaEdit></FaEdit>
              </button>
              <button className='delete-btn'>
                <FaTrash></FaTrash>
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List_28;

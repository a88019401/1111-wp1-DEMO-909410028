import React from 'react';
import Book_28 from './Book_28';
import { data } from '../data';
const Booklist_28 = () => {
  return (
    <div>
      <section className='booklist'>
        {data.map((book, index) => {
          const { id, img, title, author } = book;
          return <Book_28 key={id} img={img} title={title} author={author} />;
        })}
      </section>
    </div>
  );
};

export default Booklist_28;

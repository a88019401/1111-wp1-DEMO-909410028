import React from 'react';
import Book_28 from '../components/w02-booklist/Book_28';
import { BookListData } from '../BookListData';
const BookListPage_28 = () => {
  return (
    <div>
      <section className='booklist'>
        {BookListData.map((book, index) => {
          const { id, img, title, author } = book;
          return <Book_28 key={id} img={img} title={title} author={author} />;
        })}
      </section>
    </div>
  );
};

export default BookListPage_28;

import './App_28.css';
/*

第一種寫法 
const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51mDSB+k7YL._SX327_BO1,204,203,200_.jpg',
  title: 'Fairy Tale',
  author: 'Stephen King',
};

const secondBook = {
  img: 'https://m.media-amazon.com/images/P/0134076427.01._SCLZZZZZZZ_SX500_.jpg',
  title: 'Computer Science: An Interdisciplinary Approach 1st Edition',
  author: 'Robert Sedgewick , Kevin Wayne',
};
const thirdBook = {
  img: 'https://m.media-amazon.com/images/P/0241279372.01._SCLZZZZZZZ_SX500_.jpg',
  title: 'The Rough Guide to the Philippines (Travel Guide) (Rough Guides)',
  author: 'Rough Guides',
};
*/
/*寫個陣列*/
const data = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/51mDSB+k7YL._SX327_BO1,204,203,200_.jpg',
    title: 'Fairy Tale',
    author: 'Stephen King',
  },
  {
    id: 2,
    img: 'https://m.media-amazon.com/images/P/0134076427.01._SCLZZZZZZZ_SX500_.jpg',
    title: 'Computer Science: An Interdisciplinary Approach 1st Edition',
    author: 'Robert Sedgewick , Kevin Wayne',
  },
  {
    id: 3,
    img: 'https://m.media-amazon.com/images/P/0241279372.01._SCLZZZZZZZ_SX500_.jpg',
    title: 'The Rough Guide to the Philippines (Travel Guide) (Rough Guides)',
    author: 'Rough Guides',
  },
  {
    id: 4,
    img: 'https://m.media-amazon.com/images/P/0544303016.01._SCLZZZZZZZ_SX500_.jpg',
    title: 'The Food Of Taiwan: Recipes from the Beautiful Island',
    author: 'Cathy Erway ',
  },
  {
    id: 5,
    img: 'https://m.media-amazon.com/images/P/0739082957.01._SCLZZZZZZZ_SX500_.jpg',
    title: 'Super Mario Series for Piano: Intermediate/Advanced Piano Solos',
    author:
      'Koji Kondo (Composer), Shiho Fujii (Composer), Asuka Ohta (Composer), Soyo Oka (Composer), Kenta Nagata (Composer)',
  },
];

const App_28 = () => {
  return (
    <section className='booklist'>
      {data.map((book, index) => {
        const { id, img, title, author } = book;
        return <Book_28 key={id} img={img} title={title} author={author} />;
      })}
      {/*
              <Book_28
              img={firstBook.img}
              title={firstBook.title}
              author={firstBook.author}
            />
            <Book_28
              img={secondBook.img}
              title={secondBook.title}
              author={secondBook.author}
            />
            <Book_28
              img={thirdBook.img}
              title={thirdBook.title}
              author={thirdBook.author}
            />
      */}
    </section>
  );
};

/*這COMPONENT方法顯示出圖片等資料 上面要呼叫Book*/
/*props 是 react傳遞資訊的方法=上面的firstBook*/
const Book_28 = (props) => {
  console.log('props', props);
  const { img, title, author } =
    props; /*解構 讓程式碼更簡單 也可以這樣寫const Book_28 = ({img, title, author}) => {*/
  return (
    <article className='book'>
      <img src={props.img} alt='' />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

export default App_28;

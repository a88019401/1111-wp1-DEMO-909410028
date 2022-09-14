
import './App.css';

const App = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

/*這方法顯示出圖片等資料 上面要呼叫Book*/
const Book = () => {
  return (
    <article className='book'>
      <img src="https://images-na.ssl-images-amazon.com/images/I/51mDSB+k7YL._SX327_BO1,204,203,200_.jpg" alt="" />
      <h1>Fairy Tale</h1>
      <h4>Stephen King</h4>
    </article>
  )
}


export default App;

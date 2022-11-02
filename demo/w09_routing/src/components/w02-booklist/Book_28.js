import React from 'react';
/*這COMPONENT方法顯示出圖片等資料 上面要呼叫Book*/
/*props 是 react傳遞資訊的方法=上面的firstBook*/
const Book_28 = (props) => {
  console.log('props', props);
  const {
    img,
    title,
    author,
  } = props; /*解構 讓程式碼更簡單 也可以這樣寫const Book_28 = ({img, title, author}) => {*/
  return (
    <article className='book'>
      <img src={props.img} alt='' />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

export default Book_28;

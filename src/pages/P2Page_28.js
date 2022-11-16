import { useState } from 'react';
import midterm_data_28 from '../midterm_data_28';

const P2Page_28 = () => {
  const [products, setProducts] = useState(midterm_data_28);
  console.log('products', products);
  return (
    <>
      <h2>P2Page_28</h2>
    </>
  );
};
export default P2Page_28;

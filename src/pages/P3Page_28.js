import { useState } from 'react';
import Product_28 from '../components/Product_28';
import midterm_data_28 from '../midterm_data_28';

const P3Page_28 = () => {
  const [products, setProducts] = useState(midterm_data_28);
  console.log('products', products);
  return (
    <>
      <h2>P3Page_28</h2>
    </>
  );
};
export default P3Page_28;

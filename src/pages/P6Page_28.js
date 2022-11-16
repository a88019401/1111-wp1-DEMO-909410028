import { useEffect, useState } from 'react';
import Product_28 from '../components/Product_28';
import midterm_data_28 from '../midterm_data_28';

const P6Page_28 = () => {
  const [searchName, setSearchName] = useState('');
  const [products, setProducts] = useState(midterm_data_28);

  console.log('products', products);

  return (
    <>
      <h2>P6Page_28</h2>
    </>
  );
};
export default P6Page_28;

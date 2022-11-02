import React from 'react';
import { Link, useParams } from 'react-router-dom';
import products from './data';

const SingleProductPage_28 = () => {
  const { productId } = useParams();
  console.log('productId', productId);
  console.log('products', products);
  const product = products.find((item) => item.id === productId);
  console.log('product', product);
  const { image, name } = product;
  return (
    <section className='section product'>
      <img src={image} alt=''></img>
      <h5>{name}</h5>
      <Link to='/products'> back to products</Link>
    </section>
  );
};

export default SingleProductPage_28;

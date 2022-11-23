import { useEffect, useState } from 'react';
import Product_28 from '../components/Product_28';
import midterm_data_28 from '../midterm_data_28';

import Alert_28 from '../components/Alert_28';
const P6Page_28 = () => {
  const [searchName, setSearchName] = useState('');
  const [products, setProducts] = useState(midterm_data_28);
  console.log('products', products);

  useEffect(() =>{
    const filterProducts = midterm_data_28.filter((product)=>{
      return product.name.toLowerCase().includes(searchName.toLowerCase())
    });
    setProducts(filterProducts);
  },[searchName] )

  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });
  const filterItems = (category) => {
    if (category === 'all') {
      setProducts(midterm_data_28);
    } else {
      const newProducts = midterm_data_28.filter((product) => product.category === category);
      setProducts(newProducts);
    }
  };
  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
  };
  const clearAllProducts = () => {
    showAlert(true, 'all products deleted', 'danger');
    setProducts([]);
  };
  const fetchAllProducts = () => {
    //showAlert(true, 'empty list', 'danger');
    setProducts(midterm_data_28);
  };
  return (
    <>
    <section className="main-section">
         <div className="filter-left">
           <div className="left-content">
             <form className="input-form">
               <input
                 type="text"
                 value={searchName}
                 onChange={(e)=>{
                  setSearchName(e.target.value);
                 }}
                 className="search-input"
                 placeholder="search..."
               />
             </form>
             <h4>Company</h4>
             <article className="companies">
               <button className="company-btn" onClick={()=> filterItems('all')}>all</button>
               <button className="company-btn"onClick={()=> filterItems('ikea')}>ikea</button>
               <button className="company-btn"onClick={()=> filterItems('marcos')}>marcos</button>
               <button className="company-btn"onClick={()=> filterItems('caressa')}>caressa</button>
             </article>
             <button className='clear-btn' onClick={clearAllProducts}>
              Clear All
            </button>
            <button className='fetch-btn' onClick={fetchAllProducts}>
              Fetch All
            </button>
           </div>
         </div>
         {alert.show && <Alert_28 {...alert} removeAlert={showAlert} />}
         <div className="products-right">
           <div className="products-container">
             {products.map((product)=>{
               const{id,img,name,price}=product;
               return(<Product_28 key={id} img={img} name={name} price={price} ></Product_28>
               )
             })}
           </div>
         </div>
       </section>
    </>
  );
};
export default P6Page_28;

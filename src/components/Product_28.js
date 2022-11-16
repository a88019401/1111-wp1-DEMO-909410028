const Product_28 = ({id,img,name,price}) => {/*{id,img,name,price}是解構 */
  return (
    <>
    <div className="single-product">
               <img
                 src={img}
                 className="single-product-img img"
                 alt={name}
               />
               <footer>
                 <h5 className="name">{name}</h5>
                 <span className="price">{price}</span>
               </footer>
             </div>
    </>
  );
};
export default Product_28;

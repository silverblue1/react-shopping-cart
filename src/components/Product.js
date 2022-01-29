import React from 'react';

import '../styles/Product.css';

const Product = ({id, name, price, addItemHandler}) => {
  return <div className='product-card'>
      <h2 className='item-name'>{name}</h2>
      <p className='price-tag'>${price}</p>
      <button onClick={() => addItemHandler(id)}>Add to cart</button>
  </div>;
}

export default Product;

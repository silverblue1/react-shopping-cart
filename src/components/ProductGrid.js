import React from 'react';

// components
import Product from './Product.js';

// services
import data from '../services/Data.js';

// styles
import '../styles/ProductGrid.css';

const ProductGrid = ({cart, addItemHandler}) => {

  return <div className='product-grid'>
    {
        data.length > 0 && 
        data.map(item => 
            {
                return <Product 
                        key={item.id} 
                        id={item.id}
                        name={item.name} 
                        price={item.price}
                        addItemHandler={addItemHandler}
                        />
            }
        )
    }
  </div>;
}

export default ProductGrid;

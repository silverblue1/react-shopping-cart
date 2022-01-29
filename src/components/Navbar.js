import React, { useState } from 'react';

import '../styles/Navbar.css';

const Navbar = ({cart, removeItemFromCartHandler}) => {

  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  }

  const totalPrice = () => {
    let s = 0;
    for(let i=0; i<cart.length; i++) {
      s += cart[i].price * cart[i].quantity;
    }
    return s;
  }

  return <>
          <nav className='Navbar'>
            <h1 className='logo'>Shop</h1>
            <button className='cart-btn' onClick={toggleCart}>Cart ({cart.length})</button>  
          </nav>
          <div className={showCart ? 'menu' : 'inactive'}>
            <h2 className='cart-text'>Cart ({cart.length})</h2>
          {
            showCart && cart.length > 0 && 
            cart.map(item => {
              return <div key={item.id} className='cart-item'>
                <p>
                  <span className='cart-item-name'>{item.name}</span> 
                  <span className='cart-item-qty'>({item.quantity})</span>
                  <span className='cart-item-price'>Price: {item.price*item.quantity}$</span>
                  </p> 
                <button className='remove-item' onClick={() => removeItemFromCartHandler(item.id)}>-</button>
              </div>
            })
          }
          <br/>
          <p className='total-price'>Total: {totalPrice()}$</p>
          <button className='checkout-btn'>Checkout</button>
          </div>
        </>;
}

export default Navbar;

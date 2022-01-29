import React, { useState } from 'react';

import '../styles/Navbar.css';

const Navbar = ({cart}) => {

  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  }

  const totalPrice = () => {
    let s = 0;
    for(let i=0; i<cart.length; i++) {
      s += cart[i].price;
    }
    return s;
  }

  return <>
          <nav className='Navbar'>
            <h1 className='logo'>Shop</h1>
            <button className='cart-btn' onClick={toggleCart}>Cart ({cart.length})</button>  
          </nav>
          <div className={showCart ? 'menu' : 'inactive'}>
            <h2 class='cart-text'>Cart ({cart.length})</h2>
          {
            showCart && cart.length > 0 && 
            cart.map(item => {
              return <div key={item.id} className='cart-item'>
                {item.name} ({item.quantity}) [{item.price}$] - {item.price*item.quantity}$ 
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

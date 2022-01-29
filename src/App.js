import { useState } from "react";

import Navbar from "./components/Navbar.js";

import ProductGrid from "./components/ProductGrid.js";

import './styles/App.css';

import data from './services/Data.js';

const App = () => {
  const [cart, setCart] = useState([]);

  const addItemToCart = (id) => {
    if(cart.find(item => item.id === id)) {
      
    const updatedCart = cart.map(item => {
        
        if(item.id === id) {
          const updatedItem = {
            ...item,
            quantity: item.quantity + 1
          };

          return updatedItem;
        }

        return item;
    })

    setCart(updatedCart);
    } else {
    setCart(() => [...cart, {...data[id], quantity: 1}]);
    }
  }

  const removeItemFromCart = (id) => {
    console.log(id);
    if(cart.find(item => item.id === id)) {
      const updatedCart = cart.map(item => {
          
          if(item.id === id) {
            const updatedItem = {
              ...item,
              quantity: item.quantity - 1
            };
  
            return updatedItem;
          }
  
          return item;
      });

      const filterdCart = updatedCart.filter(item => item.quantity >= 1);

      setCart(filterdCart);
  }
  }

  return (
    <div className="App">
      <Navbar cart={cart} removeItemFromCartHandler={removeItemFromCart}/>
      <ProductGrid cart={cart} 
                   addItemHandler={addItemToCart} 
                   />
    </div>
  );
}

export default App;

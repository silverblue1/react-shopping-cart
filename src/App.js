import Navbar from "./components/Navbar.js";

import ProductGrid from "./components/ProductGrid.js";

import './styles/App.css';

import data from './services/Data.js';

const App = () => {
  let cart = [];

  const addItemToCart = (id) => {
    cart.push({...data[id], quantity: 1});
    console.log(cart);
  }


  return (
    <div className="App">
      <Navbar cart={cart}/>
      <ProductGrid cart={cart} 
                   addItemHandler={addItemToCart} 
                   />
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Hero from './components/Hero';
import HeroNav from './components/HeroNav';
import Notification from './components/Notification';
import About from './pages/About';
import Specials from './pages/Specials';
import Products from './pages/Products';
import Contact from './pages/Contact';
import CategoryPage from './pages/Categories';
import Login from './pages/Login';
import SingleItem from './pages/Singleitem';
import Cart from './pages/Cart';

export interface CartItem {
  id: string;
  name: string;
  quantity: number;
  breed?: string; // Optional, only needed for items with breeds
  portionSize?: number; // Optional, only needed for items with portion sizes
  price: number;
}


function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Function to add an item to the cart
  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        return [...prevCart, item];
      }
    });
  };
  

  function updateCart(id: string, change: number) {
    setCart((prevCart) => 
      prevCart.map(item => {
        if (item.id === id) {
          // Calculate the new quantity
          const newQuantity = item.quantity + change;
  
          // Ensure the quantity is between 1 and 100
          return {
            ...item,
            quantity: Math.min(Math.max(newQuantity, 1), 100),
          };
        }
        return item;
      })
    );
  }
  
  
  
  const removeFromCart = (id: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  return (
    <Router>
      <main>
        <HeroNav cartLength={cart.length} />
        <Notification />
        <div className='mt-[6rem]'>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/About" element={<About />} />
            <Route path="/Specials" element={<Specials />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Products/:categoryName" element ={<CategoryPage />} />
            <Route path="/Products/Cuts/:cutId" element={<SingleItem addToCart={addToCart} updateCart={updateCart}/>} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Cart" element={<Cart cart={cart} updateCart={updateCart} removeFromCart={removeFromCart} />} />
          </Routes>
        </div>
      </main>
    </Router>
  )
}

export default App

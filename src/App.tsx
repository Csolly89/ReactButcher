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
  price: number;
  breeds?: string[];
  // Add any other properties your items might have
}

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Function to add an item to the cart
  const addToCart = (item: CartItem) => {
    setCart((prevCart) => [...prevCart, item]);
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
            <Route path="/Products/Cuts/:cutId" element={<SingleItem addToCart={addToCart}/>} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Cart" element={<Cart cart={cart} />} />
          </Routes>
        </div>
      </main>
    </Router>
  )
}

export default App

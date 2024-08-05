import { BrowserRouter as Router, Route, Routes , useLocation} from 'react-router-dom';

import Hero from './components/Hero';
import HeroNav from './components/HeroNav';
import Notification from './components/Notification';
import About from './pages/About';
import Specials from './pages/Specials';
import Products from './pages/Products';
import Contact from './pages/Contact';
import CategoryPage from './pages/Categories';
import Login from './pages/Login';

function App() {
  // const location = useLocation();
  // const currentUrl = location.pathname;

  return (
    <Router>
      <main>
        <HeroNav />
        <Notification />
        <div className='mt-[6rem]'>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/About" element={<About />} />
            <Route path="/Specials" element={<Specials />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Products/:categoryName" element ={<CategoryPage />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </div>
      </main>
    </Router>
  )
}

export default App

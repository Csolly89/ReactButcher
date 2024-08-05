import { BrowserRouter as Router, Route, Routes , useLocation} from 'react-router-dom';

import Hero from './components/Hero';
import HeroNav from './components/HeroNav';
import Notification from './components/Notification';

function App() {
  // const location = useLocation();
  // const currentUrl = location.pathname;

  return (
    <Router>
      <main>
        <HeroNav />
        <Notification />
        <Routes>
          <Route path="/" element={<Hero />} />
          {/* <Route path="/" element={} />
          <Route path="/" element={} />
          <Route path="/" element={} />
          <Route path="/" element={} /> */}
        </Routes>
      </main>
    </Router>
  )
}

export default App

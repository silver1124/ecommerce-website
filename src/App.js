import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Store from './NavBar.js/Store';
import AboutNav from './NavBar.js/AboutNav';
import HomeNav from './NavBar.js/HomeNav';
import ContactNav from './NavBar.js/ContactNav';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<HomeNav />} />
        <Route path="/" element={<Store />} />
        <Route path="/About" element={<AboutNav />} />
        <Route path="/Contact" element={<ContactNav />} />
        <Route path='/products/:id' element={<ProductDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;

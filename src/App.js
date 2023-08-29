import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Store from './NavBar.js/Store';
import AboutNav from './NavBar.js/AboutNav';
import HomeNav from './NavBar.js/HomeNav';
import ContactNav from './NavBar.js/ContactNav';
import ProductDetails from './pages/ProductDetails';
import LoginNav from './NavBar.js/LoginNav';
import React,{useContext} from 'react'
import AuthContext from './store/auth-context';

function App() {
    const authCtx= useContext(AuthContext);
    const loggedIn = authCtx.isLoggedIn;

  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<HomeNav />} />
        { loggedIn && <Route path="/" element={<Store />} />}
        <Route path="/About" element={<AboutNav />} />
        { !loggedIn && <Route path='/Login' element={<LoginNav/>}/>}
        <Route path="/Contact" element={<ContactNav />} />
        <Route path='/products/:id' element={<ProductDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;

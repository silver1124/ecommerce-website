import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Store from './NavBar.js/Store';
import AboutNav from './NavBar.js/AboutNav';
import HomeNav from './NavBar.js/HomeNav';
import ContactNav from './NavBar.js/ContactNav';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<HomeNav />} />
        <Route path="/" element={<Store />} />
        <Route path="/About" element={<AboutNav />} />
        <Route path="/Contact" element={<ContactNav />} />
      </Routes>
    </Router>
  );
}

export default App;

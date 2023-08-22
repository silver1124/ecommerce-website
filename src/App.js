import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Store from './NavBar.js/Store';
import AboutNav from './NavBar.js/AboutNav';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/About" element={<AboutNav />} />
      </Routes>
    </Router>
  );
}

export default App;

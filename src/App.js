import { Fragment } from 'react';
import './App.css';
import Header from './component/Header';
import Music from './component/Music';
import Footer from './component/Footer';


      
function App() {
  return (
    <Fragment>
      <Header/>
      <Music/> 
      <Footer/>
    </Fragment>
    );
  }


export default App;

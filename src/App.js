import { Fragment, useState } from 'react';
import './App.css';
import Header from './component/Header';
import Music from './component/Music';
import Footer from './component/Footer';
import Cart from './component/Cart';


      
function App() {

  const [cartShown, setCartShown] = useState(false);

    const showCartHandler = ()=>{
      setCartShown(true)
    }
    const hideCartHandler= () => {
      setCartShown(false)
    }

  return (
    <Fragment>
      {cartShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <Music/> 
      <Footer/>
    </Fragment>
    );
  }


export default App;

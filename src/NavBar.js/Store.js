import { useState } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Cart from '../component/Cart';
import CartProvider from '../store/CartProvider';
import ProductList from '../component/ProductList';


      
function Store() {

  const [cartShown, setCartShown] = useState(false);

    const showCartHandler = ()=>{
      setCartShown(true)
    }
    const hideCartHandler= () => {
      setCartShown(false)
    }

  return (
    <CartProvider>
      {cartShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <ProductList onShowCart={showCartHandler} /> 
      <Footer/>
    </CartProvider>
    );
  }


export default Store;
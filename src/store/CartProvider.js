import React , {useState} from 'react';
import CartContext from './CartContext';


const CartProvider = (props) => {

 const [cart , setCart] = useState([]);
 const [total, setTotal] = useState(0);


function addtoCart (newproduct) {
  const existingItem = cart.find(item=> item.title === newproduct.title);
  const updatedTotal =  total + newproduct.price;
  console.log(existingItem , "existingItem in cart provider");
 if(!existingItem){
  const newItem = {...newproduct, quantity : 1 };
  const updatedCart = cart.concat(newItem);
  
  setCart(updatedCart);
  setTotal(updatedTotal);
  // setCart([...cart , newItem]);

 }
 else {
 const updatedItem = {...existingItem , quantity : existingItem.quantity + 1};
 
 const existingItemIndex = cart.findIndex(item=> item.title===newproduct.title);
//  cart[existingItemIndex] = updatedItem;
const updatedCart = [...cart];
updatedCart[existingItemIndex] = updatedItem;
setCart(updatedCart);
setTotal(updatedTotal);
 }

 
  // console.log(newproduct, "In add to cart");
}

function removeFromCart (product) {
  const existingCartItemIndex = cart.findIndex(item=> item.title === product.title);
  const existingItem = cart[existingCartItemIndex];
  const updatedTotal =  total - product.price;
  let updatedItems;
  if(existingItem.quantity === 1)
  {
    updatedItems = cart.filter(item => item.title !== product.title);
    setCart(updatedItems);
    setTotal(updatedTotal);

  }
  else{
    const updatedItem = {...existingItem , quantity : existingItem.quantity -1};
    
    updatedItems = [...cart];
    updatedItems[existingCartItemIndex] = updatedItem;
    setCart(updatedItems);
    setTotal(updatedTotal);
  }
  console.log(product, "In remove from cart");
}

 const cartContext={
  cart,
  total,
  addtoCart,
  removeFromCart,
 }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;
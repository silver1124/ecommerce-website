import React from "react";

const CartContext = React.createContext({
  cart: [],
  totalAmount: 0,
  productList: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext
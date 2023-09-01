import React, { useEffect, useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.quantity;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];

      let updatedItems;
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + action.item.quantity,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

    case "REMOVE":
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingItem = state.items[existingItemIndex];
      const updatedTotal = state.totalAmount - existingItem.price;

      let updatedCartItems;
      if (existingItem.quantity === 1) {
        updatedCartItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedCartItem = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        };
        updatedCartItems = [...state.items];
        updatedCartItems[existingItemIndex] = updatedCartItem;
      }

      return {
        items: updatedCartItems,
        totalAmount: updatedTotal,
      };

    default:
      return state;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  let useremailid = "";
  if (localStorage.getItem("email") === null) {
    useremailid = "";
  } else {
    useremailid = localStorage.getItem("email");
  }
  const plainTextEmail = useremailid.replace(/[^a-zA-Z0-9 ]/g, "");
  console.log(plainTextEmail);

  const addItemFromCartHandler = (item) => {
    const getData = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch(
      `https://crudcrud.com/api/267aff95c8154ef3b2a430056b95954b/Cart${plainTextEmail}`,
      getData
    )
      .then((response) => response.json())
      .then((data) => {
        const duplicateItem = data.findIndex((i) => i.id === item.id);
        console.log(duplicateItem);
        if (duplicateItem === -1 || undefined) {
          fetch(
            `https://crudcrud.com/api/267aff95c8154ef3b2a430056b95954b/Cart${plainTextEmail}`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(item),
            }
          )
            .then((response) => response.json())
            .then((data) => {
              console.log("Add the DATA", data);
              console.log(item);
              dispatchCartAction({ type: "ADD", item: item });
            });
        } else {
          const totalQuantity = item.quantity + data[duplicateItem].quantity;
          console.log(totalQuantity);
          fetch(
            `https://crudcrud.com/api/267aff95c8154ef3b2a430056b95954b/Cart${plainTextEmail}/${data[duplicateItem]._id}`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                id: item.id,
                title: item.title,
                price: item.price,
                image: item.image,
                quantity: totalQuantity,
              }),
            }
          )
            .then((response) => response.json())
            .then((items) => {
              dispatchCartAction({ type: "add", item: items });
              console.log("put");
            });
        }
      });
  };

  useEffect(() => {
    const getData = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch(
      `https://crudcrud.com/api/267aff95c8154ef3b2a430056b95954b/Cart${plainTextEmail}`,
      getData
    )
      .then((response) => response.json())
      .then((data) => {
        data.forEach((item) => {
          dispatchCartAction({ type: "ADD", item: item });
        });
        console.log("get the item", data);
      });
  }, [dispatchCartAction, plainTextEmail]);
  

  ///////////////
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", payload: id });
  };
  const cartContext = {
    items: cartState.items, //current item and amount
    totalAmount: cartState.totalAmount,
    addItem: addItemFromCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

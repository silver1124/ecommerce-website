import React, { useContext } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import CartContext from "../store/CartContext";
import Login from "../pages/Login";

const Generic = (
    <div
      style={{
        background: "grey",
        fontSize: "100px",
        height: "170px",
        color: "white",
        textAlign: "center",
      }}
    >
      {" "}
      The Generics{" "}
    </div>
  );

  const LoginNav = () => {
    const cartCtx = useContext(CartContext);
  
    return (
      <div>
        {Generic}
        <Header onShowCart={cartCtx.showCartHandler} />
        <Login />
        <Footer />
      </div>
    );
  };
  
  export default LoginNav;
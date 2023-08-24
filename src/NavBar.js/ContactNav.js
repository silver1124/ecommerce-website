import React, { useContext } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import CartContext from "../store/CartContext";
import ContactUs from "../pages/ContactUs";

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

  const ContactNav = () => {
    const cartCtx = useContext(CartContext);
  
    return (
      <div>
        {Generic}
        <Header onShowCart={cartCtx.showCartHandler} />
        <ContactUs />
        <Footer />
      </div>
    );
  };
  
  export default ContactNav;
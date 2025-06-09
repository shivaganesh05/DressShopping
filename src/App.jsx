import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./componets/Navbar";
import Hero from "./componets/Hero/Hero";
import Products from "./componets/Products/Products";
import TopProducts from "./componets/TopProducts/TopProducts";
import Banner from "./componets/Banner/Banner";
import Subscribe from "./componets/Subscribe/Subscribe";
import Testimonials from "./componets/Testimonials/Testimonials";
import Footer from "./componets/Footer/Footer";
import Popup from "./componets/Popup/PopUp";
import { CartProvider } from "./componets/CartContext";
import OrderForm from "./componets/OrderForm";

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const [cart, setCart] = useState([]);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
    
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleIncreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <CartProvider>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
    
        <Navbar setOrderPopup={() => setOrderPopup(true)} />
        <Hero handleOrderPopup={handleOrderPopup} />
        <Products />
        <TopProducts cart={cart} setCart={setCart} handleOrderPopup={handleOrderPopup} />
        <Banner />
        <Subscribe />
        <Testimonials />
        <Footer />
          <Popup
        orderPopup={orderPopup}
        setOrderPopup={setOrderPopup}
        cart={cart}
        handleRemoveFromCart={handleRemoveFromCart}
        handleIncreaseQuantity={handleIncreaseQuantity}
        handleDecreaseQuantity={handleDecreaseQuantity}

      />

      </div>
    </CartProvider>
  );
};

export default App;

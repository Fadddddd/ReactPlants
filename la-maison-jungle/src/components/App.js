import { useState } from "react";
import BannerPlop from "./BannerPlop";
import logo from "../assets/logo.png";
import Cart from "./Cart";
import Footer from "./Footer";
import ShoppingList from "./ShoppingList";
import "../styles/Layout.css";

function App() {
  const [cart, updateCart] = useState([]);
  return (
    <div>
      <BannerPlop>
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison jungle</h1>
      </BannerPlop>
      <div className="lmj-layout-inner">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </div>
  );
}

export default App;

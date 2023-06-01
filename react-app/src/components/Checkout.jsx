import React from "react";
import "./Cart.css"

import { useSelector } from "react-redux";

const Checkout = () => {
    
  const products = useSelector((state) => state.cart.products);




  return (
    <div className="w-full items-center justify-center flex">
        test

    </div>
    
  );
};

export default Checkout;
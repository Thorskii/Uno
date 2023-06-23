import React, { useRef } from "react";
import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { userData } from "../helpers";
import emailjs from '@emailjs/browser';
import "./Cart.css"

import { useSelector } from "react-redux";

const Checkout = () => {
    
  const products = useSelector((state) => state.cart.products);
  const userN = userData().username;

  
  const { data, loading} = useFetch(`/users/me?populate=*`);


  useEffect(() => {
    document.title = "Checkout - Uno Distribution";  
  }, []);


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dqid85i', 'template_neg661k', form.current, 'LPTcyIM7ns-E4TWtc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className="w-full items-center justify-center flex">
        Please confirm your information.
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" value={data?.attributes?.businessName} label="Business Name" name="fullName" disabled/>
            <input type="email" value={data?.attributes?.email} label="E-Mail" name="email" disabled/>
            <input type="text" value={data?.attributes?.EIN} label="EIN" name="ein"disabled/>
            <input type="text" value={data?.attributes?.taxResale} label="taxResale" name="taxresale" disabled/>
            <textarea value={products?.map((item) => (
                <div className="item" key={item.id}>
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>Flavors: {item.flavor}</p>
                    <div className="price">{item.quantity} x ${item.price}</div>
                </div>
                </div>
            ))} 
            label="products" name="products" disabled/>
            <input type="submit" value="Place Order" />

        </form>

        
    </div>
    
  );
};

export default Checkout;
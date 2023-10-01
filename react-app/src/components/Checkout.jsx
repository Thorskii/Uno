import React, { useRef } from "react";
import { useEffect } from "react";
import useFetchUser from "../hooks/useFetchUser";
import { useDispatch } from "react-redux";
import { resetCart } from "../redux/cartReducer";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import "./Cart.css"

import { useSelector } from "react-redux";

const Checkout = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {data} = useFetchUser(`/users/me?populate=*`);

  const username = data?.businessName;
  const email = data?.email;
  const EIN = data?.EIN;
  const taxResale = data?.taxResale;


  useEffect(() => {
    document.title = "Checkout - Uno Distribution";  
  }, []);


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          dispatch(resetCart());
          navigate("/");
          alert("Order placed successfully, we will contact you soon in regards to your order!")
      }, (error) => {
          console.log(error.text);
      });
  };

  const tempProducts = [...products]
  tempProducts?.sort((a, b) => a.title.localeCompare(b.title));

//   products?.map((item) => (item.quantity + "x  " + item.title + "   " + item.flavor + "   $"+ item.price + "\n")).join("")
  const mapProds = () => {
    let str = "";
    tempProducts?.map((item) => (str += (item.quantity + "x  |  " + item.title + "  |  " + item.flavor + "  |  $"+ item.price + "  |  $" + item.price*item.quantity + "\n"))).join("")
    return str;
  }

  const totalProds = () => {
    let total = 0;
    tempProducts?.map((item) => (total += (item.price*item.quantity)));
    return "$"+total;
  }


  return (
    <div className="w-full items-center justify-center flex flex-col">
        <h1 className="text-2xl">Please confirm your information is correct.</h1><br/>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col w-3/4 md:w-1/3 h-full">

            <label for="fullName" className="font-bold">Business Name:</label>
            <input type="text" value={username} className="" name="fullName" readonly/><br/>
            <label for="email" className="font-bold">E-mail:</label>
            <input type="email" value={email} name="email" readonly/><br/>
            <label for="ein" className="font-bold">EIN:</label>
            <input type="text" value={EIN} name="ein" readonly/><br/>
            <label for="taxresale" className="font-bold">Tax Resale:</label>
            <input type="text" value={taxResale} name="taxresale" readonly/><br/>
            <label for="products" className="font-bold">Order:</label>
            <textarea  rows={products.length+5} name="products" value={mapProds()} className="whitespace-pre-wrap text-xs sm:text-base" readonly/><br/>
            <label for="taxresale" className="font-bold">Order Subtotal:</label>
            <input type="text" value={totalProds()} name="total" readonly/><br/>
            <input type="submit" value="Place Order" className="hover:underline hover:cursor-pointer border h-[50px] w-[100px] bg-blue-500 text-white"/><br/>

        </form>

        
    </div>
    
  );
};

export default Checkout;
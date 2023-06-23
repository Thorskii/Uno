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
  const {data, loading} = useFetchUser(`/users/me?populate=*`);


  useEffect(() => {
    document.title = "Checkout - Uno Distribution";  
  }, []);


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          dispatch(resetCart());
          navigate("/");
      }, (error) => {
          console.log(error.text);
      });
  };

//   products?.map((item) => (item.quantity + "x  " + item.title + "   " + item.flavor + "   $"+ item.price + "\n")).join("")
  const mapProds = () => {
    let str = "";
    products?.map((item) => (str += (item.quantity + "x  " + item.title + "   " + item.flavor + "   $"+ item.price + "\n"))).join("")
    return str;
  }


  return (
    <div className="w-full items-center justify-center flex flex-col">
        <h1 className="text-2xl">Please confirm your information is correct.</h1><br/>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col sm:w-3/4 md:w-1/3 h-full">

            <label for="fullName" className="font-bold">Business Name:</label>
            <input type="text" value={data?.businessName} name="fullName" readonly/><br/>
            <label for="email" className="font-bold">E-mail</label>
            <input type="email" value={data?.email} name="email" readonly/><br/>
            <label for="ein" className="font-bold">EIN</label>
            <input type="text" value={data?.EIN} name="ein" readonly/><br/>
            <label for="taxresale" className="font-bold">Tax Resale</label>
            <input type="text" value={data?.taxResale} name="taxresale" readonly/><br/>
            <label for="products" className="font-bold">Order</label>
            <textarea  rows={products.length+5} name="products" value={mapProds()} className="whitespace-pre-wrap" readonly/><br/>
            <input type="submit" value="Place Order" className="hover:underline hover:cursor-pointer border h-[50px] w-[100px] bg-blue-500 text-white"/><br/>

        </form>

        
    </div>
    
  );
};

export default Checkout;
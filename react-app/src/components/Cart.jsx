import React, { useEffect } from "react";
import {FaTrashAlt} from "react-icons/fa"
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../redux/cartReducer";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Cart.css"

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  useEffect(() => {
    document.title = "Cart - Uno Distribution";  
  }, []);


  return (
    <div class="w-full items-center justify-center flex">
        <div className="cart">
            <h1>Products in your cart</h1>
            {products?.map((item) => (
                <div className="item" key={item.id}>
                <Link to={`/product/${item.id}`}><img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" /></Link>
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>Flavors: {item.flavor}</p>
                    <p class="w-3/4">{item.desc?.substring(0, 100)}...</p>
                    <div className="price">
                    {item.quantity} x ${item.price}
                    </div>
                </div>
                <FaTrashAlt
                    className="delete"
                    onClick={() => dispatch(removeItem(item.flavor))}
                />
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>${totalPrice()}</span>
            </div>
            <Link to="/checkout" className="butto">PROCEED TO CHECKOUT</Link>
            <span className="reset" onClick={() => dispatch(resetCart())}>
                Reset Cart
            </span>
        </div>
    </div>
    
  );
};

export default Cart;
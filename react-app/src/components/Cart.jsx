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

  const tempProducts = [...products]
  tempProducts?.sort((a, b) => a.title.localeCompare(b.title));


  useEffect(() => {
    document.title = "Cart - Uno Distribution";  
  }, []);


  return (
    <div class="w-full items-center justify-center flex">
        <div className="cart">
            <h1>Products in your cart</h1>
            {tempProducts?.map((item) => (
                <div className="item" key={item.id+item.flavor}>
                <Link to={`/product/${item.id}`}><img src={item.img} alt="" /></Link>
                <div className="details w-full">
                    <h1>{item.title}</h1>
                    <p>Flavor: {item.flavor}</p>
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
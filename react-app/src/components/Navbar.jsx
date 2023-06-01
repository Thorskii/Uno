import React,  { useState } from 'react';
import {Link, useResolvedPath, useMatch} from "react-router-dom"
import logo from '../unologo.png'
import {FaShoppingCart, FaSearch, FaUser, FaBars} from "react-icons/fa"
import { useSelector } from "react-redux";
import { sendtoProfile } from '../helpers';

  
export default function AppRouter() {

    
  const [open,setOpen] = useState(false)
  const products = useSelector((state) => state.cart.products);
  const [navbarOpen, setNavbarOpen] = useState(false);


  return (
    <div className='navContainer'>  
        <nav id="nav" className="items-center text-black flex flex-col md:flex-row justify-between w-screen p-5 px-7">
            <div className="">
                <ul className="flex flex-col md:flex-row text-center md:text-left justify-center">
                    <Link to="/" className="flex items-center justify-center"><img className="h-[40px] md:h-[70px] pl-2 lg:pl-0 lg:pr-7" src={logo} alt="Logo"/></Link>
                    <Link to="/cbd" className="grid p-5 hover:underline items-center justify-center">Hemp-CBD</Link>
                    <Link to="/vapes" className="grid p-5 hover:underline items-center justify-center">Disposable Vapes</Link>
                    <Link to="/puff" className="grid p-5 hover:underline items-center justify-center">Tasty Puff Cones</Link>
                    <Link to="/mushrooms" className="grid p-5 hover:underline items-center justify-center">Mushrooms</Link>
                    <Link to="/kratom" className="grid p-5 hover:underline items-center justify-center">Kratom</Link>
                    <Link to="/love" className="grid p-5 hover:underline items-center justify-center">Love</Link>
                </ul>
            </div>
            <div className=""></div>
            <div className="">
                <ul class="flex flex-col md:flex-row text-center md:text-left justify-right">
                    <CustomLink to="/search" className="grid p-6 hover:bg-gray-200 justify-center" ><FaSearch /></CustomLink>
                    <CustomLink to="/login" className="grid p-6 hover:bg-gray-200 justify-center"><FaUser /></CustomLink>
                    <CustomLink to="/cart" className="grid p-6 relative hover:bg-gray-200 justify-center" onClick={()=>setOpen(!open)}><FaShoppingCart /><span class="text-xs absolute w-[15px] rounded-xl bg-blue-500 text-center items-center justify-center right-4 top-4">{products.length}</span></CustomLink>
                </ul>
            </div>
            
        </nav>
    </div>
  );
};

function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link className="active:bg-yellow-400"to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
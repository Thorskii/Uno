import React,  { useState } from 'react';
import {Link, useResolvedPath, useMatch} from "react-router-dom"
import logo from '../unologo.png'
import {FaCartShopping, FaMagnifyingGlass, FaUser, FaBars, FaX} from "react-icons/fa6"
import { useSelector } from "react-redux";
import { sendtoProfile } from '../helpers';

  
export default function AppRouter() {

  const products = useSelector((state) => state.cart.products);
  const [isMenuClicked, setIsMenuClicked] = useState(true)
  const [menuIcon, setMenuIcon] = useState(<FaX/>)
  const [menuClassName, setMenuClassName] = useState("md:hidden flex gap-x-2 p-5 hover:underline items-center justify-center font-bold")
  const [linkClassName, setLinkClassName] = useState("grid p-5 hover:underline items-center justify-center")

  const openNavbar = () => {
    if(!isMenuClicked) {
        setLinkClassName("grid p-5 hover:underline items-center justify-center")
        setMenuIcon(<FaX/>)
    }
    else {
        setLinkClassName("hidden md:grid md:p-5 md:hover:underline md:items-center md:justify-center")
        setMenuIcon(<FaBars/>)
    }
    setIsMenuClicked(!isMenuClicked)
  }


  return (
    <div className='navContainer'>  
        <nav id="nav" className="items-center text-black flex flex-col md:flex-row justify-between w-screen p-5 px-7">
            <div className="">
                <ul className="flex flex-col md:flex-row text-center md:text-left justify-center">
                    <Link to="/" className="flex items-center justify-center"><img className="h-[40px] md:h-[70px] pl-2 lg:pl-0 lg:pr-7" src={logo} alt="Logo"/></Link>
                    <Link onClick={openNavbar} className={menuClassName}>{menuIcon}Categories</Link>
                    <Link to="/vapes" className={linkClassName}>Disposable Vapes</Link>
                    <Link to="/Energy" className={linkClassName}>Energy Shots/Drinks</Link>
                    {/* <Link to="/cbd" className={linkClassName}>Hemp-CBD</Link> */}
                    <Link to="/kratom" className={linkClassName}>Kratom</Link>
                    <Link to="/mushrooms" className={linkClassName}>Mushrooms</Link>
                    <Link to="/salts" className={linkClassName}>Nicotine Salts</Link>
                    <Link to="/lighters" className={linkClassName}>Lighters</Link>
                    <Link to="/love" className={linkClassName}>Love</Link>
                    <Link to="/cones" className={linkClassName}>Tasty Puff Cones</Link>
                </ul>
            </div>
            <div className=""></div>
            <div className="">
                <ul class="flex flex-col md:flex-row text-center md:text-left justify-right">
                    <CustomLink to="/search" className="grid p-6 hover:bg-gray-200 justify-center" ><FaMagnifyingGlass /></CustomLink>
                    <CustomLink to="/login" className="grid p-6 hover:bg-gray-200 justify-center"><FaUser /></CustomLink>
                    <CustomLink to="/cart" className="grid p-6 relative hover:bg-gray-200 justify-center"><FaCartShopping /><span class="text-xs absolute w-[15px] rounded-xl bg-blue-500 text-white text-center items-center justify-center right-4 top-4">{products.length}</span></CustomLink>
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
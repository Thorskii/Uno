import React from 'react'
import logo from "../unologo.png"

const Footer = () => {
    return (
        <div className="w-full py-16 text-center bg-gray-50">
            <div className="w-11/12 lg:w-10/12 xl:w-1200 m-auto space-y-4">
                <div className=" md:space-y-0 text-center md:flex md:items-center md:justify-center">
                    <div className="wd-40 ml-5 md:w-60 lg:mr-2 mx-auto md:mx-0 items-center justify-center ">
                        <img className="h-[80px] md:h-[100px] inline" src={logo} alt="Logo"/>
                    </div>
                </div>
                <ul className="justify-center md:flex">
                    {/* <li className="hover:underline md:mb-0 md:py-0 mx-4">
                        <a href="/about">About</a>
                    </li> */}
                    <li className="hover:underline md:mb-0 md:py-0 mx-4">
                        <a href="mailto:dan@unowireless.com">Contact</a>
                    </li>
                    <li className="hover:underline md:mb-0 md:py-0 mx-4">
                    </li>
                </ul>
                <ul className="flex justify-center space-x-1 text-gray-400">
                    <li>
                        <a href="/terms-and-conditions">Terms & Conditions</a>
                        <span className="pl-1">•</span>
                    </li>
                    <li>Uno Distribution© 2023<span class="pl-1">•</span></li>
                    <li>All Rights Reserved</li>
                </ul>
                </div>
            </div>

    )
  }

export default Footer
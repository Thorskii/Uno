import React, { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const initialUser = {username: "", email: "", password: "", businessName: "", address: "", EIN: "", taxResale: ""}
const Registration = () => {
    const [user, setUser] = useState(initialUser)
    const navigate = useNavigate();

    const signUp = async () => {
        try {
            const url = `https://strapi-production-fc5a.up.railway.app/api/auth/loca/register`;
            if(user.username && user.email && user.password) {
                const res = await axios.post(url, user);
                if(!!res){
                    setUser(initialUser)
                    navigate("/login")
                    console.log(res)
                }
            }
            
        } catch (error) {
            console.log({ error });
            console.log("Error with registration!")
        }
    }

    const handleUserChange = ({target}) => {
        const {name, value} = target;
        setUser((currentUser) => ({...currentUser, [name]: value,}) )
    }

    useEffect(() => {
        document.title = "Register - Uno Distribution";  
      }, []);

    return (
    <div className="flex w-full">
        <div className="relative flex justify-center items-center w-full">
            <form className="flex flex-col gap-y-2 w-1/6">    
                <h2 className="pb-5">Sign Up:</h2>
                <div>
                    <h2>Username:</h2>
                    <input type="text" name="username" value={user.username} onChange={handleUserChange} placeholder="Enter your name" className="rounded border-2 border-gray-200 w-full"/>
                </div>
                <div>
                    <h2>Password:</h2>
                    <input type="password" name="password" value={user.password} onChange={handleUserChange} placeholder="Enter your password" className="rounded border-2 border-gray-200 w-full"/>
                </div>
                <div>
                    <h2>Email:</h2>
                    <input type="email" name="email" value={user.email} onChange={handleUserChange} placeholder="Enter your email" className="rounded border-2 border-gray-200 w-full"/>
                </div>
                <div>
                    <h2>Business Name:</h2>
                    <input type="text" name="businessName" value={user.businessName} onChange={handleUserChange} placeholder="Enter your business's name" className="rounded border-2 border-gray-200 w-full"/>
                </div>
                <div>
                    <h2>Business Address:</h2>
                    <input type="text" name="address" value={user.address} onChange={handleUserChange} placeholder="Enter your business's address" className="rounded border-2 border-gray-200 w-full"/>
                </div>
                <div>
                    <h2>Employer Identification Number (EIN):</h2>
                    <input type="text" name="EIN" id="EIN" value={user.EIN} onChange={handleUserChange} placeholder="Enter your EIN" className="rounded border-2 border-gray-200 w-full"/>
                </div>
                <div>
                    <h2>Business Tax Resale Number:</h2>
                    <input type="text" name="taxResale" id="taxResale" value={user.taxResale} onChange={handleUserChange} placeholder="Enter your Tax Resale Number" className="rounded border-2 border-gray-200 w-full"/>
                </div>
                
                
                
                
                <button className="hover:cursor-pointer hover:underline p-5" onClick={signUp}>Register</button>
            </form>
        </div>
    </div>
    )
}

export default Registration
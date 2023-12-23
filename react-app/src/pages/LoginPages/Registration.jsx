import React, { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const initialUser = {username: "", email: "", password: "", businessName: "", address: "", EIN: "", taxResale: ""}
const Registration = () => {
    const [user, setUser] = useState(initialUser)
    const navigate = useNavigate();

    const signUp = async () => {
        try {
            const url = process.env.REACT_APP_API_URL + `/auth/local/register`;
            if(user.username && user.email && user.password) {
                const res = await axios.post(url, user);
                if(!!res){
                    setUser(initialUser)
                    navigate("/login")
                    alert("Account successfully created.")
                    console.log(res)
                }
            }
            
        } catch (error) {
            console.log({ error });
            console.log("Error with registration!")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signUp();
      };

    const handleUserChange = ({target}) => {
        const {name, value} = target;
        setUser((currentUser) => ({...currentUser, [name]: value,}) )
    }

    useEffect(() => {
        document.title = "Register - Uno Distribution";  
      }, []);

    const inputArea = "w-full border rounded border border-slate-300 placeholder-slate-400 focus:outline-none  focus:border-sky-500  focus:ring-1  focus:ring-sky-500 disabled:bg-slate-50  disabled:text-slate-500  disabled:border-slate-200  disabled:shadow-none invalid:border-pink-500  invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"

    return (
    <div className="flex w-full">
        <div className="relative flex justify-center items-center w-full">
            {/* <form className="flex flex-col gap-y-2 w-1/6" onSubmit={(event) => event.preventDefault()}>*/}
            <form className="flex flex-col gap-y-2 w-1/6" onSubmit={handleSubmit}>
                <h2 className="pb-5 font-bold">Sign Up:</h2>
                <div>
                    <h2>Username:</h2>
                    <input type="text" name="username" value={user.username} onChange={handleUserChange} placeholder="Enter your name" className={inputArea} required/>
                </div>
                <div>
                    <h2>Password:</h2>
                    <input type="password" name="password" value={user.password} onChange={handleUserChange} placeholder="Enter your password" className={inputArea} required/>
                </div>
                <div>
                    <h2>Email:</h2>
                    <input type="email" name="email" value={user.email} onChange={handleUserChange} placeholder="Enter your email" className={inputArea} required/>
                </div>
                <div>
                    <h2>Business Name:</h2>
                    <input type="text" name="businessName" value={user.businessName} onChange={handleUserChange} placeholder="Enter your business's name" className={inputArea} required/>
                </div>
                <div>
                    <h2>Business Address:</h2>
                    <input type="text" name="address" value={user.address} onChange={handleUserChange} placeholder="Enter your business's address" className={inputArea} required/>
                </div>
                <div>
                    <h2>Employer Identification Number (EIN):</h2>
                    <input type="text" name="EIN" id="EIN" pattern="^\d{2}-\d{7}" value={user.EIN} onChange={handleUserChange} placeholder="XX-XXXXXXX" className={inputArea} required/>
                </div>
                <div>
                    <h2>Business Tax Resale Number:</h2>
                    <input type="text" name="taxResale" id="taxResale" pattern="^\d{8}-\d{3}-STC" value={user.taxResale} onChange={handleUserChange} placeholder="XXXXXXXX-XXX-STC" className={inputArea} required/>
                </div><br/>
                {/* <button className="hover:bg-blue-300 hover:underline py-2 w-full rounded bg-blue-400 w-full text-white " onClick={signUp}>Register</button><br/> */}
                <input type="submit" className="hover:bg-blue-300 hover:underline py-2 w-full rounded bg-blue-400 w-full text-white cursor-pointer" value="Register"></input><br/>
            </form>
        </div>
    </div>
    )
}

export default Registration
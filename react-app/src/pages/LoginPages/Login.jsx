import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom"
import { storeUser } from "../../helpers";


const initialUser = { password: "", identifier: "" }

const Login = () => {
    const [user, setUser] = useState(initialUser)
    const navigate = useNavigate();

    const handleChange = ({ target }) => {
        const {name, value} = target;
        setUser((currentUser) => ({
            ...currentUser,
            [name]: value,
        }));
    };

    const handleLogin = async () => {
        const url = process.env.REACT_APP_API_URL + `/auth/local`;
        try {
            if(user.identifier && user.password) {
                const { data } = await axios.post(url, user);
                if(data.jwt){
                    storeUser(data)
                    setUser(initialUser);
                    navigate("/");
                }
            }
            
        } catch (error) {
            console.log({ error });
            console.log("Error with login!")
        }

    }

    useEffect(() => {
        document.title = "Login - Uno Distribution";  
      }, []);

    return (
    <div className="flex justify-center items-center align-middle h-[55vh]">
        <div>
            <h2 className="pb-5 text-2xl font-bold">Login:</h2>
            <form className="flex flex-col gap-y-2" onSubmit={(event) => event.preventDefault()}>
                <input type="email" name="identifier" value={user.email} onChange={handleChange} placeholder="Enter your email" className="rounded border-2 border-gray-200 w-full"/>
                <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your password" className="rounded border-2 border-gray-200 w-full" />
                <div className="flex w-1/2">
                    <button onClick={handleLogin} className="hover:bg-blue-300 hover:underline py-2 w-full rounded bg-blue-400 w-full text-white ">Login</button>
                </div>
            </form><br/>
            <p>Don't have an account yet? <Link to="/register" className="text-center hover:underline text-blue-500">Sign Up</Link></p>
        </div>
    </div>
    )
}

export default Login
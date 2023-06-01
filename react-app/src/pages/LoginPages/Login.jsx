import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom"
import { storeUser } from "../../helpers";
import Profile from "./Profile";


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
        const url = `http://localhost:1337/api/auth/local`;
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
    <div className="flex justify-center items-center">
        <div>
            <h2 className="pb-5">Login:</h2>
            <form className="flex flex-col gap-y-2">
                <input type="email" name="identifier" value={user.email} onChange={handleChange} placeholder="Enter your email"/>
                <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your password"/>
                <button onClick={handleLogin}>Login</button>
                <Link to="/register">Sign Up</Link>
            </form>
        </div>
    </div>
    )
}

export default Login
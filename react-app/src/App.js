import {Route, Routes} from "react-router-dom"

import "./styles.css"

import Home from "./pages/Home"
import About from "./pages/About"
import Product from './pages/Product';
import Cbd from "./pages/Cbd"
import Mushrooms from "./pages/Mushrooms"
import Kratom from "./pages/Kratom"
import Cart from "./components/Cart"
import SearchPage from "./pages/SearchPage"
import Checkout from "./components/Checkout"
import Termsandconditions from "./pages/terms-and-conditions";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Login from "./pages/LoginPages/Login";
import Logout from "./pages/LoginPages/Logout";
import Registration from "./pages/LoginPages/Registration";

import { Protector } from "./helpers";

import Profile from "./pages/LoginPages/Profile";
import { SendtoProfile } from "./helpers";
import KratomInfo from "./pages/KratomInfo";





 function App() {
  return (
    <>
    <Navbar />
    <div className="container" class="">
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/product/:id" element={<Product />}/>
            <Route path="/cbd" element={<Cbd />}/>
            <Route path="/mushrooms" element={<Mushrooms />}/>
            <Route path="/kratom" element={<Kratom />}/>
            <Route path="/cart" element={<Protector Component={Cart}/>}/>
            <Route path="/terms-and-conditions" element={<Termsandconditions />}/>
            <Route path="/search" element={<SearchPage />}/>
            <Route path="/checkout" element={<Protector Component={Checkout}/>}/>

            <Route path="/login" element={<SendtoProfile Component={Login}/>}/>
            <Route path="/logout" element={<Logout />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/register" element={<Registration />}/>

            <Route path="/kratominfo" element={<KratomInfo />}/>
            


            
        </Routes>
    </div>
    <Footer />
    </>
  );
};

export default App;

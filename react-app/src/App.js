import {Route, Routes} from "react-router-dom"

import "./styles.css"

import Home from "./pages/Home"
import About from "./pages/About"
import Product from './pages/Product';
import Cbd from "./pages/Cbd"
import Mushrooms from "./pages/Mushrooms"
import Kratom from "./pages/Kratom"
import Vapes from "./pages/Vapes"
import Love from "./pages/Love"
import Cones from "./pages/TastyPuffCones";
import Salts from "./pages/Salts";
import Lighters from "./pages/Lighters";
import Energy from "./pages/Energy";
import Kava from "./pages/Kava";

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
import Vapes2 from "./pages/Vapes2";



// Re-add all CBD except Hemp Co Shots display & Space Gods

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
            <Route path="/kava" element={<Kava />}/>

            <Route path="/kratom" element={<Kratom />}/>
            <Route path="/vapes" element={<Vapes />}/>
            {/* <Route path="/vapes2" element={<Vapes2 />}/> */}
            <Route path="/love" element={<Love />}/>
            <Route path="/cones" element={<Cones />}/>
            <Route path="/salts" element={<Salts />}/>
            {/*<Route path="/lighters" element={<Lighters />}/>*/}
            <Route path="/energy" element={<Energy />}/>


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

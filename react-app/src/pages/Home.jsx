import React, { useEffect } from 'react';
import Slideshow from "../components/Slideshow"
  
const Home = () => {

    useEffect(() => {
        document.title = "Home - Uno Distribution";  
      }, []);


  return (
    <div className="w-full justify-center items-center">
        <div id="Slideshow"><Slideshow /></div>
        
    </div>
  );
};
  
export default Home;
import React from "react"
import { useState, useEffect } from "react"
import List from "../components/List"
import useFetch from "../hooks/useFetch"
import "./Products.css"



const Products = () => {

    const [maxPrice, setMaxPrice] = useState(1000);
    const [sort,setSort] = useState(null);
    const [selectedCats, setSelectedCats] = useState([]);

    // const {data, loading, error} = useFetch(`/categories?filters[id][$eq]=${catId}`)
    const {data, loading, error} = useFetch(`/categories?populate=*`)

    const handleChange =(e)=>{
        const value = e.target.value;
        const isChecked = e.target.checked;

        setSelectedCats(isChecked ? [...selectedCats, value] : selectedCats.filter((item)=>item !== value))
    }

    console.log(selectedCats)

    const [isMobile, setIsMobile] = useState(false);
    const [isLeftVisible, setIsLeftVisible] = useState(true);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      // Initial check on component mount
      handleResize();
  
      // Add event listener for window resize
      window.addEventListener("resize", handleResize);
  
      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    const toggleLeftVisibility = () => {
      setIsLeftVisible(!isLeftVisible);
    };

    return (
    
    <div className="products">
        <br></br>
        {isMobile && (
        <button onClick={toggleLeftVisibility}>
          {isLeftVisible ? "Hide" : "Show"} Filters
        </button>
      )}
       <div className={`left ${isLeftVisible ? "visible" : "hidden"}`}>
        <div className="filterItem">
            <h2>Product Categories</h2>
            {data?.map((item)=>(
                <div className="inputItem" key={item.id}>
                    <input 
                        type="checkbox" 
                        id={item.id} 
                        value={item.id} 
                        onChange={handleChange}
                    />
                    <label htmlFor={item.id}>{item.attributes.Name}</label>
                </div>
            ))}
        </div>
        {/* <div className="filterItem">
            <h2>Filter by Price</h2>
            <div className="inputItem">
                <span>0</span>
                <input 
                    type="range" 
                    min={0} 
                    max={1000} 
                    onChange={(e)=>setMaxPrice(e.target.value)}/>
                <span>{maxPrice}</span>
            </div>
        </div> */}
        <div className="filterItem">
            <h2>Sort by Price</h2>
            <div className="inputItem">
                <input type="radio" id="asc" value="asc" name="price" onChange={e=>setSort("asc")}/>
                <label htmlFor="asc">Price (Lowest first)</label>
            </div>
            <div className="inputItem">
                <input type="radio" id="desc" value="desc" name="price" onChange={e=>setSort("desc")}/>
                <label htmlFor="desc">Price (Highest first)</label>
            </div>
        </div>
       </div>
       <div className="right">
        {/* <img src="" alt="" className="catImg" /> */}
        <List maxPrice={maxPrice} sort={sort} cats={selectedCats}/>
       </div>

    </div>
    )
  }
  export default Products
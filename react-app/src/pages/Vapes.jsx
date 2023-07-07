import React from "react"
import { useState, useEffect } from "react"
import GetCards from "../components/GetCards"



const Vapes = () => {
    const [sort,setSort] = useState(null);
    const [sortType, setSortType] = useState(null);


    useEffect(() => {
        setSort("asc")
      }, []);

      useEffect(() => {
        setSortType("brand")
      }, []);


      useEffect(() => {
        document.title = "Vapes - Uno Distribution";  
      }, []);

    return (
    <div className="">
        <div className='relative p-5'>
            <h1 className="absolute font-bold text-4xl p-5 text-mushTitle left-0 lg:left-[220px] lg:-top-5">Disposable Vapes</h1>
        </div>
        
        <div className="py-6 flex flex-col md:flex-row">
            <div className="p-10 w-64">
                <div className="">
                    <h2 className="font-bold">Sort</h2>
                    <div className="">
                        <input type="radio" id="brand" value="brand" name="sort" onChange={e=>{setSort("asc"); setSortType("brand")}} defaultChecked/>
                        <label htmlFor="brand">Brand (A-Z)</label>
                    </div>
                    <div className="">
                        <input type="radio" id="branddesc" value="branddesc" name="sort" onChange={e=>{setSort("desc"); setSortType("brand")}}/>
                        <label htmlFor="branddesc">Brand (Z-A)</label>
                    </div>
                    <div className="">
                        <input type="radio" id="asc" value="asc" name="sort" onChange={e=>{setSort("asc"); setSortType("price")}}/>
                        <label htmlFor="asc">Price (Ascending)</label>
                    </div>
                    <div className="">
                        <input type="radio" id="desc" value="desc" name="sort" onChange={e=>{setSort("desc"); setSortType("price")}}/>
                        <label htmlFor="desc">Price (Descending)</label>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-wrap justify-center ">
                <GetCards sort={sort} sortType={sortType} catId="4"/>
            </div>
            <div className="w-54"></div>
        </div>
    </div>

    )
  }
  export default Vapes
import React from "react"
import { useState, useEffect } from "react"
import Search from "../components/Search"



const SearchPage = () => {
    const [sort,setSort] = useState(null);
    const [sortType, setSortType] = useState(null);


    useEffect(() => {
        setSort("asc")
      }, []);

      useEffect(() => {
        setSortType("brand")
      }, []);

    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    };

    useEffect(() => {
        document.title = "Search - Uno Distribution";  
      }, []);

    return (
    <div>
        <h1 className="font-bold text-4xl pb-5 md:pb-0 pt-5 pl-5 text-mushTitle">Search</h1>
        <div className="flex w-full justify-center ">
            <input
                type="text"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput} 
                className="rounded w-96 border border-solid border-1 border-gray-300 "/>
        </div>

        <div className="py-6 flex flex-col md:flex-row">
            <div className="p-10 w-64">
                <   div className="">
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
                <Search sort={sort} sortType={sortType} name={searchInput}/>
            </div>
            <div className="w-54"></div>
        </div>
    </div>

    )
  }
  export default SearchPage
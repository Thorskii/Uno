import React from "react";
import Card from "./Card";
import useFetch from "../hooks/useFetch";


const Search = ({name, sort}) => {
    
    const { data, loading } = useFetch(
        // `/products?populate=*&[filters][Name][$containsi]=${name}&sort=price:${sort}` //good
        // `/products?populate=*&filters[Name][$containsi]=${name}&sort=price:${sort}`
        `/products?populate=*&filters[$or][0][Name][$containsi]=${name}&filters[$or][1][brand][$containsi]=${name}&sort=price:${sort}`
      );


      
  return (
    // w-fit grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center gap-10 flex items-center justify-center
    <div class="w-full">
        <div className="flex flex-wrap md:gap-5 w-full">
            {loading
                ? "loading"
                : data?.map((item) => <Card item={item} key={item.id} />)}
            </div>
    </div>
  );
};

export default Search;


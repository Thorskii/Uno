import React from "react";
import Card from "./Card";
import useFetch from "../hooks/useFetch";


const List = ({ cats, maxPrice, sort}) => {
    
    const { data, loading, error } = useFetch(
        // `/products?populate=*&filters[categories][id][$eq]=${[cats]}&sort=price:${sort}`

        // `/products?populate=*&${cats.map((item) => `&filters[categories][id][$eq]=${item}`)}&sort=price:${sort}` //good

        
        `/products?populate=*&[filters][categories][id]=${[cats]}${cats.map((item) => `&[filters][categories][id][$eq]=${item}`)}&sort=price:${sort}`

        
      );


      
  return (
    <div className="list">
      {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;


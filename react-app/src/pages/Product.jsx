import React, { useEffect, useState } from 'react';
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartReducer";
import {FaCartPlus, FaArrowLeft, FaArrowRight} from "react-icons/fa"
import axios from 'axios';
import { userData } from '../helpers';
 
const Product = () => {
    const id = useParams().id;
    const [selectedImg, setSelectedImg] = useState("img");
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
  
    const { data, loading} = useFetch(`/products/${id}?populate=*`);

    const [flavors, setFlavors] = useState([]);
    const [chosenFlavor, setChosenFlavor] = useState([]);

    const { jwt } = userData();
    const isLoggedIn = !!jwt;

    const checkStatus = () => {
        if(isLoggedIn) {
            return "$"+data?.attributes?.price
        } else {
            return "Log in to see price!"
        }
    }

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL+`/flavors?populate[products]=*&filters[products][id][$eq]=${id}&sort=Name`)
        .then(res => setFlavors(res.data))
        .catch(err => console.log(err));
      }, [id])


      useEffect(() => {
        setChosenFlavor("")
      }, []);

      const externalHTML = `<FaCartPlus className=""/>ADD TO CART`
      useEffect(() => {
        const interval = setInterval(() => {
            
            document.getElementById("add-to-cart").innerHTML = externalHTML;
        }, 2000);
      
        return () => clearInterval(interval);
      }, []);

      const checkCat = () => {
        if(data?.attributes?.categories === "Kratom Products") {
            return "STRAINS"
        } else {
            return "FLAVORS"
        }
    } 

      useEffect(() => {
        document.title = data?.attributes?.Name + " - Uno Distribution";  
      });

  
    return (
      <div className="flex flex-col md:flex-row py-10 px-50 gap-50">
        {loading ? (
          "loading"
        ) : (
          <>
            <div className="flex flex-col md:flex-row md:flex-1 mx-auto gap-5 ">
              <div className="hidden md:flex md:flex-col md:flex-1 max-w-[150px]">
                <img className="w-full h-[150px] w-[150px] hidden lg:flex object-cover cursor-pointer mb-[10px] ml-[5px] border border-solid border-gray border-1"src={data?.attributes?.img?.data?.attributes?.url} alt="" onClick={(e) => setSelectedImg("img")}/>
                <img className="w-full h-[150px] w-[150px] hidden lg:flex object-cover cursor-pointer mb-[10px] ml-[5px] border border-solid border-gray border-1" src={data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={(e) => setSelectedImg("img2")} style={{ visibility:data?.attributes?.img2?.data?.attributes?.url !== undefined? 'visible': 'hidden'}} onError = {e => e.target.style.display = 'none'}/>
                <img className="w-full h-[150px] w-[150px] hidden lg:flex object-cover cursor-pointer mb-[10px] ml-[5px] border border-solid border-gray border-1" src={data?.attributes?.img3?.data?.attributes?.url} alt="" onClick={(e) => setSelectedImg("img3")} style={{ visibility:data?.attributes?.img3?.data?.attributes?.url !== undefined? 'visible': 'hidden'}} onError = {e => e.target.style.display = 'none'}/>
                <img className="w-full h-[150px] w-[150px] hidden lg:flex object-cover cursor-pointer mb-[10px] ml-[5px] border border-solid border-gray border-1" src={data?.attributes?.img4?.data?.attributes?.url} alt="" onClick={(e) => setSelectedImg("img4")} style={{ visibility:data?.attributes?.img4?.data?.attributes?.url !== undefined? 'visible': 'hidden'}} onError = {e => e.target.style.display = 'none'}/>
              </div>
              <div className="relative lg:w-2/3">
                    <button onClick={(e) => setSelectedImg("img")} className="absolute bottom-1/2 left-0 flex lg:hidden"><FaArrowLeft className="hover:bg-gray-100 w-[60px] h-[60px] p-3 bg-gray-50/50"/></button>
                    <button onClick={(e) => setSelectedImg("img2")} className="absolute right-1 bottom-1/2 flex lg:hidden" onError = {e => e.target.style.display = 'none'}><FaArrowRight className="hover:bg-gray-100 w-[60px] h-[60px] p-3 bg-gray-50/50"/></button>
                        {/* <img className="flex w-full min-h-[200px] md:min-h-[700px] max-h-[1200px] md:max-h-[600px] object-contain max-w-[700px]" src={process.env.REACT_APP_UPLOAD_URL + data?.attributes[selectedImg]?.data?.attributes?.url} alt=""/> */}
                        <img className="flex w-full min-h-[200px] md:min-h-[700px] max-h-[1200px] md:max-h-[600px] object-contain max-w-[700px]" src={data?.attributes[selectedImg]?.data?.attributes?.url} alt=""/>

                </div>
            </div>
            <div className="flex flex-1 flex-col gap-30 py-10 px-5 lg:px-0 ">
                
              <div className="flex flex-col gap-10 text-2xl mt-30 pb-1" >
                <span>{data?.attributes?.brand}</span>
              </div>
              <h1 className="text-4xl font-bold">{data?.attributes?.Name}</h1>
              <span className="text-xl py-5">{checkStatus()}</span>
              <div className="flex flex-col items-center lg:items-left lg:flex-row gap-10">
                <div className="flex items-center gap-5">
                    <button className="w-[50px] h-[50px] flex items-center justify-center cursor-pointer border-none bg-gray-100 hover:bg-gray-200"
                    onClick={() =>
                        setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                    }
                    >
                    -
                    </button>
                    {quantity}
                    <button className="w-[50px] h-[50px] flex items-center justify-center cursor-pointer border-none bg-gray-100 hover:bg-gray-200" onClick={() => setQuantity((prev) => prev + 1)}>+</button>
                </div>
                <button
                    className="w-[300px] p-2 flex items-center justify-center gap-5 cursor-pointer border bg-uno hover:underline"
                    id='add-to-cart'
                    onClick={() => {
                        if(chosenFlavor){dispatch(
                            addToCart({
                            id: data.id,
                            title: data.attributes.Name,
                            desc: data.attributes.Description,
                            price: data.attributes.price,
                            img: data.attributes.img.data.attributes.url,
                            flavor: chosenFlavor.attributes.Name,
                            quantity,
                            }));
                            document.getElementById("pickFlavor").innerHTML = "";
                            document.getElementById("add-to-cart").innerHTML = "ITEM ADDED TO CART";
                        } else {document.getElementById("pickFlavor").innerHTML = " *Please select a flavor!"}}
                    }
                >
                    <FaCartPlus className=""/>ADD TO CART
                </button>
              </div>
              
              <br></br>

            <div className="flex flex-col gap-3 text-base mt-30 py-5">
                <hr />
                <div>
                    <span className="font-semibold">{checkCat()}</span>
                    <span id="pickFlavor" className='text-red-500 font-semibold'></span>
                </div>
                <div className="flex flex-wrap gap-3">
                    {flavors?.data?.map((flavor)=>(<button id={flavor.id} key={flavor.id} onClick={() => {setChosenFlavor((e) => (flavor)); 
                            function buttonColor() {
                                if(chosenFlavor) {
                                    document.getElementById(chosenFlavor.id).style.borderColor='#e5e7eb'; 
                                    document.getElementById(chosenFlavor.id).style.backgroundColor='white';
                                }
                                document.getElementById(flavor.id).style.backgroundColor='#eacf00'; 
                                document.getElementById(flavor.id).style.borderColor='#eacf00'} 
                            buttonColor()}
                        } className="flex flex-row rounded border-2 border-gray-200 w-fit p-2 cursor-pointer text-base">{flavor?.attributes?.Name}</button>))}
                </div>
                
            </div>
            <div className="flex flex-col gap-3 text-base mt-30 py-5">
                <hr />
                <span className="font-semibold">DESCRIPTION</span>
                <span className='lg:w-3/4'>{data?.attributes?.Description}</span>
                <hr />
              </div>
            </div>
          </>
        )}
        </div>
    );
  };
  
  export default Product;
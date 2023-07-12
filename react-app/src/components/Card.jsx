import React from 'react'
import {Link} from "react-router-dom"
import axios from 'axios'
import { useState, useEffect } from 'react'
import { userData } from '../helpers'

const Card = ({item}) => {

        const { jwt } = userData();
        const isLoggedIn = !!jwt;

        const checkStatusStyle = () => {
            if(isLoggedIn) {
                return "flex rounded border-solid border-mushTitle border-2 bg-mushTitle text-white w-12 text-center max-h-7 justify-center"
            } else {
                return "flex rounded border-solid border-mush border-2 bg-mush text-mush w-12 text-center max-h-7 justify-center select-none"
            }
        }

        const checkStatusPrice = () => {
            if(isLoggedIn) {
                return item?.attributes.price
            } else {
                return "X"
            }
        }
 
        const [flavors, setFlavors] = useState([]);

        useEffect(() => {
            axios.get(process.env.REACT_APP_API_URL+`/flavors?populate[products]=*&filters[products][id][$eq]=${item.id}&sort=Name`)
            .then(res => setFlavors(res.data))
            .catch(err => console.log(err));
          }, [])

          const isFound = flavors?.data?.some(flavor => {
            if(flavor?.attributes?.Name === "Bali" || flavor?.attributes?.Name === "Maeng Da" || flavor?.attributes?.Name === "Trainwreck" || flavor?.attributes?.Name === "White Thai" || flavor?.attributes?.Name === "Green Malay" || flavor?.attributes?.Name === "Red Vein") {
                return true;
            } else {
                return false;
            }
          })

          const checkCat = () => {
            if(isFound) {
                return "STRAINS"
            } else if(flavors?.data?.length === 1) {
                return "FLAVOR"
            } else {
                return "FLAVORS"
            }
        } 



        const str = flavors?.data?.slice(0,6).map((flavor)=>(flavor?.attributes?.Name))
        var out = str && str.join(', ')
        if(flavors?.data?.length >= 6) {
            out += "...";
        }

    return (
    <>
        <div className="p-1 md:p-2 w-1/2 sm:w-1/3 lg:w-[330px]">
            <div className="overflow-hidden rounded-xl shadow-lg border-solid border-2 border-mush ">
                <span className="border-box overflow-hidden bg-none relative">
                    {item?.attributes.isNew && <span className='bg-blue-400 text-white absolute left-2 top-2 rounded-2xl p-1'>New</span>}
                        <Link to={`/product/${item.id}`}>
                            {/* <img className="mx-auto object-contain object-center w-40 lg:w-56 xl:w-full h-40" src={process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url} alt="" /> */}
                            <img className="mx-auto object-contain object-center w-40 lg:w-56 xl:w-full h-40" src={item.attributes?.img?.data?.attributes?.url} alt="" />
                        </Link>
                </span>
                <div className='p-3 md:w-full bg-mush px-5'>
                    <h2 className="font-bold text-mushTitle text-base text-lg">{item?.attributes.brand}</h2>
                    <h2 className="font-semibold h-20 text-lg">{item?.attributes.Name}</h2>
                    <p className="text-mushTitle text-base font-semibold">{checkCat()}</p>
                    <div className="">
                        <div className="flex justify-between">
                            <div className="flex text-[9px] w-5/6">
                                {out}
                            </div>
                            <h3 className={checkStatusStyle()}>${checkStatusPrice()}</h3>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </>
    
    )
  } 

export default Card
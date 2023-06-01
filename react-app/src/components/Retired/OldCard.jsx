import React from 'react'
import "./Card.css"
import {Link} from "react-router-dom"

const Card = ({item}) => {
    return (
    <Link className='link' to={`/product/${item.id}`}>
    <div className='card'>
        <div className="image">
            {item?.attributes.isNew && <span>New</span>}
            <img src={process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url} alt="" className="mainImg" />

        </div>
        <h2>{item?.attributes.Name}</h2>
        <h3 className='prices'>${item?.attributes.price}</h3>
    </div>
    </Link>
    )
  } 

export default Card
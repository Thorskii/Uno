import React from 'react';
  
const Termsandconditions = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="overflow-hidden h-[120px] md:h-[200px] lg:h-[400px]">
                <img className="w-screen opacity-50" style={{width: "100vw", opacity: 0.5}} src="https://i.imgur.com/joxZASU.png" alt=""/>
            </div>
            <div className="space-y-4 w-11/12 lg:w-10/12 xl:w-1200 m-auto py-8 md:py-16">
                <br></br>
                <h1 className="font-bold text-4xl">Terms and Conditions</h1>
                <br></br>
                <ul>
                    <li><strong>A Word Regarding Pricing</strong></li>
                    <li>
                        Last updated: May 20, 2023
                    </li>
                    <li>
                    <br></br>
                    The prices listed here are our list prices and will be correct most of the time. However, this is
                    a dynamic industry with, among other influences, restricted or excess supply, competitive
                    pricing pressures, occasional special pricing from manufacturers, special deals from vendors,
                    and better pricing tiers for high volume purchasers. All of this is to say that prices do change
                    and our prices can vary somewhat from our list price at the time of your order.
                    <br></br>
                    We are committed to offering competitive pricing on our whole product line. We’ll certainly
                    try to keep you informed about price changes. If in doubt, please ask.
                    </li>
                </ul>
            </div>

        </div>

    )
  }

  export default Termsandconditions
import React, { useEffect } from "react";
import {Link} from "react-router-dom"
import { userData } from "../../helpers";

const Profile = () => {
    const userN = userData().username;
    const email = userData().email
    const address = userData().address

    useEffect(() => {
        document.title = "Profile - Uno Distribution";  
      }, []);


    return (
    <div className="min-h-[600px]">
        <div className='relative p-5'>
            <h1 className="font-bold text-4xl p-5 text-mushTitle left-0 lg:left-[220px] lg:-top-5">Profile:</h1>
        </div>
        <div className="flex justify-center items-center">
            <h2 className="pr-5 text-2xl ">Welcome:</h2>
            <h2 className="text-2xl font-semibold">{userN}</h2>
        </div>
        <br/><br/>

        <div className="flex w-full justify-center items-center">
            <div className="flex flex-col gap-1 w-1/4 ">
                <div className="flex">
                    <h2 className="px-5 text-xl ">Email:</h2>
                    <h2 className="text-xl text-center">{email}</h2>
                    {/* <input type="text" value="" className="rounded border-2 border-gray-200 w-1/3"></input> */}
                </div>
                <div className="flex">
                    <h2 className="px-5 text-xl ">Address:</h2>
                    <h2 className="text-xl text-center">{address}</h2>
                </div>
                <br/><br/>
                <div className="flex justify-center">
                    <p className="text-sm ">If you would like to update any of the above information, or other information on file, please <a href="mailto:dan@unowireless.com" className="text-blue-500 hover:underline">contact</a> us.</p>
                </div>
                
            </div>
        </div>


        <div className="flex w-5/6 justify-end gap-10">
            <div className="flex min-h-[200px] justify-end items-end text-right">
                <Link to="/logout" className="p-3 w-[130px] h-[60px] text-2xl text-white text-center bg-red-500">Logout</Link>
            </div>
        </div>

    </div>
    )
}

export default Profile
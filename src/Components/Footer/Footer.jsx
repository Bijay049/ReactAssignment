import React from 'react'
import { FaPinterestP } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <div className='px-36 py-5'>

    <div className='flex justify-around items-center '>
      <p>Copyrights &copy; 2024 all right reserved | Assignment Of react-workshop</p>
      <div className=" text-2xl font-bold w-fit h-fit relative flex">
          <h1> Alime</h1>
          <div className="w-[5px] h-[5px] bg-red-600 absolute -right-3 bottom-[7px] "></div>
        </div>
        <div className='flex gap-5'>
        <FaFacebookF className='hover:text-red-400 transition-all duration-700 ease-in-out cursor-pointer'/>
        <FaTwitter className='hover:text-red-400 transition-all duration-700 ease-in-out cursor-pointer'/>
        <FaLinkedinIn className='hover:text-red-400 transition-all duration-700 ease-in-out cursor-pointer'/>
        <FaPinterestP className='hover:text-red-400 transition-all duration-700 ease-in-out cursor-pointer'/>
        </div>
    </div>
    </div>
  )
}

export default Footer

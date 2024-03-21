import React from 'react';
import { VscSearchFuzzy } from "react-icons/vsc";
import { RiNotification4Line } from "react-icons/ri";
import { MdMailOutline } from "react-icons/md";
import pic4 from '../../assets/imgs/pic4.jpg';
const Navbar = () => {
  return (
    <div className='flex items-center w-full'>
      <div className='w-full md:w-[70%]'>
        <div className='flex justify-between items-center my-2 px-4'>
            <div className='font-semibold text-xl p-2'>
                Dashboard
            </div>
            <div className='flex gap-5 w-[70%] justify-evenly items-center '>
                <div className='hidden md:flex w-[50%] h-auto rounded-xl items-center justify-center bg-middark'>
                 <input type="text" className='flex items-center w-full justify-center rounded-full py-2 px-2 bg-transparent text-white focus:outline-none' placeholder="Search"/>
                </div>
                <div className='flex md:hidden text-2xl'>
                    <VscSearchFuzzy/>
                </div>
            </div>
        </div>
      </div>
      <div className='flex w-[30%] justify-between items-center px-4'>
        <div className='flex items-center justify-center w-10 h-10 bg-purple rounded-full'>
            <img src={pic4} className='rounded-full w-9 h-9'/>
        </div>
        <div className='flex gap-4 text-white/50'>
            <div className='hover:text-pink text-xl'>
                <RiNotification4Line/>
            </div>
            <div className='hover:text-pink text-xl'>
                <MdMailOutline/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

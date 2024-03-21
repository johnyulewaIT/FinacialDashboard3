import React from 'react';
import { BiHomeAlt } from "react-icons/bi";
import { HiOutlineBriefcase } from "react-icons/hi";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { TbPhotoScan } from "react-icons/tb";
import { IoMdLogOut } from "react-icons/io";
const Sidebar = () => {
  return (
    <div className='flex flex-col h-full justify-around items-center'>
        <div className='flex flex-col text-2xl items-center w-full h-[70%] justify-end gap-8'>
            <div className='flex items-center justify-center w-full hover:border-l-4 hover:text-pink border-pink py-2'>
                <BiHomeAlt/>
            </div>
            <div className='flex items-center justify-center w-full hover:border-l-4 hover:text-pink border-pink py-2'>
                <HiOutlineBriefcase/>
            </div>
            <div className='flex items-center justify-center w-full hover:border-l-4 hover:text-pink border-pink py-2'>
                <TbDeviceDesktopAnalytics/>
            </div>
            <div className='flex items-center justify-center w-full hover:border-l-4 hover:text-pink border-pink py-2'>
                <TbPhotoScan/>
            </div>
        </div>
        <div className='flex items-center text-2xl justify-center w-full hover:border-l-4 hover:text-pink border-pink py-2'>
        <IoMdLogOut/>
        </div>
    </div>
  );
}

export default Sidebar;

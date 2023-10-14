
//  
// <div className='flex justify-between items-center max-w-7xl mx-auto p-3'>

      //   <img src="/mylogo.png" alt="logo" width={60} height={40} />

      // <img
      //   src="/hamburger-menu.svg"
      //   alt="menu"
      //   width={30}
      //   height={30}
      //   className="block md:hidden"
      // />

// <ul className="flex gap-4 max-md:hidden md:gap-x-10">
// <li className="text-white  rounded-md hover:opacity-50 cursor-pointer !font-normal">
//   About Us
// </li>

// <li className="text-white text-5px rounded-md hover:opacity-75 cursor-pointer !font-normal">
//   Our Services  
// </li> 
 
// <li className="text-white rounded-md hover:opacity-75 cursor-pointer !font-normal">
//   Contact Us
// </li>

// <li className="text-white  rounded-md hover:opacity-75 cursor-pointer !font-normal">
//   Sign In
// </li>

// </ul>
//  </div>
//  </div> 


import React, { useState } from 'react'
import { HiBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
import MenuOverlay from './Menu';
function Navbar() {

    const [toggle,setToggle]=useState(false)
    const menuList=[
        {
            id:1,
            title:'HOME'
        },
        {
            id:1,
            title:'ABOUT'
        },
        {
            id:1,
            title:'SERVICES'
        },
        {
            id:1,
            title:'BLOG'
        },
        {
            id:1,
            title:'CONTACT US'
        },
    ]
  return (
      <div className='border-b-2 py-4 text-white opacity-75 rounded-md'>
    <div className='flex justify-between items-center max-w-7xl mx-auto p-3'>
    <img src="/mylogo.png" alt="logo" width={60} height={40} className='object-cover shadow-md rounded-full'/>
        <div className='hidden md:flex gap-4'>
            {menuList.map((item)=>(
                <div>
                    <h2 className='text-white 
                    rounded-full hover:opacity-50
                    text-[15px] px-3 py-1 cursor-pointer'>{item.title}</h2>
                    </div>
            ))}
            <h2 className='text-white 
                    hover:border-[1px] opacity-80 rounded-full
                    text-[15px] px-3 py-1 cursor-pointer hover:opacity-1/2 '>Sign In</h2>
        </div>
        <div className='md:hidden'>
           {!toggle? <HiBars3BottomRight onClick={()=>setToggle(!toggle)} className='text-white text-[22px] cursor-pointer'/>
           :<HiOutlineXMark onClick={()=>setToggle(!toggle)} className='text-white text-[22px] cursor-pointer'/>}
            {toggle?<MenuOverlay menuList={menuList} />:null}   
        </div>
    </div>
    </div>
  )
}

export default Navbar;
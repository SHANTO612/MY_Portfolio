// import React from 'react'

import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { useState } from "react"

export const Nabvar = () => {
  const[menu,openMenu]=useState(false);
    const[showMenu,setShowmenu]=useState(true);
    return (
      <nav className='flex flex-wrap justify-between md:items-center text-white px-10 pt6 md:px-20'>
          <span className='text-xl font-bold tracking-wide'> Portfolio</span>
              <ul className={ `
              ${ menu?"block":"hidden"}
              mx-24 font-semibold py-2 mt-4 md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none 
              text-center md:bg-transparent
              md:static md:mx-0 md:flex gap-6`}>
               

                 <a href="#About"> <li className="text-md hover:text-green-500  transition-all duration-300 p-1 md:p-0">About</li></a>
                 <a href="#Experience"> <li className="text-md hover:text-green-500 transition-all duration-300 p-1 md:p-0">Experiences</li></a>
                 <a href="#Projects"> <li className="text-md hover:text-green-500 transition-all duration-300 p-1 md:p-0">Projects</li></a>
                 <a href="#Footer"> <li className="text-md hover:text-green-500 transition-all duration-300 p-1 md:p-0">Contact</li> </a>
              </ul> 
              {
                 showMenu ?
                  (
                  <RiMenu2Line size={30} 
                    className=" absolute right-10 top-6 transition-all duration-300 md:hidden"
                 onClick={
                  ()=>{
                    openMenu(!menu);
                    setShowmenu(!showMenu)
                  }
                }/>)
                 :
                 (< RiCloseLine size={30} className=" absolute right-10 top-6
                 transition-all duration-300 md:hidden"
                  />)
              }
      </nav>
    )
  }
  
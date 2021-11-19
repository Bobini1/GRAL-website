import NavbarButton from './NavbarButton.js';
import React from 'react';


const Navbar = () => {


    return <div className="hidden fixed md:flex flex-row
    w-full left-0 top-0 h-8 md:h-16
    space-x-16 px-4 justify-end items-center
    bg-transparent shadow-2xl">
      <NavbarButton text=""/>
      <NavbarButton text=""/>
      <NavbarButton text=""/>
      <NavbarButton text=""/>
      <NavbarButton text=""/>
    </div>
  
}

export default Navbar;
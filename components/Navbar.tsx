"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import Links from './Links';
import { navLinks } from '@/constants';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const openMenuFunction = () => {
      setMenuOpen(!menuOpen);
    };
  
    const rotateMenu = menuOpen ? 'rotate(3.142rad)' : 'rotate(0)';
  
    return (
      <nav className='flex justify-between px-[1.5rem] py-[2rem]'>
        {/* LOGO CONTAINER */}
        <div className='logo-container'>
          <Image src='./logo.svg' alt='logo' width={84} height={27} />
        </div>
  
        {/* MENU CONTAINER */}
        <div className="menu-container sm:hidden relative z-[2000]">
          <Image
            src={`${menuOpen ? './icon-close-menu.svg' : './icon-menu.svg'}`}
            alt={`${menuOpen ? 'close' : 'menu'}`}
            width={32}
            height={18}
            onClick={openMenuFunction}
            className='cursor-pointer transition-transform duration-300 ease-linear'
            style={{ transform: rotateMenu }}
          />
        </div>
  
        <aside
          className={`navLinks-container absolute h-full w-[15rem] bg-slate-300 text-white z-[1000] top-0 right-0 pt-[6rem] pr-[3rem] pl-[1.5rem]
          ${menuOpen ? '' : 'hidden'}`}
        >
          {navLinks.map((category, index) => (
            <Links key={index} title={category.title} links={category.labels} />
          ))}
          {/* MAGLALAGAY PA AKO NG LOGIN AND REGISTER DITO */}
        </aside>
      </nav>
    );
  };

export default Navbar
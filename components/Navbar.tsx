"use client";
import React, { useEffect, useState } from 'react'
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
    <nav className='flex justify-between sm:items-center px-[1.5rem] py-[2rem]'>
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
        className={`navLinks-container absolute h-full w-[15rem] bg-almost-white text-medium-gray font-medium z-[1000] top-0 right-0 pt-[6rem] 
         sm:flex sm:items-center sm:relative sm:bg-white sm:w-[100%] sm:h-auto sm:pt-[0]
          ${menuOpen ? '' : 'hidden'}`}
      >
        {navLinks.map((category, index) => (
          <Links key={index} title={category.title} links={category.labels} />
        ))}
        <div className='flex flex-col items-center sm:flex-row sm:ml-auto'>
          <div className='py-[.3rem] px-[4rem] sm:px-[2rem] hover:text-almost-black hover:font-bold'>
            <button>Login</button>
          </div>
          <div className='border-solid border-medium-gray border-2 rounded-[10px] hover:text-almost-black hover:font-bold hover:border-black'>
            <button className='py-[.3rem] px-[4rem] sm:px-[2rem]'>Register</button>
          </div>
        </div>
      </aside>
    </nav>
  );
};

export default Navbar
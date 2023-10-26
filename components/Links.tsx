"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { LinkTypes } from '@/types';

const Links = ({ title, links }: { title: string; links: LinkTypes[] }) => {
  const [openCategory, setOpenCategory] = useState(false);

  const toggleCategory = () => {
    setOpenCategory(!openCategory);
  };

  const shouldHavePadding = title === 'Features' || title === 'Company';
  
  return (
    <div className='pb-[1rem] pr-[3rem] pl-[1.5rem] sm:pb-[0] sm:pr-[0] sm:pl-[1rem] lg:pl-[3rem]'>
      <div className='flex hover:text-almost-black hover:font-bold'>
        <button className='pr-[1rem] sm:pr-[.5rem] cursor-pointer ' onClick={toggleCategory}>
          {title}
        </button>
        {(title === 'Features' || title === 'Company') && ( // Only show arrow for Features and Company
          <button onClick={toggleCategory}>
            <Image src={openCategory ? './icon-arrow-up.svg' : './icon-arrow-down.svg'} alt={`${title} arrow`} width={15} height={15} />
          </button>
        )}
      </div>
      <ul className={`${openCategory ? '' : 'hidden'} ul-links ml-[1.5rem] sm:ml-[0] sm:top-[3rem] sm:absolute sm:rounded-[15px] ${title === 'Features' || title === 'Company' ? 'sm:p-[1rem]' : ''}`}>
        {links.map((label, labelIndex) => (
          <li key={labelIndex} className='flex items-center gap-[.7rem] pt-[.5rem]'>
            {label.icon && (
              <Image src={label.icon} alt={`${label.label} icon`} width={15} height={15} />
            )}
            {label.href ? (
              <Link key={label.href} href={label.href} className='hover:text-almost-black hover:font-bold'>{label.label}</Link>
            ) : (
              <span>{label.label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Links
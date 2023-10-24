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

  return (
    <div className='text-medium-gray font-medium pb-[1rem]'>
      <div className='flex'>
        <button className='pr-[1rem] cursor-pointer' onClick={toggleCategory}>
          {title}
        </button>
        {(title === 'Features' || title === 'Company') && ( // Only show arrow for 'Features' and 'Company'
          <button onClick={toggleCategory}>
            <Image src={openCategory ? './icon-arrow-up.svg' : './icon-arrow-down.svg'} alt={`${title} arrow`} width={15} height={15} />
          </button>
        )}
      </div>
      <ul className={`${openCategory ? '' : 'hidden'} ml-[1.5rem]`}>
        {links.map((label, labelIndex) => (
          <li key={labelIndex} className='flex items-center gap-[.7rem] pt-[.5rem]'>
            {label.icon && (
              <Image src={label.icon} alt={`${label.label} icon`} width={15} height={15} />
            )}
            {label.href ? (
              <Link href={label.href}>{label.label}</Link>
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
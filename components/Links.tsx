import { navLinks } from '@/constants'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Links = () => {
  return (
    <nav>
      {navLinks.map((category, index) => (
        <div key={index}>
          <h2 className=' text-blue-400'>{category.title}</h2>
          <ul>
            {category.labels && category.labels.map((label, labelIndex) => (
              <li key={labelIndex}>
                {label.icon && (
                  <Image
                    src={label.icon}
                    alt={`${label.label} icon`}
                    width={15}
                    height={15}
                  />
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
      ))}
    </nav>
  )
}

export default Links
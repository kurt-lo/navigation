"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const [imageHero, setImageHero] = useState('/image-hero-mobile.png');
  const [imageWidth, setImageWidth] = useState(750);
  const [imageHeight, setImageHeight] = useState(750);

  useEffect(() => {
    const handleWebSize = () => {
      if (window.innerWidth >= 641) {
        setImageHero('/image-hero-desktop.png')
        setImageWidth(960)
        setImageHeight(1280)
      } else {
        setImageHero('/image-hero-mobile.png')
        setImageWidth(750)
        setImageHeight(750)
      }
    }
    handleWebSize();
    window.addEventListener('resize', handleWebSize);
    return () => {
      window.removeEventListener('resize', handleWebSize);
    }
  }, [])

  return (
    <main className="main">
      {/* <div>
        <Image
          src={imageHero}
          alt="guy holding a laptop"
          width={imageWidth}
          height={imageHeight}
        />
      </div> */}
{/* 
      <div>
        <h1>Make remote work</h1>
        <p>  
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button>Learn More</button>
      </div> */}
    </main>
  )
}

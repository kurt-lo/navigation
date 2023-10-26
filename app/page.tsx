"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const [imageHero, setImageHero] = useState('/image-hero-mobile.png');
  const [largeScreen, setLargeScreen] = useState(false);

  useEffect(() => {
    const handleWebSize = () => {
      if (window.innerWidth >= 641) {
        setImageHero('/image-hero-desktop.png')
        setLargeScreen(true);
      } else {
        setImageHero('/image-hero-mobile.png')
        setLargeScreen(false);
      }
    }
    handleWebSize();
    window.addEventListener('resize', handleWebSize);
    return () => {
      window.removeEventListener('resize', handleWebSize);
    }
  }, [])

  return (
    <main className="sm:flex sm:flex-row-reverse sm:w-[100%] sm:pt-[2rem] sm:px-[5rem] 2xl:pl-[10rem] 2xl:pr-0">
      <div className=" sm:w-1/2">
        <Image
          src={imageHero}
          alt="guy holding a laptop"
          width={750}
          height={750}
          priority={true}
          className='object-contain xl:h-[750px]'
        />
      </div>

      <div className="text-center sm:text-left sm:w-1/2 sm:flex sm:flex-col xl:pl-[3rem]">
        <div className="text-container">
          <h1 className="font-bold text-[2rem] pt-[2rem] pb-[.8rem] md:pt-[8rem] md:text-[2.5rem] lg:text-[4rem] lg:pt-[10rem] sm:leading-none">
            Make {largeScreen && <br />} remote work
          </h1>
          <p className="px-[1rem] pb-[1.5rem] text-medium-gray sm:pl-0 sm:pt-[1rem] lg:pt-[2rem] md:pb-[2rem] lg:pb-[3rem] xl:pr-[12rem]">
            Get your team in sync, no matter your location. Streamline processes,
            create team rituals, and watch productivity soar.
          </p>
          <button className="bg-almost-black text-almost-white py-[.7rem] px-[1.2rem] rounded-[10px] font-bold hover:bg-almost-white hover:text-almost-black hover:border-almost-black hover:border-2">
            Learn More
          </button>
        </div>
        <div className="images-container sm:mt-auto">
          <ul className="flex items-center justify-center gap-[1rem] pt-[2.3rem] sm:mt-auto sm:justify-start lg:gap-[3rem]">
            <li>
              <Image
                src='/client-databiz.svg'
                alt="databiz"
                width={80}
                height={25}
              />
            </li>
            <li>
              <Image
                src='/client-audiophile.svg'
                alt="audophile"
                width={55}
                height={25}
              />
            </li>
            <li>
              <Image
                src='/client-meet.svg'
                alt="meet"
                width={80}
                height={25}
              />
            </li>
            <li>
              <Image
                src='/client-maker.svg'
                alt="maker"
                width={80}
                height={25}
              />
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}

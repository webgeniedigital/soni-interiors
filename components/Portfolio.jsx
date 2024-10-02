'use client'
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'
const Portfolio = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <section className="relative mx-[1rem] md:px-0" >
      <div className=" grid-cols-4 grid-rows-3 h-[80vh] gap-3 w-full relative hidden md:grid ">
        <div className="relative col-start-1 col-span-2 row-span-2 overflow-hidden transition-all duration-300 parent_hover"

        >
          <Image alt="portfolio_image"  src={`/KP Commercial/image9.webp`} width={500} height={500} className='w-full h-full object-cover' />
          <div className="bg-white w-full h-full absolute top-0 left-0 opacity-0 child_hover transition-all duration-300 flex items-center justify-center border-2">
            <h1 className="font-medium drop-shadow-md "> M SQUARE DESIGNS, SURAT</h1>
          </div>
        </div>
        <div className=" col-start-3  row-span-3  overflow-hidden transition-all duration-300 parent_hover relative">
          <Image alt="portfolio_image"  src={`/KP Commercial/image31.webp`} width={500} height={500} className='w-full h-full object-cover' />
          <div className="bg-white w-full h-full absolute top-0 left-0 opacity-0 child_hover transition-all duration-300 flex items-center justify-center border-2">
            <h1 className="font-medium drop-shadow-md "> HERSHEY’S PVT. LTD., POWAI, MUMBAI</h1>
          </div>
        </div>
        <div className="parent_hover relative col-start-4  row-span-3 overflow-hidden transition-all duration-300 ">
          <Image alt="portfolio_image"  src={`/KP Commercial/image19.webp`} width={500} height={500} className='w-full h-full object-cover' />
          <div className="bg-white w-full h-full absolute top-0 left-0 opacity-0 child_hover transition-all duration-300 flex items-center justify-center border-2">
            <h1 className="font-medium drop-shadow-md "> DRAV, MALAD, MUMBAI </h1>
          </div>
        </div>
        <div className="parent_hover relative transition-all duration-300 ">
          <Image alt="portfolio_image"  src={`/KP Retail/image68.webp`} width={500} height={500} className='w-full h-full object-cover overflow-hidden' />
          <div className="bg-white w-full h-full absolute top-0 left-0 opacity-0 child_hover transition-all duration-300 flex items-center justify-center border-2">
            <h1 className="font-medium drop-shadow-md "> DANIEL WELLINGTON, PHEONIX MALL, KURLA </h1>
          </div>
        </div>
        <div className="parent_hover relative  transition-all duration-300 ">
          <Image alt="portfolio_image"  src={`/KP Retail/image76.webp`} width={500} height={500} className='w-full h-full object-cover overflow-hidden' />
          <div className="bg-white w-full h-full absolute top-0 left-0 opacity-0 child_hover transition-all duration-300 flex items-center justify-center border-2">
            <h1 className="font-medium drop-shadow-md "> SAMSONITE, JM ROAD, SHIVAJI NAGAR, PUNE </h1>
          </div>
        </div>
        <div>
          <Link href="/portfolio" target="_blank" className="p-4 bg-black text-white px-20 rounded-full absolute  bottom-8 left-1/2 transform -translate-x-1/2 hover:shadow-lg transition-all flex items-center gap-2 button_hover">PORTFOLIO <ArrowRight className="arrow_right" /> </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:hidden relative w-full">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container ">
            {
              [
                '/KP Commercial/image9.webp',
                '/KP Retail/image68.webp',
                '/KP Retail/image76.webp',
              ].map((item, index) => (
                <div className="embla__slide aspect-video overflow-hidden h-56  " key={index}>
                  <Image alt="portfolio_image"  src={item} width={500} height={500} className="object-cover w-full h-full" />
                </div>
              ))
            }
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 ">
          <Link href="/portfolio" target="_blank" className=" bg-black text-white px-5 py-3  rounded-full  hover:shadow-lg transition-all flex items-center gap-2 button_hover">PORTFOLIO <ArrowRight className="arrow_right" /> </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
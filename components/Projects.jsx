'use client'
import React, { useRef } from 'react'
import { qwitcher } from "../utils/font";
import Image from 'next/image';
import gsap from 'gsap';
import ModalGallery from "./ModalGallery"

const Projects = () => {
  const paragraphRef = useRef(null)
  const mouseEnterFunction = (textClass, imageClass) => {
    gsap.to(paragraphRef.current.querySelector(textClass), {
      duration: 0.5,
      height: 'auto',
      overflow: 'visible',
      zIndex: 999,
      color: 'white'
    })
    gsap.to(paragraphRef.current.querySelector(imageClass), {
      duration: 0.5,
      filter: 'brightness(0.5)'
    })
  }
  const mouseLeaveFunction = (textClass, imageClass) => {
    gsap.to(paragraphRef.current.querySelector(textClass), {
      duration: 0.5,
      height: 0,
      overflow: 'hidden'
    })
    gsap.to(paragraphRef.current.querySelector(imageClass), {
      duration: 0.5,
      filter: 'brightness(1)'
    })
  }
  return (
    <section >
      <div className=' hidden md:grid grid-cols-4 grid-rows-2 h-[60vh] space-x-2 space-y-2  w-full ' ref={paragraphRef}>
        <div className='col-span-2 row-span-2  grid place-content-center text-5xl text-center '>
          <h2 className='uppercase tracking-[2px] text-black'>Projects</h2>
          <p className={`${qwitcher.className} text-accent-primary text-6xl font-bold`}>What We Do</p>

          <span className='text-sm space-x-2 mt-6'>
            {
              [
                "Residential",
                "Commercial",
              ].map((item, index) => {
                return <ModalGallery key={index} title={item} />
              })
            }

          </span>
        </div>
        <div className='relative overflow-hidden hover_hidden_div' onMouseEnter={() => {
          mouseEnterFunction('.hidden_text_1', '.image_1')
        }} onMouseLeave={() => {
          mouseLeaveFunction('.hidden_text_1', '.image_1')
        }}>
          <Image alt='residential_image' src="/KP Residence/image108.webp" width={500} height={500} />
          <div className='absolute bottom-8 right-9 z-[99] text-right p-2'>
            <h1 className='text-2xl text-white'> Residential </h1>
            <p className=' hidden_text_1 h-0 overflow-hidden'>
            Specializing in creating beautiful, sustainable residential spaces.
            </p>
          </div>
          <div className='absolute bottom-0 right-0 left-0  bg-gradient-to-br from-transparent via-black  to-black filter  blur-xl  w-full h-16 ' />
        </div>
        <div className='relative overflow-hidden'
          onMouseEnter={() => {
            mouseEnterFunction('.hidden_text_2', '.image_2')
          }} onMouseLeave={() => {
            mouseLeaveFunction('.hidden_text_2', '.image_2')
          }}
        >
          <Image alt='project_image' src="/KP Commercial/image13.webp" width={500} height={500} className='w-full object-cover h-full  image_2' />
          <div className='absolute bottom-8 right-9 z-[99] text-right p-2'>
            <h1 className='text-2xl text-white '> Commercial </h1>
            <p className="hidden_text_2  h-0 overflow-hidden">
            Focusing on commercial spaces that reflect business identity.
            </p>
          </div>
          <div className='absolute bottom-0 right-0 left-0  bg-gradient-to-br from-transparent via-black  to-black filter  blur-xl  w-full h-16 ' />
        </div>
        <div className='relative col-start-3 col-span-3 overflow-hidden'
          onMouseEnter={() => {
            mouseEnterFunction('.hidden_text_3', '.image_3')
          }} onMouseLeave={() => {
            mouseLeaveFunction('.hidden_text_3', '.image_3')
          }}
        >
          <Image src='/KP Retail/image73.webp' width={500} height={500} alt='project_image' className='w-full object-cover h-full  image_3' />
          <div className=' absolute bottom-7 right-7   bg-gradient-to-br from-transparent via-black  to-black filter  blur-xl  w-44 h-8 rounded-full' />
          <div className='absolute bottom-8 right-9 z-[99] text-right'>
            <h1 className='text-2xl text-white '> Retail </h1>
            <p className="hidden_text_3  h-0 overflow-hidden">
            Designing retail spaces that captivate customers and drive sales.
            </p>
          </div>
        </div>
      </div>

      <div className='md:hidden px-[1rem] md:px-0' >
        <div className=' text-3xl text-center  my-4'>
          <h2 className='uppercase tracking-[2px] text-black'>Projects</h2>
          <p className={`${qwitcher.className} text-accent-primary  font-bold`}>What We Do</p>
          <div className='text-sm space-x-2 my-6 flex items-center overflow-x-scroll'>

            {
              [
                "Residential",
                "Commercial",
                "Retail",
                "Workshop",
              ].map((item, index) => {
                return <ModalGallery key={index} title={item} />
              })
            }
          </div>
        </div>
        <div className='grid grid-cols-1 gap-2' >
          <div className='relative overflow-hidden'>
            <Image alt='residential_image' src='/KP Residence/image108.webp' width={500} height={500} className='w-full object-cover h-full  ' />
            <div className='absolute bottom-8 right-9 z-[99] text-right'>
              <h1 className='text-2xl text-white '> Residential </h1>
            </div>
            <div className='absolute bottom-0 right-0 left-0  bg-gradient-to-br from-transparent via-black  to-black filter  blur-xl  w-full h-16 ' />
          </div>
          <div className='relative overflow-hidden'>
            <Image alt='project_image' src='/KP Commercial/image13.webp' width={500} height={500} className='w-full object-cover h-full  image_2' />
            <div className='absolute bottom-8 right-9 z-[99] text-right'>
              <h1 className='text-2xl text-white '> Commercial </h1>
            </div>
            <div className='absolute bottom-0 right-0 left-0  bg-gradient-to-br from-transparent via-black  to-black filter  blur-xl  w-full h-16 ' />
          </div>
          <div className="relative overflow-hidden">
            <Image alt='project_image' src='/KP Retail/image73.webp' width={500} height={500} className='w-full object-cover h-full  image_3' />
            <div className='absolute bottom-8 right-9 z-[99] text-right'>
              <h1 className='text-2xl text-white '> Retail </h1>
            </div>
            <div className='absolute bottom-0  right-16  bg-gradient-to-br from-transparent via-black  to-black filter  blur-xl  w-[60%] h-16 ' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
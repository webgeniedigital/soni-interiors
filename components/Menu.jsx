'use client'
import gsap from 'gsap'
import { X } from 'lucide-react'
import Link from 'next/link'
import React, { useRef } from 'react'
import { CiMenuFries } from 'react-icons/ci'
import { qwitcher } from '../utils/font'
import Image from 'next/image'

const Menu = () => {
    const menu_bar = useRef(null)
    return (
        <div className='relative'>
            <CiMenuFries size={25} className='font-bold md:hidden cursor-pointer ' onClick={() => {
                gsap.to(menu_bar.current, {
                    duration: 0.8,
                    right: '0%',
                    ease: 'power2.inOut'
                })
            }} />
            <div className={`fixed top-0 right-full  w-screen bg-white z-[999999] h-full menu_div`} ref={menu_bar} >
                <X className='absolute right-5 top-10' onClick={() => {
                    gsap.to(menu_bar.current, {
                        duration: 0.8,
                        right: '100%',
                        ease: 'power2.inOut'
                    })
                }} />
                <h1 className='border_around text-6xl text-center py-[20vw]  text-white '> Menu </h1>
                <div className='flex flex-col items-center text-xl gap-8  '>
                    {/* <div className={`${qwitcher.className} text-center  text-4xl font-bold`}>
                        <p className='text-accent-secondary'>If you can dream it,<br /> We can create it.</p>
                    </div> */}

                    <ul className='flex flex-col items-center gap-8 justify-center '>
                        {
                            [
                                {
                                    name: 'Home',
                                    link: '/'
                                },
                                {
                                    name: 'About',
                                    link: '/about'
                                },
                                {
                                    name: 'Portfolio',
                                    link: '/portfolio'
                                },
                                {
                                    name: 'Contact',
                                    link: '/contact'
                                },
                                {
                                    name: 'Call Now',
                                    link: 'tel:9820325038'
                                },

                            ].map((item, index) => {
                                return (
                                    <Link href={item.link} key={index}>
                                        <li className={` text-2xl ${index === 4 ? 'bg-accent-primary px-4 py-2 rounded-full text-white hover:bg-accent-primary/70 transition-all' : 'underline_animation'}`} onClick={() => {
                                            gsap.to(menu_bar.current, {
                                                duration: 0.8,
                                                right: '100%',
                                                ease: 'power2.inOut'
                                            })
                                        }} >
                                            {item.name}
                                        </li>
                                    </Link>
                                )
                            })
                        }
                    </ul>
                </div>
                <Image alt='menu_graphic' src="/assets/menu_graphics.png" width={300} height={300} className='aspect-video object-cover w-full absolute bottom-0' />
            </div>
        </div>
    )
}

export default Menu
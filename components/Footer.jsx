import React from 'react'
import Logo from "../public/logo.png"
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
    return (
        <footer className=" bg-[#1B1F23] w-full md:mt-20 mt-10">
            <div className={`mx-auto w-full  md:p-10 py-6 lg:py-8 max-w-[1600px] px-[1rem] md:px-0 `}>

                <div className="md:flex md:justify-between gap-20">
                    <div className=" bg-white  p-2 rounded-lg aspect-square  text-center  items-center justify-center   flex-col md:flex hidden ml-8 ">
                        <Link href="/">
                            <Image src={Logo} width={500} height={500} alt='logo' className='w-full h-full object-cover' />
                        </Link>
                        <h1 className='text-2xl '> Soni Interiors</h1>
                    </div>

                    <div className="grid grid-cols-2 gap-6 sm:gap-6 sm:grid-cols-3">
                        <div className='hidden md:block'>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-white">CONNECT</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium ">
                                <li className="mb-4">
                                    Building no. 3, Swarg Height Building,
                                    150 Feet Road, Nr. D Mart,
                                    Bhayandar (W), Thane-401101
                                </li>
                                <li>
                                    <Link href="mailto: soniinteriors2017@gmail.com" className='hover:underline'> soniinteriors2017@gmail.com</Link>
                                </li>
                                <br />
                                <li>
                                    <p>Contact</p>
                                    <Link href="tel:+919821680359" className='hover:underline '> +91 9821680359 </Link>
                                    <br />
                                    <Link href="tel:+919029373799" className='hover:underline '> +91 9029373799 </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-col md:items-start items-center'>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold  uppercase text-white">Links</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-3">
                                    <li>
                                        <Link href="/" className="hover:underline ">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="/about" className="hover:underline">About</Link>
                                    </li>
                                    <li>
                                        <Link href="/portfolio" className="hover:underline">Portfolio</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact" className="hover:underline">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold  uppercase text-white">SOCIALS</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-3">
                                <li>
                                    <Link href="#" className="hover:underline">Instagram</Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:underline">Facebook</Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:underline">Linkedin</Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-center">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Soni Interiors. All rights reserved
                    </span>
                </div>
            </div>
        </footer>

    )
}

export default Footer
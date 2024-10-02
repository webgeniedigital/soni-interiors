import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Menu from '../components/Menu'
const Header = () => {   
  return (
    <nav className={`flex items-center justify-between py-4 px-[1rem] md:px-none`}>
            <Link href="/" className='gap-5 flex items-center '>
                <Image src="/logo.png" alt='logo' width={90}  height={90} className='w-[80px] md:w-auto'  />
                {/* <h2 className='text-sm md:text-4xl text-zinc-600 transform'> Soni Interiors</h2>  */}
            </Link>
            <Menu/>
            <ul className='items-center gap-5 hidden md:flex'>
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
                            link: 'tel:+919029373799'
                        },

                    ].map((item, index) => {
                        return (
                            <Link href={item.link} key={index}>
                                <li className={` text-lg ${index === 4 ? 'bg-accent-primary px-4 py-2 rounded-full text-white hover:bg-accent-primary/70 transition-all' : 'underline_animation'}`}>
                                    {item.name}
                                </li>
                            </Link>
                        )
                    })
                }
            </ul>
    </nav>
  )
}

export default Header
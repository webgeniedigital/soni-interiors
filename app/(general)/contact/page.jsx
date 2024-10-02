import Link from 'next/link';
import React from 'react'
import { RiMailLine, RiMapPin2Line, RiPhoneLine } from "react-icons/ri";

const page = () => {
  return (
    <section className="flex items-center justify-center p-5 flex-col space-y-5 max-w-5xl mx-auto my-0">
      <h1 className="md:text-[5vw] text-[10vw] text-stroke text-center">CONTACT US</h1>
      <section className='grid grid-cols-1 lg:grid-cols-2 grid-rows-2 w-full gap-5 md:gap-0'>
        <div className='lg:h-[500px] bg-slate-100 lg:row-span-1 lg:col-span-1  p-10 space-y-10 md:mr-1  ' >
          <h2 className='text-4xl'>Details</h2>
          <ul className='space-y-4'>
            <li className='flex gap-3 items-start'><span>
              <RiMapPin2Line className='text-2xl text-primary' /></span> Building no. 3, Swarg Height Building,
              150 Feet Road, Nr. D Mart,
              Bhayandar (W), Thane-401101 </li>
            <li className="flex items-start gap-3 ">
              <RiMailLine className="text-2xl text-primary" />
              <span className='flex items-start flex-col'>
                <Link href="mailto:soniinteriors2017@gmail.com" className='hover:underline'> soniinteriors2017@gmail.com</Link><br />
              </span>
            </li>
            <li className="flex flex-col gap-3 items-start">
              <span className='flex gap-3 items-start'>
                <RiPhoneLine className="text-2xl text-primary" />
                +91 9029373799 / +91 9821680359
              </span>
            </li>
          </ul>
        </div>
        <div className='lg:h-[500px] bg-slate-100 lg:row-span-1 lg:col-start-2  lg:col-span-2  p-10 space-y-6 md:ml-1'>
          <h2 className='text-4xl'>Connect</h2>
          <div className='flex  gap-3 flex-col '>
            <input type="text" placeholder='Name' className='border border-slate-300 p-2 rounded-lg' />
            <input type="number" placeholder='Phone' className='border border-slate-300 p-2 rounded-lg' />
            <textarea placeholder='Query' className='border border-slate-300 p-2 rounded-lg' cols="30" rows="7"></textarea>
          </div>
          <button type='submit' className='text-white bg-primary p-3 w-full rounded-full bg-accent-primary hover:opacity-80 transition-all'>Submit</button>
        </div>
        <div className='lg:h-96 bg-slate-100 md:mt-2  lg:row-span-2 lg:col-span-2  overflow-hidden relative'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.733681491788!2d72.8445077868511!3d19.293944298583686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b1cb1340f1eb%3A0x6aab9bb27273ab71!2sSwarg%20Heights!5e0!3m2!1sen!2sin!4v1727911727710!5m2!1sen!2sin" width="1000" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    </section>
  )
}


export const metadata = {
  title: "Contact | Soni Interiors",
  description: "Soni Interiors, providing excellent services for 28 years, specializes in transforming homes into dream spaces. Our unique skills and latest technology ensure client satisfaction.",
  openGraph: {
    title: 'Soni Interiors - Transforming Homes into Dream Spaces',
    description: 'Soni Interiors, providing excellent services for 28 years, specializes in transforming homes into dream spaces. Our unique skills and latest technology ensure client satisfaction.',
    siteName: 'Soni Interiors',
    images: [
      // {
      //   url: 'https://nextjs.org/og.png',
      //   width: 800,
      //   height: 600,
      // },
      // {
      //   url: 'https://nextjs.org/og-alt.png',
      //   width: 1800,
      //   height: 1600,
      //   alt: 'My custom alt',
      // },
      // Add this asap
    ],
    locale: 'en_IN',
    type: 'website',
    url: 'https://www.kpinteriors.com'
  },
  keywords: [
    'interior website', 'Soni Interiors', 'kp interior designer',
    'kp interior designer website', 'home interiors', 'kp home interiors'
  ]
};

export default page
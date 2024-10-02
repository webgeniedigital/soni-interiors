import Image from "next/image";
import React from "react";
import { qwitcher } from "../../../utils/font";
import { AiOutlineBuild, AiOutlineDollarCircle, AiOutlineReload, AiOutlineSafety, AiOutlineSafetyCertificate } from 'react-icons/ai'
import AboutIntro from '../../../components/AboutIntro';

const page = () => {
  return (
    <section className="flex items-center justify-center p-5 flex-col space-y-5 md:space-y-10  mx-auto my-0">
      {/* <div className="text-center">
        <h1 className="text-stroke md:text-[5vw] text-[10vw] leading-none">ABOUT US</h1>
        <p className={`${qwitcher.className} md:text-5xl text-4xl  font-bold text-accent-primary text-primary `}>
          If you can dream it, we can create it
        </p>
      </div>
      <div className="space-y-5">
        {
          [
            {
              name: 'Mr. Parshuram Vishwakarma', designation: 'Founder', description: 'Mr. Parshuram Vishwakarma, founded K P Interiors in 1992. An enthusiast with a passion of building spaces since he was 16 years old. Started building with his own hand, he is now providing services pan India. His obsession with perfection has led to many satisfied clients throughout his career.', styles: 'bg-accent-secondary/15', image: "/founderImg.png"
            },
            {
              name: 'Ar. Amit Vishwakarma', designation: 'Co-Founder', description: 'Ar. Amit P Vishwakarma is a practising Architect since 2019. His fascination about functional art, space and enthusiasm on solving design problems are the strongest aspects. It also ensues that his deep passion for art, his appreciation of architecture, and his yearning to be amongst those who create the changing comfortable environment for his valuable clients', styles: 'bg-accent-primary/15', image: "/cofounder.png"
            }
          ].map((item, index) => (
            <AboutIntro key={index} {...item} />
          ))
        }
      </div>
      <div className="w-full h-[1px] bg-slate-200  md:hidden" />

      <div className="max-w-screen-lg  w-full  grid grid-cols-2 md:flex md:items-center md:flex-wrap md:justify-center  sm:grid-cols-3  md:gap-16 gap-6  grid-rows-2 ">
        {
          [
            {
              title: 'Years of Experience',
              duration: '30+'
            },
            {
              title: 'Projects',
              duration: '300+'
            },
            {
              title: 'Area Covered (Sq. Ft.)',
              duration: '100,000+'
            },

          ].map((item, index) => (
            <div key={index} className={`${index == 2 ? "col-span-2 sm:col-span-1" : "col-span-1"} `}>
              <p className="text-2xl font-light text-left md:text-8xl text-transparent  text-stroke-about  ">{item.duration}</p>
              <h2 className=" text-gray-600 ">{item.title}</h2>
            </div>
          ))
        }
      </div>

      <div className="w-full h-[1px] bg-slate-200  md:hidden " />

      <div className="max-w-screen-lg space-y-3 grid grid-cols-1 md:grid-cols-2 gap-4 place-items-start">
        <div className="mt-3">
          <h2 className="text-2xl text-accent-primary font-light text-left ">OUR MISSION </h2>
          <ul className="space-y-2 text-white ">
            {
              [
                { description: 'To ensure the longevity of our company through repeat and referral business achieved by customer satisfaction in all areas including timeliness, attention to detail and service-minded attitudes.', icon: <AiOutlineReload size={30} fill="#fff" /> },
                { description: 'Our mission is to provide our employees with an honest and helpful working environment, where every employee individually and collectively, can dedicate themselves to providing our customers with exceptional workmanship, extraordinary service, and professional integrity.', icon: <AiOutlineSafety size={30} fill="#fff" /> },
              ].map((item, index) => (
                <div key={index} className="flex items-center md:flex-row  md:text-start md:px-6 flex-col  text-center border  py-4 rounded-xl">
                  <div className="p-2 rounded-full bg-accent-secondary">
                    {item.icon}
                  </div>
                  <li className={` px-2 py-2 rounded-md text-black`}> {item.description} </li>
                </div>
              ))
            }
          </ul>
        </div>
        <div>
          <h2 className="text-2xl text-accent-primary font-light text-left ">OUR VISION</h2>
          <ul className="space-y-2 text-white ">
            {
              [
                { description: 'To perform for our customers the highest level of quality construction services at fair and market competitive prices.', icon: <AiOutlineDollarCircle size={30} fill="#fff" /> },
                { description: 'To maintain the highest levels of professionalism, integrity, honesty and fairness in our relationships with our suppliers, subcontractors, professional associates and customers.', icon: <AiOutlineSafetyCertificate size={30} fill="#fff" /> },
                { description: 'We value the importance of our relationships and will continue to remain fair and true in our dealings with all employees, clients, vendors, and partners.', icon: <AiOutlineBuild size={30} fill="#fff" /> }
              ].map((item, index) => (
                <div key={index} className="flex items-center md:flex-row  md:text-start md:px-6 flex-col  text-center border  py-4 rounded-xl">
                  <div className="p-2 rounded-full bg-accent-secondary">
                    {item.icon}
                  </div>
                  <li className={` px-2 py-2 rounded-md text-black`}> {item.description} </li>
                </div>
              ))
            }
          </ul>
        </div>

      </div> */}
      About Page
    </section >
  );
};

export const metadata = {
  title: "About | Soni Interiors",
  description:
    "Soni Interiors, providing excellent services for 28 years, specializes in transforming homes into dream spaces. Our unique skills and latest technology ensure client satisfaction.",
  openGraph: {
    title: "Soni Interiors - Transforming Homes into Dream Spaces",
    description:
      "Soni Interiors, providing excellent services for 28 years, specializes in transforming homes into dream spaces. Our unique skills and latest technology ensure client satisfaction.",
    siteName: "Soni Interiors",
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
    locale: "en_IN",
    type: "website",
    url: "https://www.kpinteriors.com",
  },
  keywords: [
    "interior website",
    "Soni Interiors",
    "kp interior designer",
    "kp interior designer website",
    "home interiors",
    "kp home interiors",
  ],
};

export default page;

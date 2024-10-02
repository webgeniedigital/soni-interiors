"use client";
import React from "react";
import { useState } from "react";
import Commercial from "../../ImagesArray/Commercial1.json";
import Residence from "../../ImagesArray/Residence1.json";
import Retail from "../../ImagesArray/Retail1.json";
import Ongoing from "../../ImagesArray/Ongoing.json";
import Image from "next/image";
import Link from "next/link";
import PortfolioTab from "../../../components/PortfolioTab";

const Page = () => {
  const [display, setDisplay] = useState("All");
  const Category = ["All", "Residence", "Commercial", "Retail", "Ongoing"];

  return (
    <main>
      {/* <section className="h-[30vh] md:h-[50vh] w-full  grid place-content-center relative bg-[url('/portfoliobg.png')] bg-no-repeat bg-center bg-cover shadow-inner ">
        <div className="absolute inset-0 w-full h-full  opacity-50 bg-black/50"></div>
        <h2 className="text-white  text-4xl md:text-7xl z-10  font-bold ">
          PORTFOLIO
        </h2>
      </section>
      <div className="w-full h-20 md:h-32 p-1 md:p-3 md:gap-3 grid place-content-center">
        <PortfolioTab ElemCtg={Category} setDisplay={setDisplay} />
      </div>
      <section className="grid p-4 grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto my-0">
        {display === "Residence" &&
          Residence.map((item, index) => (
            <Link
              key={index}
              target="_blank"
              href={`/portfolio/${item.imgTitle.toLocaleLowerCase()}`}
              className="group h-96 overflow-hidden bg-black rounded-lg relative shadow-md"
            >
              <Image
                src={item.images[0]}
                width={500}
                height={500}
                alt={`${display}_${index}`}
                className="object-cover h-full cursor-pointer rounded-lg opacity-60 hover:opacity-100 transition-all hover:scale-105 z-20"
              />
              <h1 className="group-hover:bg-black/50 group-hover:text-white group-hover:font-semibold group-hover:absolute group-hover:bottom-10 py-3  text-center transition-all font-light w-full">
                {item.imgTitle}
              </h1>
            </Link>
          ))}
        {display === "Commercial" &&
          Commercial.map((item, index) => (
            <Link
              key={index}
              target="_blank"
              href={`/portfolio/${item.imgTitle.toLocaleLowerCase()}`}
              className="group h-96 overflow-hidden bg-black rounded-lg relative shadow-md"
            >
              <Image
                src={item.images[0]}
                width={500}
                height={500}
                alt={`${display}_${index}`}
                className="object-cover h-full cursor-pointer rounded-lg opacity-60 hover:opacity-100 transition-all hover:scale-105 z-20"
              />
              <h1 className="group-hover:bg-black/50 group-hover:text-white group-hover:font-semibold group-hover:absolute group-hover:bottom-10 py-3  text-center transition-all font-light w-full">
                {item.imgTitle}
              </h1>
            </Link>
          ))}
        {display === "Retail" &&
          Retail.map((item, index) => (
            <Link
              key={index}
              target="_blank"
              href={`/portfolio/${item.imgTitle.toLocaleLowerCase()}`}
              className="group h-96 overflow-hidden bg-black rounded-lg relative shadow-md"
            >
              <Image
                src={item.images[0]}
                width={500}
                height={500}
                alt={`${display}_${index}`}
                className="object-cover h-full cursor-pointer rounded-lg opacity-60 hover:opacity-100 transition-all hover:scale-105 z-20"
              />
              <h1 className="group-hover:bg-black/50 group-hover:text-white group-hover:font-semibold group-hover:absolute group-hover:bottom-10 py-3  text-center transition-all font-light w-full">
                {item.imgTitle}
              </h1>
            </Link>
          ))}
        {display === "Ongoing" &&
          Ongoing.map((item, index) => (
            <Link
              key={index}
              target="_blank"
              href={`/portfolio/${item.imgTitle.toLocaleLowerCase()}`}
              className="group h-96 overflow-hidden bg-black rounded-lg relative shadow-md"
            >
              <Image
                src={item.images[0]}
                width={500}
                height={500}
                alt={`${display}_${index}`}
                className="object-cover h-full cursor-pointer rounded-lg opacity-60 hover:opacity-100 transition-all hover:scale-105 z-20"
              />
              <h1 className="group-hover:bg-black/50 group-hover:text-white group-hover:font-semibold group-hover:absolute group-hover:bottom-10 py-3  text-center transition-all font-light w-full">
                {item.imgTitle}
              </h1>
            </Link>
          ))}
        {display === "All" &&
          [...Commercial, ...Residence, ...Retail].map((item, index) => (
            <Link
              key={index}
              target="_blank"
              href={`/portfolio/${item.imgTitle.toLocaleLowerCase()}`}
              className="group h-96 overflow-hidden bg-black rounded-lg relative shadow-md"
            >
              <Image
                src={item.images[0]}
                width={500}
                height={500}
                alt={`${display}_${index}`}
                className="object-cover h-full cursor-pointer rounded-lg opacity-60 hover:opacity-100 transition-all hover:scale-105 z-20"
              />
              <h1 className="group-hover:bg-black/50 group-hover:text-white group-hover:font-semibold group-hover:absolute group-hover:bottom-10 py-3  text-center transition-all font-light w-full">
                {item.imgTitle}
              </h1>
            </Link>
          ))}
      </section> */}
      <h1>Portfolio Page</h1>
    </main>
  );
};

export default Page;

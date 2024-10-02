"use client";
import React, { useState } from "react";
import Commercial from "../app/ImagesArray/Commercial1.json";
import Residence from "../app/ImagesArray/Residence1.json";
import Retail from "../app/ImagesArray/Retail1.json";
import Image from "next/image";
import { useParams } from "next/navigation";
import ImgSlide from "./ImgSlide";

export default function ProjectRoute() {
  const params = useParams();
  const GroupArray = [...Commercial, ...Residence, ...Retail];
  const RouteArray = GroupArray.filter(
    (e) =>
      e.imgTitle.toLocaleLowerCase() === decodeURIComponent(params.projects)
  );
  const decodedRoute = decodeURIComponent(params.projects);
  const [imgSrc, setImgSrc] = useState(null);
  console.log([...RouteArray[0].images])

  return (
    imgSrc ? (
      <ImgSlide src={[...RouteArray[0].images]} imgSrc={imgSrc} setImgSrc={setImgSrc} />
    ) : (
      <>
        <section className="h-[30vh] md:h-[50vh] w-full grid place-content-center relative bg-[url('/portfoliobg.png')] bg-no-repeat bg-center bg-cover shadow-inner">
          <div className="absolute inset-0 w-full h-full opacity-50 bg-black/50"></div>
          <h2 className="text-white text-4xl md:text-6xl z-10 font-bold text-center">
            {decodedRoute
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </h2>
        </section>
        <section className="grid p-4 grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto my-0 place-content-center">
          {RouteArray.map((elem, i) =>
            elem.images.map((item, index) => (
              <div
                key={`${elem.imgTitle}_${index}`} // Using a unique key
                onClick={() => setImgSrc(index.toString())}
                className="group h-96 overflow-hidden bg-black rounded-lg relative shadow-md"
              >
                <Image
                  src={item}
                  width={500}
                  height={500}
                  alt={`${elem.imgTitle}_${index}`}
                  className="object-cover h-full cursor-pointer rounded-lg opacity-60 hover:opacity-100 transition-all hover:scale-105 z-20"
                />
              </div>
            ))
          )}
        </section>
      </>
    )
  );
}   
import Image from "next/image";
import React, { useState } from "react";

import {
  RiArrowLeftCircleLine,
  RiArrowRightCircleLine,
  RiCloseCircleLine,
} from "react-icons/ri";
const ImgSlide = ({ src, imgSrc, setImgSrc }) => {
  return (
    <section className="fixed inset-0 bg-white z-20 h-screen md:p-10 select-none flex items-center justify-between">
      <RiCloseCircleLine
        className="top-2 z-10 right-2 text-3xl text-slate-500 cursor-pointer fixed"
        onClick={() => setImgSrc(null)}
      />
      <div className=" absolute z-10 top-1/2 left-1/2 cursor-pointer transform -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-between px-1 text-3xl ">
        <RiArrowLeftCircleLine
          onClick={
            parseInt(imgSrc) == 0
              ? () => setImgSrc(null)
              : () => setImgSrc(parseInt(imgSrc) - 1)
          }
        />
        <RiArrowRightCircleLine
          onClick={
            src.length - 1 <= parseInt(imgSrc)
              ? () => setImgSrc(null)
              : () => setImgSrc(parseInt(imgSrc) + 1)
          }
        />
      </div>
      <Image
        src={src[parseInt(imgSrc)]}
        width={500}
        height={500}
        alt="photo-gallery"
        className="animate__animated animate__fadeIn w-full rounded-lg  h-1/2 md:h-full object-cover object-center aspect-video"
      />
    </section>
  );
};

export default ImgSlide;

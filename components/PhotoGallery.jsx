"use client";
import Image from "next/image";
import React, { useState } from "react";
import ImgSlide from "./ImgSlide";

const PhotoGallery = ({ src, name }) => {
  const [imgSrc, setImgSrc] = useState(null);

  // Check if src is an array and each item has an images array
  const isValidSrc =
    Array.isArray(src) && src.every((item) => Array.isArray(item.images));

  const transformedSrc = isValidSrc
    ? src.flatMap((item) =>
        item.images.map((imgLink, index) => ({
          imgLink,
          imgTitle: `${item.imgTitle} ${index + 1}`,
        }))
      )
    : [];

  if (!isValidSrc) return <div>Invalid source data.</div>;
  const imagesCollection = src.flatMap((item) => item.images);

  return imgSrc ? (
    <ImgSlide src={imagesCollection} imgSrc={imgSrc} setImgSrc={setImgSrc} />
  ) : (
    <section className="py-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:px-16">
      {transformedSrc.map((item, index) => (
        <div
          key={index}
          onClick={() => setImgSrc(index.toString())}
          className="shadow-inner aspect-video overflow-hidden rounded-3xl relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 "
        >
          <Image
            src={item.imgLink}
            width={500}
            height={500}
            alt="photo-gallery"
            className="w-full mx-auto h-full object-cover object-center"
          />
          <h3 className="absolute bottom-4 left-4 z-10 text-2xl text-white font-light drop-shadow-2xl">
            {item.imgTitle}
          </h3>
        </div>
      ))}
    </section>
  );
};

export default PhotoGallery;

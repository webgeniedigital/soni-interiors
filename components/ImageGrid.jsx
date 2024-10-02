"use client";
import React, { useState } from "react";
import Image from "next/image";
import ImgSlide from "./ImgSlide";

const ImageGrid = ({ imageArray, title }) => {
  const [imgSrc, setImgSrc] = useState(null);

  const groupedImages = imageArray.reduce((acc, img, index) => {
    const groupIndex = Math.floor(index / 7);
    if (!acc[groupIndex]) {
      acc[groupIndex] = []; // Initialize the group if it doesn't exist
    }
    acc[groupIndex].push(img);
    return acc;
  }, []);

  return (
    <>
      {imgSrc ? (
        <ImgSlide src={imageArray} imgSrc={imgSrc} setImgSrc={setImgSrc} />
      ) : (
        groupedImages.map((group, groupIndex) => (
          <section
            key={groupIndex}
            className="w-full grid md:grid-cols-4 md:grid-rows-4 grid-rows-7 grid-cols-1 gap-3 h-[200vh] md:h-[150vh] md:px-12 px-4 mt-10"
          >
            {group.map(
              (img, index) =>
                img && (
                  <div
                    key={index}
                    className={`overflow-hidden shadow-inner relative ${
                      index === 0 ? "md:row-span-2 md:col-span-2" : ""
                    } ${index === 1 ? "md:row-span-2 md:col-start-3" : ""} ${
                      index === 2 ? "md:col-start-4 md:col-span-4" : ""
                    } ${
                      index === 3
                        ? "md:row-start-2 md:col-start-4 md:col-span-4"
                        : ""
                    } ${index === 4 ? "md:col-span-2 md:col-start-1" : ""} ${
                      index === 5
                        ? "md:col-span-2 md:row-start-4 md:row-span-4"
                        : ""
                    } ${
                      index === 6
                        ? "md:row-start-3 md:row-span-5 md:col-span-5"
                        : ""
                    }`}
                  >
                    <Image
                      onClick={() =>
                        setImgSrc(
                          (groupIndex * group.length + index).toString()
                        )
                      }
                      src={img.imgLink}
                      width={500}
                      height={500}
                      alt={`${title}_${groupIndex}_${index}`}
                      className="object-cover w-full h-full object-center"
                    />
                    <h3 className="absolute bottom-4 left-4 z-10 text-2xl text-white font-light drop-shadow-2xl">
                      {img.imgTitle}
                    </h3>
                  </div>
                )
            )}
          </section>
        ))
      )}
    </>
  );
};

export default ImageGrid;

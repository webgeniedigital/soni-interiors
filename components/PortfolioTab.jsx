"use client";
// Packages need to be installed : npm install react-use
//This should be used a Dev Component i.e inside the Dev Folder.
import React, { useState } from "react";
import { useMeasure } from "react-use";

const PortfolioTab = ({ ElemCtg, setDisplay }) => {
  const [underNum, setUnderNum] = useState(0); //This is for button Underline position according to the Index
  const [ref, { width }] = useMeasure(); //This is to get button parent div width dimension so that the button underline moves with the parent div

  // Here Mention the Array Elements which you want to show as Tab Button
  // ElemCtg

  return (
    //Here this main div which contains Buttons and Section to display on button click
    //Here Height and Width are customizable
    <div
      className={`w-fit md:grid relative select-none flex  `}
      style={{ gridTemplateColumns: `repeat(${ElemCtg.length}, 1fr)` }}
      ref={ref}
    >
      {ElemCtg.map((elem, index) => (
        <button
          key={index}
          className={`${
            underNum === index ? " text-yellow-500" : "text-slate-400"
          } cursor-pointer hover:opacity-65 px-2 md:text-xl text-[14px] text-slate-700 font-semibold`}
          onClick={() => {
            setDisplay(elem), setUnderNum(index);
          }}
        >
          {elem}
        </button>
      ))}
      <hr
        className={` border mt-2 rounded-lg md:block hidden transition-all duration-300 border-yellow-400 `}
        style={{
          width: `${width / ElemCtg.length}px`,
          transform: `translateX(${(width / ElemCtg.length) * underNum}px)`,
        }}
      />
    </div>
  );
};

export default PortfolioTab;

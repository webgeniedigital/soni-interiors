import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import PhotoGallery from './PhotoGallery'
import CommercialImages from "../app/ImagesArray/Commercial1.json"
import ResidenceImages from "../app/ImagesArray/Residence1.json"
import RetailImages from "../app/ImagesArray/Retail1.json"


const ModalGallery = ({ title }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };
  
  const Workshops = [
    {
      src: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbWVyY2lhbCUyMHJvb218ZW58MHx8MHx8fDA%3D",
      width: 2,
      height: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbWVyY2lhbCUyMHJvb218ZW58MHx8MHx8fDA%3D",
      width: 1,
      height: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbWVyY2lhbCUyMHJvb218ZW58MHx8MHx8fDA%3D",
      width: 2,
      height: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbWVyY2lhbCUyMHJvb218ZW58MHx8MHx8fDA%3D",
      width: 1,
      height: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbWVyY2lhbCUyMHJvb218ZW58MHx8MHx8fDA%3D",
      width: 2,
      height: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbWVyY2lhbCUyMHJvb218ZW58MHx8MHx8fDA%3D",
      width: 1,
      height: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbWVyY2lhbCUyMHJvb218ZW58MHx8MHx8fDA%3D",
      width: 2,
      height: 1,
    },
    {
      src: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbWVyY2lhbCUyMHJvb218ZW58MHx8MHx8fDA%3D",
      width: 1,
      height: 1,
    },
  ];


  const handleCloseModal = () => {
    setModalOpen(false);
  };
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);
  return (
    <>
      <button
        type="button"
        className="p-2 bg-accent-secondary px-3 rounded-xl text-white transition-all hover:shadow-md"
        onClick={handleOpenModal}
      >
        {title}
      </button>
      <section
        className={`fixed top-0 left-0 bottom-0 p-2 right-0 duration-500 transition-[scale, opacity] bg-white z-[1000]  ${isModalOpen ? " scale-100 opacity-100" : " scale-0 opacity-0 "
          } overflow-y-scroll `}
      >
        <RiCloseCircleLine
          className="fixed top-8 right-8 text-4xl cursor-pointer text-slate-400"
          onClick={handleCloseModal}
        />

        {title === "Residential" ? (
          <PhotoGallery src={ResidenceImages} />
        ) : title === "Commercial" ? (
          <PhotoGallery src={CommercialImages} />
        ) : title === "Workshop" ? (
          <PhotoGallery src={Workshops} />
        ) : title === "Retail" ? (
          <PhotoGallery src={RetailImages} />
        ) : null}
      </section>
    </>
  );
};

export default ModalGallery;

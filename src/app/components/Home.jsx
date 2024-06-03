"use client";
import { useState, useEffect } from "react";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowRoundDown } from "react-icons/io";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";
import img1 from "/public/1.jpg";
import img2 from "/public/2.jpg";
import img3 from "/public/3.jpg";
import img4 from "/public/4.jpg";

const variants = {
  enter: {
    opacity: 0,
  },
  center: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
  },
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [img1, img2, img3, img4];

  // Auto slide interval
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Ganti gambar setiap 10 detik
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="relative h-screen overflow-hidden mx-auto flex items-center justify-center text-center">
      <div className="  ">
        <AnimatePresence>
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial="enter"
              animate={index === currentSlide ? "center" : "exit"}
              exit="exit"
              variants={variants}
              className="absolute inset-0 flex items-center justify-center brightness-50"
              style={{
                opacity: index === currentSlide ? 1 : 0.6, // Atur opasitas sesuai dengan slide aktif atau tidak
              }}
            >
              <Image
                src={img}
                alt={`Slide ${index + 1}`}
                layout="fill" // Gambar memenuhi h-screen
                objectFit="cover" // Gambar memenuhi container tanpa merubah aspek rasio
                loading="eager" // Pastikan gambar dimuat dengan benar
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className=" flex flex-col z-10 items-center text-center justify-center text-white lg:px-72 md:px-28">
        <div>
          <h1 className=" font-semibold lg:text-7xl md:text-5xl sm:text-3xl ">
            As you start your dream journey, we offer expert guidance and
            adventurous spirit{" "}
          </h1>
        </div>
        <div className="lg:flex text-center justify-center p-2 rounded-full bg-gray-900 bg-opacity-80 border border-gray-200 lg:w-6/12 md:w-full  max-md:flex-col  mt-10">
          <div className="relative inline-block ml-3">
            <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none -mr-5">
              <FaAngleDown />
              <div
                className="border-r border border-gray-300 ml-2"
                style={{ height: "30px" }}
              ></div>
            </div>

            <select
              id="destination"
              className="bg-transparent text-gray-400 appearance-none border border-transparent focus:outline-none px-4 py-2 cursor-pointer "
            >
              <option value="" disabled selected hidden>
                Search destination
              </option>
              <option value="destination1" className="bg-blur text-black">
                Destination 1
              </option>
              <option value="destination2" className="bg-blur text-black">
                Destination 2
              </option>
              <option value="destination3" className="bg-blur text-black">
                Destination 3
              </option>
            </select>
          </div>
          <div className="relative inline-block ml-3">
            <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none -mr-5">
              <FaAngleDown />
              <div
                className="border-r border border-gray-300 ml-2"
                style={{ height: "30px" }}
              ></div>
            </div>

            <Flatpickr
              className="bg-transparent text-white py-2 cursor-pointer justify-center text-center"
              options={{
                dateFormat: "d/m/Y",
                locale: {
                  firstDayOfWeek: 1, // misalnya, Anda bisa mengatur bahasa Inggris dengan hari pertama pekan pada hari Senin
                },
              }}
              placeholder="Pilih tanggal"
            />
          </div>
          <div className="relative inline-block ml-3">
            <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none -mr-5">
              <FaAngleDown />
              <div
                className="border-r border border-gray-300 ml-2"
                style={{ height: "30px" }}
              ></div>
            </div>

            <select
              id="destination"
              className="bg-transparent text-gray-400 appearance-none border border-transparent focus:outline-none px-4 py-2 cursor-pointer "
            >
              <option value="" disabled selected hidden>
                Trip type
              </option>
              <option value="destination1" className="bg-blur text-black">
                Destination 1
              </option>
              <option value="destination2" className="bg-blur text-black">
                Destination 2
              </option>
              <option value="destination3" className="bg-blur text-black">
                Destination 3
              </option>
            </select>
          </div>
          <div className="relative inline-block ml-10 mr-5">
            <div className=" flex items-center justify-center text-center bg-white py-2 px-6 text-black font-bold rounded-full">
              <button>
                {" "}
                <h1>Explore</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full z-10 p-4 px-20">
        {/* Container flex utama untuk justify-between */}
        <div className="flex justify-between items-center">
          {/* Sebelah kiri bawah */}
          <div className="flex items-center space-x-2 text-center border rounded-full px-3 py-1 ">
            <IoLocationOutline color="white" />
            <h1 className="text-white text-xs font-light">Bali, Indonesia</h1>
          </div>
          {/* Sebelah kanan bawah */}
          <div className=" absolute right-20 mr-5 bottom-14 items-center space-x-2 text-center border rounded-full px-4 py-2 hover:bg-gray-400  ">
            <button className=" ">
              <div className=" flex space-x-1 items-center ">
                <h1 className="text-white font-light">Explore More</h1>
                <IoIosArrowRoundDown className=" text-white" size={20} />
              </div>
            </button>
          </div>
        </div>
        {/* Elemen teks berada di bawah container flex */}
        <div className=" flex w-3/12 mt-4 text-justify">
          <h1 className="text-white font-light">
            Make your booking for travel and transportation with us and
            experience a hassle-free and unforgettable journey
          </h1>
        </div>
      </div>
    </div>
  );
}

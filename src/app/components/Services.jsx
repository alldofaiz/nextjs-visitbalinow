"use client";
import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="  relative px-28 py-20 h-screen justify-between ">
      <div className=" flex flex-col">
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="mb-5 font-bold text-blue-500">//OUR SERVICES</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-justify"
          >
            <h1 className=" font-normal text-6xl">
              Explore endless options with our service
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-justify"
          >
            <h1 className="font-semibold text-xl mt-5 max-w-4xl text-gray-500">
              Discover a myriad of choices for available through our service
              offering limitless possibiitites for your exploration and
              enjoyment
            </h1>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex space-x-5 justify-center"
        >
          <div className="flex mt-10">
            <div className="relative flex max-w-5xl">
              <img
                src="./potrait_1.jpg"
                alt=""
                className="rounded-3xl h-[700px] w-[950px] object-cover brightness-75"
              />
              <div className="absolute bottom-0 px-10 pb-5 w-full ">
                <h1 className="text-4xl text-white">
                  Comprehensive Travel Support
                </h1>
                <h2 className="text-xl text-gray-300">
                  24/7 customer service to assist you before, during, and after
                  your trip.
                </h2>
              </div>
            </div>
            <div className="flex flex-col ml-5 space-y-5 max-w-5xl">
              <div className="relative">
                <img
                  src="./potrait_5.jpg"
                  alt=""
                  className="rounded-3xl w-[700px] h-[350px] object-cover brightness-75"
                  // style={{ objectPosition: "center" }}
                />
                <div className="absolute bottom-0 px-10 pb-5 w-full">
                  <h1 className="text-4xl text-white">Expert Travel Advice</h1>
                  <h2 className="text-xl text-gray-300">
                    Tips and guides to enchance your travel experience.
                  </h2>
                </div>
              </div>
              <div className="relative">
                <img
                  src="./potrait_2.jpg"
                  alt=""
                  className="rounded-3xl w-[700px] h-[330px] object-cover brightness-75"
                />
                <div className="absolute bottom-0 px-10 pb-5 w-full ">
                  <h1 className="text-4xl text-white">Diverse Destinations</h1>
                  <h2 className="text-xl text-gray-300">
                    Access to a wide range of domestic and international
                    locations.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;

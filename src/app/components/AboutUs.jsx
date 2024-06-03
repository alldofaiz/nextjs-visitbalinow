"use client";
import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="  relative px-28 py-20 justify-between ">
      <div className=" flex justify-between">
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="mb-5 font-bold text-blue-500">//ABOUT US</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-3/6 text-justify"
          >
            <h1 className="font-semibold text-2xl">
              We are a passionate team of travel enthusiasts dedicated to making
              your travel dreams come true.{" "}
              <span className="text-gray-500">
                Our mission is to provide you with the best travel experiences
              </span>
            </h1>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute flex space-x-5 right-28 bottom-20"
        >
          <div className="flex items-center">
            <div className="flex flex-col text-center">
              <h1 className="font-semibold text-4xl">
                <CountUp end={200} duration={5} suffix="+" />
              </h1>
              <h1 className="text-gray-500">Happy Customers</h1>
            </div>
            <div
              className="border-r-2 px-2 border-gray-400"
              style={{ height: "35px" }}
            ></div>
          </div>
          <div className="flex items-center">
            <div className="flex flex-col text-center">
              <h1 className="font-semibold text-4xl">
                <CountUp end={65} duration={5} suffix="+" />
              </h1>
              <h1 className="text-gray-500">Top Hotels</h1>
            </div>
            <div
              className="border-r-2 px-2 border-gray-400"
              style={{ height: "35px" }}
            ></div>
          </div>
          <div className="flex items-center">
            <div className="flex flex-col text-center">
              <h1 className="font-semibold text-4xl">
                <CountUp end={250} duration={5} suffix="+" />
              </h1>
              <h1 className="text-gray-500">Experienced Guides</h1>
            </div>
            <div
              className="border-r-2 px-2 border-gray-400"
              style={{ height: "35px" }}
            ></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;

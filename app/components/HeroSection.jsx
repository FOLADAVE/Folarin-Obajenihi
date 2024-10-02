"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import  { motion } from "framer-motion"

const HeroSection = () => {
  return (
    <section>
      
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-green-300 to-green-400">
              Hello, I'm {""}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Folarin",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "a Frontend Developer",
                2000,
                "a Web Engineer",
                2000,
                "a Web Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Most days, I'm crafting stunning web pages that provide exceptional user experiences.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-800 via-green-400 to-green-300  hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-green-300 via-green-400 to-blue-800 hover:bg-slate-800 text-white mt-3 lg:mt-0">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }} className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#121222] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative flex items-center justify-center">
            <Image
              src="/images/code.png"
              alt="hero image"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

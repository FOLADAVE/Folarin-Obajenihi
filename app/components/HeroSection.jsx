"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="py-8 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 lg:col-span-7 text-center lg:text-left order-2 lg:order-1"
        >
          <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-green-300 to-green-400">
              Hello, I&apos;m
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Folarin",
                2000,
                "a Frontend Developer",
                2000,
                "a Next.js Developer",
                2000,
                "a React Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-lg max-w-xl mx-auto lg:mx-0">
            I build modern, responsive web applications using Next.js, React, and JavaScript. 
            Crafting exceptional user experiences with clean, maintainable code.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <a href="mailto:folarinobajenihi@gmail.com" className="w-full sm:w-auto">
              <button className="px-8 py-3 w-full rounded-full bg-gradient-to-br from-blue-800 via-green-400 to-green-300 hover:opacity-90 text-white font-medium transition-opacity shadow-lg hover:shadow-green-400/50">
                Hire Me
              </button>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/folarin-obajenihi-b49a93384" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <button className="px-2 py-2 w-full rounded-full bg-gradient-to-br from-green-300 via-green-400 to-blue-800 hover:opacity-90 transition-opacity shadow-lg">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-6 py-2 font-medium transition-colors">
                  LinkedIn
                </span>
              </button>
            </a>
          </div>

          {/* Tech Stack Pills - Moved here for better layout */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {["Next.js", "React", "JavaScript", "Tailwind CSS"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-[#1a1a2e] border border-green-400/30 rounded-full text-green-400 text-sm font-medium hover:border-green-400/60 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Images Section - REDESIGNED */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 lg:col-span-5 order-1 lg:order-2"
        >
          <div className="relative w-full max-w-[450px] mx-auto">
            
            {/* Code Icon - Floating on top */}
            <div className="relative z-10 mb-6">
              <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] mx-auto relative">
                {/* Animated gradient background */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-800/30 via-green-400/30 to-green-300/30 blur-2xl animate-pulse"></div>
                
                {/* Icon container */}
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] border-2 border-green-400/30 flex items-center justify-center shadow-2xl">
                  <Image
                    src="/images/code.png"
                    alt="Code illustration"
                    width={220}
                    height={220}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Workspace Image - Below code icon */}
       

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

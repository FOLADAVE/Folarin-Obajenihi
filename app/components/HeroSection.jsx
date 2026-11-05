"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { MdArrowForward } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";

const stack = ["Next.js", "React", "JavaScript", "TypeScript", "Tailwind CSS"];

const stats = [
  { value: "4+", label: "Years experience" },
  { value: "Next.js", label: "Primary stack" },
  { value: "Client", label: "Production work" },
];

const floatingChips = [
  { label: "Next.js", className: "top-4 -left-2 sm:-left-8", delay: 0 },
  { label: "React", className: "top-1/2 -right-2 sm:-right-10", delay: 0.6 },
  { label: "Tailwind", className: "bottom-6 left-0 sm:-left-6", delay: 1.2 },
];

const HeroSection = () => {
  return (
    <section className="py-8 lg:py-16">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 text-center lg:order-1 lg:col-span-7 lg:text-left"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-semibold text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for frontend roles
          </div>

          <h1 className="mb-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-sky-400 via-emerald-300 to-emerald-400 bg-clip-text text-transparent">
              Hello, I&apos;m
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Folarin Obajenihi",
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

          <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg lg:mx-0">
            I build modern, responsive web applications with Next.js, React and JavaScript,
            crafting fast, accessible interfaces backed by clean, maintainable code.
          </p>

          {/* Buttons */}
          <div className="mb-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="mailto:folarinobajenihi@gmail.com"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition-colors hover:bg-emerald-400"
            >
              Hire me
              <MdArrowForward className="transition-transform group-hover:translate-x-1" size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/folarin-obajenihi-b49a93384"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/10"
            >
              <FaLinkedin size={16} />
              LinkedIn
            </a>
          </div>

          {/* Stats */}
          <div className="mb-8 grid max-w-md grid-cols-3 gap-4 border-y border-white/10 py-5 mx-auto lg:mx-0">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-xl font-bold text-white">{s.value}</p>
                <p className="mt-0.5 text-xs text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Stack */}
          <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
            {stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-emerald-400/50 hover:text-emerald-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="order-1 lg:order-2 lg:col-span-5"
        >
          <div className="relative mx-auto h-[260px] w-[260px] sm:h-[320px] sm:w-[320px]">
            <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-br from-sky-500/30 via-emerald-400/30 to-emerald-300/20 blur-3xl" />
            <div className="relative flex h-full w-full items-center justify-center rounded-full border border-emerald-400/30 bg-gradient-to-br from-[#10163a] to-[#050a24] shadow-2xl">
              <Image
                src="/images/code.png"
                alt="Code illustration"
                width={220}
                height={220}
                className="object-contain"
                priority
              />
            </div>

            {floatingChips.map((c) => (
              <motion.span
                key={c.label}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: c.delay, ease: "easeInOut" }}
                className={`absolute rounded-xl border border-white/10 bg-[#0b1136]/90 px-3.5 py-2 text-xs font-semibold text-emerald-300 shadow-lg backdrop-blur ${c.className}`}
              >
                {c.label}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
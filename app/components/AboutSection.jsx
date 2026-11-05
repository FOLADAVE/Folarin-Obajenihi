"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TabButton from "./TabButton";

const chip =
  "rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200";

const SKILL_GROUPS = [
  { label: "Frontend", items: ["Next.js 14", "React 18", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"] },
  { label: "Styling", items: ["Tailwind CSS", "Responsive Design", "Mobile-First"] },
  { label: "Tools & Workflow", items: ["Git/GitHub", "Vercel Deployment", "Performance Optimization"] },
  { label: "APIs & Auth", items: ["NextAuth", "Google Sheets API"] },
  { label: "Currently Learning", items: ["Supabase", "React Native"] },
];

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="space-y-4">
        {SKILL_GROUPS.map((g) => (
          <div key={g.label}>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">{g.label}</p>
            <div className="flex flex-wrap gap-2">
              {g.items.map((i) => (
                <span key={i} className={chip}>{i}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="space-y-3 text-sm text-slate-200">
        {["National Open University of Nigeria", "freeCodeCamp"].map((e) => (
          <li key={e} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {e}
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="space-y-3 text-sm text-slate-200">
        {[
          "Responsive Web Design Certification",
          "Legacy JavaScript Algorithms and Data Structures Certification",
        ].map((c) => (
          <li key={c} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {c}
          </li>
        ))}
      </ul>
    ),
  },
];

const highlights = [
  { value: "4+", label: "Years building for the web" },
  { value: "Client", label: "Production-ready projects" },
  { value: "B.Sc.", label: "Computer Science (in progress)" },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => setTab(id));
  };

  return (
    <section id="about" className="py-16 text-white">
      <div className="grid items-center gap-12 lg:grid-cols-2 xl:gap-16">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/20 via-emerald-400/20 to-emerald-300/10 blur-2xl" />
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-colors duration-300 hover:border-emerald-400/40">
            <Image
              src="/images/pc.jpg"
              alt="Developer workspace"
              width={600}
              height={420}
              className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-lg font-semibold">My Development Setup</p>
            </div>
          </div>
          <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-emerald-400/30 bg-[#0b1136] px-5 py-2 shadow-lg">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <p className="text-xs font-semibold text-emerald-300">Available for work</p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col"
        >
          <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            <span className="h-px w-8 bg-emerald-400" />
            About
          </p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">About me</h2>
          <p className="leading-relaxed text-slate-300 lg:text-lg">
            I&apos;m a frontend developer with 4 years of experience building modern web applications
            using Next.js, React, and JavaScript. I&apos;ve worked with clients to deliver
            production-ready products, including a food delivery platform and business service
            websites. I focus on responsive, fast-loading interfaces with clean, maintainable code,
            and I&apos;m currently pursuing Computer Science while building solutions to real-world
            problems.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {highlights.map((h) => (
              <div key={h.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xl font-bold text-white">{h.value}</p>
                <p className="mt-1 text-xs leading-snug text-slate-400">{h.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-row justify-start">
            {TAB_DATA.map((t) => (
              <TabButton key={t.id} selectTab={() => handleTabChange(t.id)} active={tab === t.id}>
                {t.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-6 min-h-[220px]">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
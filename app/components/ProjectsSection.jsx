"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  // CLIENT PROJECTS - Featured at top
  {
    id: 1,
    title: "Diction Oracle",
    description: "Professional website for speech training service with responsive design and contact system",
    image: "/images/projects/oma.png",
    tag: ["All", "Web", "Client"],
    gitUrl: "https://github.com/FOLADAVE/Oma-diction",
    previewUrl: "https://oma-web-main.vercel.app/",
    techStack: ["Next.js", "React", "Tailwind CSS"],
    isClientProject: true,
  },
  {
    id: 2,
    title: "The Windmill Pub Hitchin",
    description: "Full-featured food delivery platform with menu browsing, cart management, and order tracking",
    image: "/images/assets/windill-pub.png",
    tag: ["All", "Web", "Client"],
    gitUrl: "https://github.com/FOLADAVE/Windmill-Pub",
    previewUrl: "https://www.thewindmillpub.co.uk/",
    techStack: ["Next.js", "React","Next Auth", "Google Sheet API", "Tailwind CSS"],
    isClientProject: true,
  },
  
  // PERSONAL PROJECTS
  {
    id: 3,
    title: "Veltro — Business Analytics, Simplified",
    description: "Veltro is a modern SaaS dashboard for tracking revenue, users, and business growth in one place.",
    image: "/images/projects/veltro.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/FOLADAVE/veltro",
    previewUrl: "https://veltro-plum.vercel.app/",
    techStack: ["Next.js 14", "Supabase", "TypeScript", "Tailwind CSS", "Stripe", "Recharts"],
    isClientProject: false,
  },
  {
    id: 4,
    title: "Crackbucks Website",
    description: "Modern coffee shop website with menu display and location finder",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/FOLADAVE/Crackbucks",
    previewUrl: "https://foladave.github.io/Crackbucks/",
    techStack: ["HTML", "CSS", "JavaScript"],
    isClientProject: false,
  },
  {
    id: 5,
    title: "Calisity Website",
    description: "Fitness and wellness platform with class schedules and membership management",
    image: "/images/projects/calisity.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/FOLADAVE/Calisity",
    previewUrl: "https://calisity.vercel.app/",
    techStack: ["React", "Tailwind CSS"],
    isClientProject: false,
  },
  {
    id: 6,
    title: "Grid Clash",
    description: "A react based tic-tac-toe game with score tracking and reset functionality",
    image: "/images/projects/preview.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/FOLADAVE/Grid-Clash",
    previewUrl: "https://grid-clash-nine.vercel.app/",
    techStack: ["React", "Tailwind CSS"],
    isClientProject: false,
  },
];

const FILTERS = ["All", "Client", "Web"];

const cardVariants = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const filteredProjects = projectsData.filter((p) => p.tag.includes(tag));
  const clientProjects = projectsData.filter((p) => p.isClientProject);
  const personalProjects = filteredProjects.filter((p) =>
    tag === "All" ? !p.isClientProject : true
  );

  const renderCard = (project, index) => (
    <motion.li
      key={project.id}
      variants={cardVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="h-full"
    >
      <ProjectCard
        title={project.title}
        description={project.description}
        imgUrl={project.image}
        gitUrl={project.gitUrl}
        previewUrl={project.previewUrl}
        techStack={project.techStack}
        isClientProject={project.isClientProject}
      />
    </motion.li>
  );

  return (
    <section id="projects" className="py-16" ref={ref}>
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <p className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
          <span className="h-px w-8 bg-emerald-400" />
          Projects
          <span className="h-px w-8 bg-emerald-400" />
        </p>
        <h2 className="text-3xl font-bold text-white md:text-4xl">My projects</h2>
        <p className="mt-4 text-slate-300">
          A collection of production websites and applications I&apos;ve built with modern web
          technologies.
        </p>
      </div>

      <div className="mb-12 flex flex-row flex-wrap justify-center gap-2">
        {FILTERS.map((f) => (
          <ProjectTag key={f} onClick={setTag} name={f} isSelected={tag === f} />
        ))}
      </div>

      {tag === "All" && (
        <div className="mb-14">
          <h3 className="mb-6 flex items-center gap-3 text-lg font-semibold text-white">
            <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
              Featured
            </span>
            Client work
          </h3>
          <ul className="grid gap-8 md:grid-cols-2">
            {clientProjects.map(renderCard)}
          </ul>
        </div>
      )}

      <div>
        {tag === "All" && (
          <h3 className="mb-6 text-lg font-semibold text-white">Personal projects</h3>
        )}
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {personalProjects.map(renderCard)}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
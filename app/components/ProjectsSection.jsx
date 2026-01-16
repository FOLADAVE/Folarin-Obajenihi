"use client";
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { animate, motion, useInView } from 'framer-motion';

const projectsData = [
  // CLIENT PROJECTS - Featured at top
  {
    id: 1,
    title: "Diction Oracle",
    description: "Professional website for speech training service with responsive design and contact system",
    image: "/images/projects/22.png",
    tag: ["All", "Web", "Client"],
    gitUrl: "https://github.com/FOLADAVE/Oma-diction",
    previewUrl: "http://www.omadiction.pro/",
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
    techStack: ["Next.js", "React", "Tailwind CSS"],
    isClientProject: true,
  },
  
  // PERSONAL PROJECTS
  {
    id: 3,
    title: "Demeats website",
    description: "Food delivery website with menu, cart templates",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/FOLADAVE/Demeats",
    previewUrl: "https://foladave.github.io/Demeats/",
    techStack: ["React", "Tailwind CSS"],
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

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id='projects' className='py-8'>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4">
        My Projects
      </h2>
      <p className="text-[#ADB7BE] text-center mb-8 max-w-2xl mx-auto">
        A collection of production websites and applications I&apos;ve built using modern web technologies
      </p>
      
      <div className='text-white flex flex-row justify-center gap-2 py-6'>
        <ProjectTag 
          onClick={handleTagChange}
          name="All" 
          isSelected={tag === "All"} 
        />
        <ProjectTag 
          onClick={handleTagChange}
          name="Client" 
          isSelected={tag === "Client"} 
        />
        <ProjectTag 
          onClick={handleTagChange}
          name="Web" 
          isSelected={tag === "Web"} 
        />
      </div>

      {/* Featured Client Work Section */}
      {tag === "All" && (
        <div className='mb-12'>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
              Featured
            </span>
            Client Work
          </h3>
          <ul className='grid md:grid-cols-2 gap-8 md:gap-12'>
            {projectsData
              .filter(project => project.isClientProject)
              .map((project, index) => (
                <motion.li 
                  key={project.id}
                  variants={cardVariants} 
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  transition={{ duration: 0.3, delay: index * 0.2}}
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
              ))}
          </ul>
        </div>
      )}

      {/* All Projects or Filtered Projects */}
      <div className='mb-8'>
        {tag === "All" && (
          <h3 className="text-2xl font-bold text-white mb-6">
            Personal Projects
          </h3>
        )}
        <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
          {filteredProjects
            .filter(project => tag === "All" ? !project.isClientProject : true)
            .map((project, index) => (
              <motion.li 
                key={project.id}
                variants={cardVariants} 
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: index * 0.4}}
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
            ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
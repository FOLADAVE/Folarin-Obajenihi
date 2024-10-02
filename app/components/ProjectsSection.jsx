"use client";
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { animate, motion, useInView } from 'framer-motion';

const projectsData = [
  
    {
      id: 1,
      title: "Crackbucks Website",
      description: "Free coffee is a tap away",
      image: "/images/projects/1.png",
      tag: ["All", "Web", "Mobile"],
      gitUrl: "https://github.com/FOLADAVE/Crackbucks",
      previewUrl: "https://foladave.github.io/Crackbucks/",
    },
    {
      id: 2,
      title: "Demeats Webiste",
      description: "Project 2 description",
      image: "/images/projects/2.png",
      tag: ["All", "Web", "Mobile"],
      gitUrl: "https://github.com/FOLADAVE/Edusity-site.git",
      previewUrl: "https://foladave.github.io/Demeats/",
    },
    {
      id: 4,
      title: "Diction Oracle",
      description: "Speech training",
      image: "/images/projects/22.png",
      tag: ["All", "Web", "Mobile"],
      gitUrl: "https://github.com/FOLADAVE/Oma-diction",
      previewUrl: "https://omadiction.pro/",
    },
    {
      id: 4,
      title: "Edusity Website",
      description: "Project 4 description",
      image: "/images/projects/2.png",
      tag: ["All", "Web", "Mobile"],
      gitUrl: "https://github.com/FOLADAVE/Edusity-site.git",
      previewUrl: "/https://foladave.github.io/Edusity-site/",
    },
    {
      id: 5,
      title: "Shopwave E-commerce Website",
      description: "Cart website",
      image: "/images/projects/5.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/FOLADAVE/Shopwave",
      previewUrl: "https://shopwave-neon.vercel.app/",
    },
    {
      id: 6,
      title: "Next.js Todo-list App",
      description: "Todo-list application",
      image: "/images/projects/6.png",
      tag: ["All", "Web"],
      gitUrl: "https://foladave.github.io/Edusity-site/",
      previewUrl: "https://foladave.github.io/Edusity-site/",
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
    <section id='projects'>
<h2 class="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
<div className='text-white flex flex-row justify-center gap-2 py-6'>
<ProjectTag 
 onClick={handleTagChange}
 name="All" 
 isSelected={tag === "All"} 
/>
<ProjectTag 
 onClick={handleTagChange}
 name="Web" 
 isSelected={tag === "Web"} 
/>
<ProjectTag 
 onClick={handleTagChange}
 name="Mobile" 
 isSelected={tag === "Mobile"} 
/>
</div>
      <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project, index) => (
          <motion.li 
          key={index}
          variants={cardVariants} 
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 0.3, delay: index * 0.4}}
           >
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

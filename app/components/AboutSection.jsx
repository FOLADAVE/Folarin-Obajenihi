"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Next.js</li>
                <li>React.js</li>
                <li>Javascript</li>
                <li>Tailwind</li>
                <li>HTML5</li>
                <li>CSS</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>National Open University of Nigeria</li>
                <li>Freecode camp</li>
            </ul>
        ),
    },
   {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>Responsive Web Design Certification</li>
                <li>Legacy Javascript Algorithms and Data Structures Certification</li>
            </ul>
        ),
    },
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

  return (
    <section id='about' className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16'>
            <Image src="/images/pc.jpg" width={500} height={500} />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>
                    I'm a self taught frontend developer and a computer science undergrad. I design interactive, responsive user friendly websites. 
                   I focus on beautiful web interfaces, responsive designs, interactivity,
                   testing, debugging and crafting a unique user experience.
                   My journey is fueled by a relentless pursuit of enhancing my skill. 
                   </p>
                   <div className="flex flex-row justify-start mt-8">
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                        {" "}
                        Skills{" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                        {" "}
                        Education{" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
                        {" "}
                        Certifications{" "}
                    </TabButton>
                   </div>
                   <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection
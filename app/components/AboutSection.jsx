"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2 space-y-3'>
                <li><span className='font-bold'>Frontend</span>:
Next.js 14 (App Router) • React 18 • JavaScript (ES6+) • HTML5 • CSS3</li>
                <li><span className='font-bold'>Styling:</span> 
Tailwind CSS • Responsive Design • Mobile-First Development</li>
                <li><span className='font-bold'>Tools & Workflow:</span> 
Git/GitHub • Vercel Deployment • Performance Optimization</li>
                <li><span className='font-bold'>Currently Learning</span>: Typescript</li>
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
        <Image src="/images/pc.jpg" width={500} height={500} alt="A description of the image"  className='pb-4'/>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>
I&apos;m a frontend developer with 4 years of experience building modern web applications using Next.js, React, and JavaScript.
 I&apos;ve worked with clients to deliver production-ready products, including a food delivery platform and business service websites. 
 I focus on building responsive, fast-loading interfaces with clean, maintainable code, and I&apos;m currently pursuing Computer Science while creating solutions to real-world problems.
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

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
                <li><span className='font-bold'>Styling</span>:
Tailwind CSS • Responsive Design • Mobile-First Development</li>
                <li><span className='font-bold'>Tools & Workflow</span>:
Git/GitHub • Vercel Deployment • Performance Optimization</li>
                <li><span className='font-bold'>API&apos;s & Authentication</span>:
Next Auth • Google Sheet API</li>
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
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-800/20 via-green-400/20 to-green-300/20 blur-2xl rounded-xl"></div>
              
              {/* Image container */}
              <div className="relative rounded-xl overflow-hidden border-2 border-green-400/20 shadow-2xl hover:border-green-400/40 transition-all duration-300 group">
                <Image
                  src="/images/pc.jpg"
                  alt="Developer workspace"
                  width={450}
                  height={300}
                  className="object-cover w-full h-auto"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-semibold text-lg">My Development Setup</p>
                </div>
              </div>

              {/* "Available for Work" Badge */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-0">
                <div className="bg-gradient-to-r from-blue-800 to-green-400 text-white px-6 py-2 rounded-full shadow-lg flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
                  <p className="text-sm font-bold">Available for Work</p>
                </div>
              </div>
            </div>
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

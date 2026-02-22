import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, techStack, isClientProject }) => {
  return (
    <div className="h-full flex flex-col">
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          background: `url(${imgUrl}) center center`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        {/* Client Project Badge */}
        {isClientProject && (
          <div className="absolute top-3 right-3" style={{ zIndex: 9 }}>
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
              CLIENT PROJECT
            </span>
          </div>
        )}

        <div className="overlay absolute inset-0 bg-black opacity-25 group-hover:opacity-50 transition-opacity duration-500 flex items-center justify-center">
          <Link 
            href={gitUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 w-14 mr-2 border-2 rounded-full border-transparent group-hover:border-[#ACB7BE] hover:border-white flex items-center justify-center transition-all duration-500"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] opacity-0 group-hover:opacity-100 transition-all duration-500 hover:text-white hover:scale-110 hover:shadow-lg" />
          </Link>
          <Link 
            href={previewUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 w-14 border-2 rounded-full border-transparent group-hover:border-[#ACB7BE] hover:border-white flex items-center justify-center transition-all duration-500"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] opacity-0 group-hover:opacity-100 transition-all duration-500 hover:text-white hover:scale-110 hover:shadow-lg" />
          </Link>
        </div>
      </div>

      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4 flex-grow flex flex-col">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] mb-4 flex-grow">{description}</p>
        
        {/* Tech Stack */}
        {techStack && techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {techStack.map((tech, index) => (
              <span 
                key={index}
                className="bg-[#2A2A2A] text-[#ADB7BE] px-3 py-1 rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
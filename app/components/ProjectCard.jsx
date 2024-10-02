import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
<div
  className="h-52 md:h-72 rounded-t-xl relative group"
  style={{
    background: `url(${imgUrl}) center center`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    width: "100%", // Ensure the div takes up the full width of its container
  }}
>

<div className="overlay absolute inset-0 bg-black opacity-25 group-hover:opacity-50 transition-opacity duration-500 flex items-center justify-center">
  <Link href={gitUrl} className="h-14 w-14 mr-2 border-2 rounded-full border-transparent group-hover:border-[#ACB7BE] hover:border-white flex items-center justify-center transition-all duration-500">
    <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] opacity-0 group-hover:opacity-100 transition-all duration-500 hover:text-white hover:scale-110 hover:shadow-lg" />
  </Link>
  <Link href={previewUrl} className="h-14 w-14 border-2 rounded-full border-transparent group-hover:border-[#ACB7BE] hover:border-white flex items-center justify-center transition-all duration-500">
    <EyeIcon className="h-10 w-10 text-[#ADB7BE] opacity-0 group-hover:opacity-100 transition-all duration-500 hover:text-white hover:scale-110 hover:shadow-lg" />
  </Link>
</div>




</div>
<div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
  <h5 className="text-xl font-semibold mb-2">{title}</h5>
  <p className="text-[#ADB7BE]">{description}</p>
</div>

    </div>
  );
}

export default ProjectCard;

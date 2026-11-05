import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, techStack, isClientProject }) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-xl hover:shadow-emerald-500/10">
      {/* Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0b1136]">
        <Image
          src={imgUrl}
          alt={`${title} preview`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {isClientProject && (
          <span className="absolute right-3 top-3 rounded-full bg-emerald-500 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-lg">
            Client project
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h4 className="text-lg font-semibold text-white">{title}</h4>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-300">{description}</p>

        {techStack && techStack.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
          <a
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-emerald-400"
          >
            Live site <MdArrowOutward size={15} />
          </a>
          <a
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-4 py-2 text-xs font-semibold text-slate-200 transition-colors hover:border-white/30 hover:text-white"
          >
            <FaGithub size={14} /> Code
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
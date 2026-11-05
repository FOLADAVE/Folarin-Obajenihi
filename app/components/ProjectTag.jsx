import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const styles = isSelected
    ? "border-emerald-500 bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
    : "border-white/15 bg-white/5 text-slate-300 hover:border-white/30 hover:text-white";

  return (
    <button
      className={`${styles} cursor-pointer rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300`}
      onClick={() => onClick(name)}
      aria-pressed={isSelected}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
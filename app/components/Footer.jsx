import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get current year

  return (
    <footer className="footer border z-10 border-t-[#121222] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>Copyright © {currentYear} Folarin</span>
        <p className="text-[#c5cdd3] ">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

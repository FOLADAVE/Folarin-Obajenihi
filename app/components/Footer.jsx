"use client";
import React from "react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdArrowUpward } from "react-icons/md";

const X_URL = "https://x.com/folaz_web";

const navLinks = [
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

const socials = [
  { label: "Email", href: "mailto:folarinobajenihi@gmail.com", Icon: MdEmail, external: false },
  { label: "GitHub", href: "https://github.com/FOLADAVE", Icon: SiGithub, external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/folarin-obajenihi-b49a93384", Icon: FaLinkedin, external: true },
  { label: "X", href: X_URL, Icon: FaXTwitter, external: true },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="z-10 border-t border-white/10 bg-[#010528]/60 text-white backdrop-blur">
      <div className="container mx-auto px-12 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <p className="text-lg font-bold tracking-tight">Folarin Obajenihi</p>
            <p className="mt-1 text-sm font-medium text-emerald-400">Frontend Developer</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Building clean, fast and accessible web experiences with Next.js and React.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Navigate
            </p>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.title}>
                  <a href={l.href} className="text-slate-300 transition-colors hover:text-emerald-400">
                    {l.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Connect
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ label, href, Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/60 hover:text-emerald-400"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <span>© {currentYear} Folarin Obajenihi. All rights reserved.</span>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-slate-400 transition-colors hover:text-emerald-400"
          >
            Back to top <MdArrowUpward size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
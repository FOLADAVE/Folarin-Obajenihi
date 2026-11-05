"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  // Add a stronger background/shadow once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the link of the section currently in view
  useEffect(() => {
    const ids = navLinks.map((l) => l.path.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const linkClass = (path) =>
    `relative text-sm font-medium transition-colors duration-200 ${
      active === path ? "text-white" : "text-slate-400 hover:text-white"
    }`;

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled || navbarOpen
          ? "border-white/10 bg-[#010528]/85 shadow-lg shadow-black/20 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500 text-sm font-extrabold">
            F
          </span>
          <span className="text-lg font-bold tracking-tight">
            Folarin<span className="text-emerald-400">.</span>
          </span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.title}>
                <a href={link.path} className={linkClass(link.path)}>
                  {link.title}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-emerald-400 transition-all duration-300 ${
                      active === link.path ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="rounded-lg bg-emerald-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-colors hover:bg-emerald-400"
          >
            Hire me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setNavbarOpen((o) => !o)}
          aria-label={navbarOpen ? "Close menu" : "Open menu"}
          aria-expanded={navbarOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-slate-200 transition-colors hover:border-white/30 hover:text-white md:hidden"
        >
          {navbarOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {navbarOpen && (
        <div className="border-t border-white/10 px-6 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.title}>
                <a
                  href={link.path}
                  onClick={() => setNavbarOpen(false)}
                  className={`block border-b border-white/5 py-3 text-base font-medium transition-colors ${
                    active === link.path ? "text-emerald-400" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setNavbarOpen(false)}
            className="mt-4 block rounded-lg bg-emerald-500 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-emerald-400"
          >
            Hire me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
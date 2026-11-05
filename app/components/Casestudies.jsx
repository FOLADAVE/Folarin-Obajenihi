"use client";
import React from "react";
import { motion } from "framer-motion";
import { MdArrowOutward, MdCheckCircle } from "react-icons/md";

// Content is drawn from the project descriptions. Add real results/metrics
// (e.g. orders processed, traffic, client feedback) to each `outcome` when you have them.
const studies = [
  {
    client: "The Windmill Pub, Hitchin",
    title: "Food delivery platform",
    summary:
      "A full-featured ordering experience for a UK pub, letting customers browse the menu, manage a cart and track their orders.",
    built: [
      "Menu browsing and cart management",
      "Order tracking for customers",
      "Authentication with NextAuth",
      "Order data handled through the Google Sheets API",
    ],
    stack: ["Next.js", "React", "NextAuth", "Google Sheets API", "Tailwind CSS"],
    link: "https://www.thewindmillpub.co.uk/",
  },
  {
    client: "Diction Oracle",
    title: "Speech training service website",
    summary:
      "A professional, responsive website for a speech and diction training business, with a contact system so prospective students can get in touch easily.",
    built: [
      "Responsive layout across mobile and desktop",
      "Contact and enquiry system",
      "Clear presentation of services and programmes",
      "Fast, SEO-friendly Next.js build",
    ],
    stack: ["Next.js", "React", "Tailwind CSS"],
    link: "https://oma-web-main.vercel.app/",
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-16 text-white">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <p className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
          <span className="h-px w-8 bg-emerald-400" />
          Case studies
          <span className="h-px w-8 bg-emerald-400" />
        </p>
        <h2 className="text-3xl font-bold md:text-4xl">Client work in detail</h2>
        <p className="mt-4 text-slate-300">
          A closer look at what I built for real clients and the tools behind each project.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {studies.map((s, i) => (
          <motion.article
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">{s.client}</p>
            <h3 className="mt-2 text-2xl font-bold">{s.title}</h3>
            <p className="mt-3 leading-relaxed text-slate-300">{s.summary}</p>

            <p className="mb-3 mt-6 text-xs font-semibold uppercase tracking-wider text-slate-400">
              What I built
            </p>
            <ul className="space-y-2.5">
              {s.built.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-slate-200">
                  <MdCheckCircle className="mt-0.5 shrink-0 text-emerald-400" size={18} />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {s.stack.map((t) => (
                <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                  {t}
                </span>
              ))}
            </div>

            <a
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
            >
              Visit live site <MdArrowOutward size={16} />
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
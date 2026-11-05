"use client";
import React, { useState } from "react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdArrowForward, MdCheckCircle, MdErrorOutline } from "react-icons/md";

const X_URL = "https://x.com/folaz_web";

const socials = [
  { label: "Email", href: "mailto:folarinobajenihi@gmail.com", Icon: MdEmail, external: false },
  { label: "GitHub", href: "https://github.com/FOLADAVE", Icon: SiGithub, external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/folarin-obajenihi-b49a93384", Icon: FaLinkedin, external: true },
  { label: "X", href: X_URL, Icon: FaXTwitter, external: true },
];

const lookingFor = [
  "Full-time frontend developer role",
  "Modern stack: Next.js, React, Tailwind",
  "Collaborative, product-focused team",
];

const fieldClass =
  "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-emerald-400/70 focus:bg-white/10 focus:ring-2 focus:ring-emerald-400/20";

const labelClass = "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400";

const FORM_URL = "https://formspree.io/f/xkovvaeb";

const Contact = () => {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(FORM_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 text-white">
      {/* Heading */}
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
          <span className="h-px w-8 bg-emerald-400" />
          Contact
        </p>
        <h2 className="text-3xl font-bold leading-tight md:text-4xl">
          Let&apos;s build something great together
        </h2>
        <p className="mt-4 leading-relaxed text-slate-300">
          I&apos;m currently open to frontend developer roles where I can contribute to
          shipping polished, reliable products. Send a message and I&apos;ll get back to you.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        {/* Left: info */}
        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
              What I&apos;m looking for
            </p>
            <ul className="space-y-3">
              {lookingFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-200">
                  <MdCheckCircle className="mt-0.5 shrink-0 text-emerald-400" size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Email
            </p>
            <a
              href="mailto:folarinobajenihi@gmail.com"
              className="break-all text-sm font-medium text-white transition-colors hover:text-emerald-400"
            >
              folarinobajenihi@gmail.com
            </a>

            <p className="mb-3 mt-6 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Find me online
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ label, href, Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/60 hover:bg-emerald-400/10 hover:text-emerald-400"
                >
                  <Icon size={19} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8 lg:col-span-3">
          <form action={FORM_URL} method="POST" onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required className={fieldClass} />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>Email</label>
                <input type="email" id="email" name="email" placeholder="you@company.com" required className={fieldClass} />
              </div>
            </div>
            <div>
              <label htmlFor="message" className={labelClass}>Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell me about the role or project..."
                required
                className={`${fieldClass} resize-none`}
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-200 hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "sending" ? "Sending..." : "Send message"}
              {status !== "sending" && (
                <MdArrowForward className="transition-transform group-hover:translate-x-1" size={18} />
              )}
            </button>

            <div aria-live="polite">
              {status === "success" && (
                <p className="flex items-center gap-2 rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">
                  <MdCheckCircle size={18} /> Thanks! Your message has been sent. I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300">
                  <MdErrorOutline size={18} /> Something went wrong. Please try again or email me directly.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
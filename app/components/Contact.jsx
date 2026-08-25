import React from 'react';
import './Contact.css';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-col">
        <h3>Let&apos;s connect</h3>

        <p>
          I&apos;m currently available for frontend developer positions where I
          can contribute to building great products.
        </p>

        <div className="pt-2">
          <p>What I&apos;m looking for:</p>

          <div className="space-y-2 mt-2">
            <div>- Full-time frontend developer role</div>
            <div>
              - Opportunity to work with modern tech stack (Next.js, React)
            </div>
            <div>- Collaborative team environment</div>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex flex-row items-center gap-4 mt-6">
          {/* Email */}
          <a
            href="mailto:folarinobajenihi@gmail.com"
            className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
            aria-label="Email"
          >
            <MdEmail size={22} className="text-white" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/FOLADAVE"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
            aria-label="GitHub"
          >
            <SiGithub size={20} className="text-white" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/folarin-obajenihi-b49a93384"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} className="text-white" />
          </a>
        </div>
      </div>

      <div className="contact-col">
        <form
          action="https://formspree.io/f/xkovvaeb"
          method="POST"
        >
          <label htmlFor="name">Name</label>

          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />

          <label htmlFor="email">Email</label>

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />

          <label htmlFor="message">Message</label>

          <textarea
            id="message"
            name="message"
            placeholder="Message"
            required
          />

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 px-5 rounded-lg w-full transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
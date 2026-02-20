import React from 'react';
import './Contact.css';
import Image from "next/image";


const Contact = () => {
  return (

    
    <div className='contact' id='contact'>

        <div className="contact-col">
            <h3>Let&apos;s connect</h3>
            <p>I&apos;m currently available for frontend developer positions where I can contribute to building great products.</p>
            <p className='pt-2'>What I&apos;m looking for:
<div className='space-y-2'>
  <ol>- Full-time frontend developer role</ol>
<ol>- Opportunity to work with modern tech stack (Next.js, React)</ol>
<ol>- Collaborative team environment</ol>
</div>
</p>
            <ul>
            <div className="socials flex flex-row gap-1 mt-3 ml-[-10px]">
  <a href="mailto:folarinobajenihi@gmail.com">
    <Image
      src="/images/assets/email-icon.png"
      alt="email icon"
      width={55}
      height={55}
      className="email hover:scale-110 hover:translate-y-[-2px] transition-transform duration-300"
    />
  </a>
  <a href="https://github.com/FOLADAVE" target="_blank" rel="noopener noreferrer">
    <Image
      src="/images/assets/github-icons.png"
      alt="GitHub icon"
      width={30}
      height={30}
      className="github hover:scale-110 hover:translate-y-[-2px] transition-transform duration-300"
    />
  </a>
</div>




            </ul>
        </div>
        <div className="contact-col">
           <form
  action="https://formspree.io/f/xkovvaeb"
  method="POST"
>
  <label for="name">Name</label>
  <input type="text" id="name" name="name" placeholder="Name" required="" />
  <label for="email">Email</label>
 <input type="email" id="email" name="email" placeholder="Email" required="" />
  <label for="message">Message</label>
  <textarea
    id="message"
    name="message"
    placeholder="Message"
    required=""
  ></textarea>
  <button
    type="submit"
    className="bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
  >
    Send Message
  </button>
</form>
            
        </div>
    </div>
  )
}

export default Contact

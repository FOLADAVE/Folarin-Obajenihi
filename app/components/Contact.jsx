import React from 'react';
import './Contact.css';
import Image from "next/image";


const Contact = () => {
  return (

    
    <div className='contact' id='contact'>

        <div className="contact-col">
            <h3>Let's connect</h3>
            <p>I&apos;m currently looking for new opportunities, my inbox is always open.</p>
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
            <form action='https://submit-form.com/ct0CslQES'>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
                <label>Write your messages here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
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

import React, { useState } from 'react';

import { MdClose } from "@react-icons/all-files/md/MdClose";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaDribbble } from "@react-icons/all-files/fa/FaDribbble";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt";
import { FaRegClipboard } from "@react-icons/all-files/fa/FaRegClipboard";

export default function ContactSection() {
  const [popup, setPopup] = useState(false);
  const [aboutPlus, setAboutPlus] = useState(false);

  const copyToClipboard = (copyURL) => {
    navigator.clipboard.writeText(copyURL);
    setPopup(true);

    setTimeout(() => {setPopup(false)}, 1500);
  }

  return (
      <section className="contact-section" id="contact">
        <h1>Contact</h1>
        <div className="contact-container">
          <div className="about-card">
            <h2>About Me</h2>
            <p>
              I am 3rd Year Student persuing B.Tech in Computer Science from VIT, Chennai. I am an enthusiastic and curious learner always trying new technologies. I come from Bikaner, Rajasthan where I completed my Higher Secondary schooling.<br /><br />
              I am passionate about Video Games and my dream is to work on a AAA Game. I like to create awe-inspiring user-experiences.<br /><br />
              Currently I am working as a freelance frontend developer and am the President at Game Development Club, VITC.
            </p>

            <div 
              className="about-card-plus"
              style={aboutPlus ? {opacity: '1', clipPath: 'circle(50rem at calc(100% - 2.5rem) calc(100% - 2.5rem))'} : null}>
              <h2>Current Setup</h2>
              <p>
                <b>CPU:</b> AMD Ryzen 5 3550H<br />
                <b>GPU:</b> GTX 1650 4GB<br />
                <b>RAM:</b> 16GB 2400Hz<br />
                <b>SSD:</b> 1TB NVME M.2 + 0.25TB<br />
                <b>Display:</b> 120Hz 1080p<br />
                <b>Input:</b> Logitech G102
              </p>

              <h2>Favorite Games</h2>
              <p>
                Red Dead Redumption 2<br />
                God of War 2018<br />
                Minecraft<br />
                Grand Theft Auto V<br />
                Tom Clancy's Splinter Cell 2002
              </p>
            </div>

            <div 
              className="about-plus-btn" 
              onClick={() => setAboutPlus(!aboutPlus)}
              style={aboutPlus ? {transform: 'none'} : null}>
                <MdClose />
            </div>
          </div>

          <div className="contact-card-container">
            <a href="mailto:rishi.mungia@gmail.com" className="contact-card"><FaEnvelope /></a>
            <a href="https://github.com/rishimungia" className="contact-card"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/rishi-mungia/" className="contact-card"><FaLinkedin /></a>
            <a href="https://dribbble.com/PIXELBIT_r" className="contact-card"><FaDribbble /></a>
            <a href="https://twitter.com/RishiMungia" className="contact-card"><FaTwitter /></a>
            <a onClick={() => copyToClipboard('+91 88245 40615')} className="contact-card"><FaPhoneAlt /></a>
          </div>
        </div>

        <div className="clipboard-popup" style={popup ? {transform: 'translate(-50%, 0rem)'} : null}>
          <FaRegClipboard />
          Copied to Clipboard
        </div>
      </section>
  );
}

import React, { useState } from 'react';

import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaDribbble } from "@react-icons/all-files/fa/FaDribbble";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt";
import { FaRegClipboard } from "@react-icons/all-files/fa/FaRegClipboard";

export default function ContactSection() {
  const copyToClipboard = (copyURL) => {
    navigator.clipboard.writeText(copyURL);
    setPopup(true);

    setTimeout(() => {setPopup(false)}, 1500);
  }

  const [popup, setPopup] = useState(false);

  return (
      <section className="contact-section" id="contact">
        <h1>Contact</h1>
        <div className="contact-container">
          <div className="about-card">
            <h2>About Me</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eligendi perspiciatis, totam a ullam quaerat tempore aliquid quo vitae veritatis magni veniam aperiam deleniti minima quisquam voluptatum voluptatem ex ea. Eius doloribus eaque facere, et exercitationem laboriosam ipsam incidunt expedita at, necessitatibus fuga consequatur sunt dolorum quibusdam! Animi, qui quam.</p>
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

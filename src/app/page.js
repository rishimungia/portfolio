"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import styles from "./page.module.scss";

import GradientText from "@/components/GradientText/GradientText";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import FlipCard from "@/components/FlipCard/FlipCard";
import Footer from "@/components/Footer/Footer";

import profile from '../../public/images/profile.jpg';
import techStack from '../../public/images/tech-stack.png';
import creativeApps from '../../public/images/creative-apps.png';

import projectsData from "@/utils/projectData";

import { MdClose } from 'react-icons/md';
import { FaEnvelope, FaGithub, FaLinkedin, FaDribbble, FaTwitter, FaPhoneAlt, FaRegClipboard } from 'react-icons/fa';
import ProjectScreen from "@/components/ProjectScreen/ProjectScreen";

export default function Home() {
  const [popup, setPopup] = useState(false);
  const [aboutPlus, setAboutPlus] = useState(false);
  const [projectScreen, setProjectScreen] = useState({id: -1, isOpen: false});

  const copyToClipboard = (copyURL) => {
    navigator.clipboard.writeText(copyURL);
    setPopup(true);

    setTimeout(() => {setPopup(false)}, 1500);
  }

  return (
    <main className={styles.main}>
      {/* Intro Section */}
      <section className={styles.introSection} id={styles.home}>
          <div>
            <div className={styles.profileGlow}></div>
            <div className={styles.profileContainer}>
              <Image src={profile} alt="Rishi Mungia" />
            </div>
          </div>
          <div className={styles.introText} data-aos="fade-up" data-aos-delay="1000">
            <h1>Rishi Mungia</h1>
            <p>
              Web developer, Game designer and UI/UX enthusiast who loves to
              create breathtaking experiences
            </p>
          </div>
      </section>

      {/* Gradient Section */}
      <section className={styles.gradientSection}>
        <GradientText text={'Web | Gaming | Design'} />
      </section>

      {/* Toolkit Section */}
      <section className={styles.toolkitSection} id="toolkit">
          <h1>My Toolkit</h1>
          <div className={styles.toolkitGrid}>  
              <FlipCard
                primaryContent={
                  <div className={styles.techApps}>
                    <Image src={techStack} />
                    <p>Adaptive Tech Stack</p>
                  </div>
                }
              />
              <FlipCard 
                primaryContent={
                  <div className={styles.creativeApps}>
                    <Image src={creativeApps} />
                  </div>
                }
              />
              
          </div>
      </section>

      {/* Project Section */}
      <section className={styles.projectSection} id="projects">
        <h1>Projects</h1>
        <div className={styles.projectGrid}>
          {projectsData.map((project, i) => (
            <ProjectCard 
                image={project.cardImage}
                title={project.title}
                description={project.description}
                tech={project.tech}
                openProject={() => setProjectScreen({id: i, isOpen: true})}
                key={i}
            />
          ))}
        </div>
      </section> 
      <ProjectScreen projectScreen={projectScreen} setProjectScreen={setProjectScreen} />
      
      {/* Contact Section */}
      <section className={styles.contactSection} id="contact">
        <h1>Contact</h1>
        <div className={styles.contactContainer}>
          <div className={styles.aboutCard}>
              <h2>About Me</h2>
            <div className={styles.content}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique non adipisci cupiditate voluptas facere, corporis expedita et sint ratione, minus est eius porro officia assumenda voluptatibus, asperiores sunt eos accusantium.<br /><br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, mollitia.
              </p>
            </div>

            <div 
              className={styles.aboutCardPlus}
              style={aboutPlus ? {opacity: '1', clipPath: 'circle(50rem at calc(100% - 2.5rem) calc(100% - 2.5rem))'} : null}>
              <h2>Current Setup</h2>
              <p>
                <b>CPU:</b> AMD Ryzen 5 3550H<br />
                <b>GPU:</b> GTX 1650 4GB<br />
                <b>RAM:</b> 16GB 2400Hz<br />
                <b>SSD:</b> 256GB NVME + 1TB<br />
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
              className={styles.aboutPlusBtn} 
              onClick={() => setAboutPlus(!aboutPlus)}
              style={aboutPlus ? {transform: 'none'} : null}>
                <MdClose />
            </div>
          </div>

          <div className={styles.contactCardContainer}>
            <a href="mailto:rishi.mungia@gmail.com" className={styles.contactCard}><FaEnvelope /></a>
            <a href="https://github.com/rishimungia" className={styles.contactCard}><FaGithub /></a>
            <a href="https://www.linkedin.com/in/rishi-mungia/" className={styles.contactCard}><FaLinkedin /></a>
            <a href="https://dribbble.com/PIXELBIT_r" className={styles.contactCard}><FaDribbble /></a>
            <a href="https://twitter.com/RishiMungia" className={styles.contactCard}><FaTwitter /></a>
            <a onClick={() => copyToClipboard('+91 88245 40615')} className={styles.contactCard}><FaPhoneAlt /></a>
          </div>
        </div>

        <div className={styles.clipboardPopup} style={popup ? {transform: 'translate(-50%, 0rem)'} : null}>
          <FaRegClipboard />
          Copied to Clipboard
        </div>
      </section>

      <Footer />
    </main>
  );
}

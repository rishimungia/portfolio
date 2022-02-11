import React, { useState, useEffect } from "react"

import '../index.css';
import '../styles.scss';

import useCheckScreen from '../hooks/useCheckScreen';

import Navbar from "../components/Navbar";
import Cursor from "../components/Cursor";
import FloatingButton from '../components/FloatingButton';
import FloatingMenu from '../components/FloatingMenu';

import IntroSection from "../components/IntroSection";
import GradientTitle from "../components/GradientTitle";
import ToolkitSection from '../components/ToolkitSection';
import ProjectSection from '../components/ProjectSection';
import ProjectScreen from '../components/ProjectScreen';
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

import AOS from 'aos';
import 'aos/dist/aos.css';

const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(null);
  const [cursorHover, setCursorHover] = useState(false);
  const [projectScreen, setProjectScreen] = useState({id: -1, isOpen: false});
  const [isMobile, checkScreen] = useCheckScreen();

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-out',
      once: true
    });

    let darkMode = JSON.parse(localStorage.getItem("DARK_MODE"));
    if (darkMode == null) {
      darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    localStorage.setItem("DARK_MODE", darkMode);
    setIsDark(darkMode);

    checkScreen();
  }, []);

  useEffect(() => {
    localStorage.setItem("DARK_MODE", isDark);
  }, [isDark]);

  return (
    <>
    <title>Rishi Mungia</title>
    <main data-theme={isDark ? "dark" : "light"} data-scroll={projectScreen.isOpen ? "hidden" : null}>
      <IntroSection />
      <GradientTitle text={isMobile ? <>Web<br/>Gaming<br/>Design</> : 'Web | Gaming | Design'} />
      <ToolkitSection />
      <ProjectSection setProjectScreen={setProjectScreen}/>
      <ContactSection />
      <Footer />
      <FloatingMenu isOpen={isOpen} setIsOpen={setIsOpen} isDark={isDark} setIsDark={setIsDark} />
      <FloatingButton isOpen={isOpen} setIsOpen={setIsOpen} />
      <Navbar isMobile={isMobile} setCursorHover={setCursorHover} />
      <ProjectScreen projectScreen={projectScreen} setProjectScreen={setProjectScreen} />
      {!isMobile && <Cursor cursorHover={cursorHover} />}
    </main>
    </>
  );
}

export default IndexPage

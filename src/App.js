import { useState, useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles.scss';

import useCheckScreen from './hooks/useCheckScreen';

import Cursor from "./components/Cursor";
import GradientTitle from "./components/GradientTitle";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import MyToolkit from './components/MyToolkit';
import FloatingButton from './components/FloatingButton';
import FloatingMenu from './components/FloatingMenu';
import Projects from './components/Projects';
import ProjectScreen from './components/ProjectScreen';

AOS.init({
  duration: 500,
  easing: 'ease-out',
  once: true
});

function App() {
  let darkMode = JSON.parse(localStorage.getItem("DARK_MODE"));
  if (darkMode == null) {
    darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(darkMode);
  const [isHovering, setIsHovering] = useState(false);
  const [projectScreen, setProjectScreen] = useState({id: -1, isOpen: false});

  const isMobile = useCheckScreen();

  useEffect(() => {
    localStorage.setItem("DARK_MODE", isDark);
  }, [isDark]);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"} data-scroll={projectScreen.isOpen ? "hidden" : null}>
      <Home />
      <GradientTitle text={isMobile ? <>Web<br/>Gaming<br/>Design</> : 'Web | Gaming | Design'} />
      <MyToolkit />
      <Projects isHovering={isHovering} setIsHovering={setIsHovering} setProjectScreen={setProjectScreen}/>
      <FloatingMenu isOpen={isOpen} setIsOpen={setIsOpen} isDark={isDark} setIsDark={setIsDark} />
      <FloatingButton isOpen={isOpen} setIsOpen={setIsOpen} />
      <Navbar isHovering={isHovering} setIsHovering={setIsHovering} />
      <ProjectScreen projectScreen={projectScreen} setProjectScreen={setProjectScreen} />
      {!isMobile && <Cursor isHovering={isHovering} />}
    </div>
  );
}

export default App;
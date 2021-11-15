import { MdClose, MdHomeFilled } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';

const FloatingMenu = ({ isOpen, setIsOpen, isDark, setIsDark }) => {
    const visible = {transform: 'translateY(0) scale(1)', opacity: '1', zIndex: '1'};

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      };

    return ( 
        <div className="menu-container" style={isOpen ? visible : null}>

            <div className="menu-item" ><p>Contact</p></div>
            <div className="menu-item" onClick={() => setIsDark(!isDark)}>
                <p>Light</p>
                <p>Dark</p>
                <div className="theme-switch" style={isDark ? {transform: 'translateX(100%)'} : null}></div>
            </div>
            <div className="menu-item icon" onClick={() => setIsOpen(false)}><MdClose /></div>
            <div className="menu-item icon" onClick={scrollToTop}><MdHomeFilled /></div>
            <a href="https://github.com/rishimungia"><div className="menu-item icon"><AiFillGithub /></div></a>
        </div>
    );
}
 
export default FloatingMenu;
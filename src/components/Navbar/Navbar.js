"use client";
import { useState, useRef } from 'react';

import styles from './Navbar.module.scss';

import { useCursor } from '@/utils/CursorProvider';

export default function Navbar () {
    const isMobile = false;

    return (
        <nav className={styles.navbar}>
            <a className={styles.navLogo} href="#home">RM</a>
            
            <div className={styles.navLinks}>
            {!isMobile ? <> 
                <HoverButton
                    text={"Tools"}
                    link={"#toolkit"}
                /> 
                <HoverButton 
                    text={"Projects"}
                    link={"#projects"}
                /> 
                <HoverButton 
                    text={"Contact"}
                    link={"#contact"}
                />
                </>
                : <HoverButton
                    text={"Contact"}
                    link={"#contact"}
                />
            }
            </div>
        </nav>
    )
}

function HoverButton ({ text, link }) {
    const [isHovering, setIsHovering] = useState(false);

    const { position, setIsHovering: setCursorHover  } = useCursor();
    let relativeX, relativeY;

    const inputRef = useRef();
    
    if (inputRef.current) {
        relativeX = position.x - inputRef.current.getBoundingClientRect().x;
        relativeY = position.y - inputRef.current.getBoundingClientRect().y;
    } 

    return (
        <a 
            href={link} 
            className={styles.hoverBtn}
            onMouseEnter={() => {setIsHovering(true); setCursorHover(true);}}
            onMouseLeave={() => {setIsHovering(false); setCursorHover(false);}} 
            ref={inputRef}
        > 
            <div 
                className={styles.hoverBtnEffect}
                style={isHovering ? {transform: `translate(${relativeX/5}px, ${relativeY/5}px)`, opacity: '1'} : null}>
            </div>
            <p style={isHovering ? {transform: `translate(${relativeX/15}px, ${relativeY/15}px)`} : null}>{text}</p>
        </a>
    );
   
}
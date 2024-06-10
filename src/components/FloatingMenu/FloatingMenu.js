"use client";
import { useState } from 'react';

import styles from './FloatingeMenu.module.scss';

import { MdClose, MdHome, MdSettings } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';

import { useTheme } from '@/utils/ThemeProvider';

export default function FloatingMenu () {
    const { isDark, toggleDarkTheme } = useTheme();

    const [isOpen, setIsOpen] = useState(false);

    const visible = {transform: 'translateY(0) scale(1)', opacity: '1', zIndex: '1'};

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
    };

    return (
        <div 
            className={styles.menuContainer} 
            id={isOpen ? null : styles.openBtn}
            onClick={() => {if (!isOpen) setIsOpen(true)}}
        >
            <MdSettings style={isOpen ? {display: 'none'} : null} />
            
            <div className={styles.menuContent} style={isOpen ? visible : null}>
                <a href="mailto:rishi.mungia@gmail" style={{display: 'contents'}}>
                    <div className={styles.menuItem}><p>Contact</p></div>
                </a>
                <div className={styles.menuItem} onClick={() => toggleDarkTheme(!isDark)}>
                    <p>Light</p>
                    <p>Dark</p>
                    <div className={styles.themeSwitch} style={isDark ? {transform: 'translateX(100%)'} : null}></div>
                </div>
                <div className={styles.menuItemIcon} onClick={() => setIsOpen(false)}><MdClose /></div>
                <div className={styles.menuItemIcon} onClick={scrollToTop}><MdHome /></div>
                <a href="https://github.com/rishimungia"><div className={styles.menuItemIcon}><AiFillGithub /></div></a>
            </div>
        </div>
    )
}
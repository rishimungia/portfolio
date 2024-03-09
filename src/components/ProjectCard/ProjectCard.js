import { useEffect, useRef, useState } from 'react';

import styles from './ProjectCard.module.scss';

import { useCursor } from '@/utils/CursorProvider';

export default function ProjectCard ({ image, title, description, tech, openProject }) {
    const { position, isDown, setIsHovering } = useCursor();

    let relativeX, relativeY;

    const cardRef = useRef(null);
    
    if (cardRef.current) {
        relativeX = position.x - cardRef.current.getBoundingClientRect().x;
        relativeY = position.y - cardRef.current.getBoundingClientRect().y;
    } 

    return ( 
        <div 
            className={styles.projectCard}
            onClick={openProject}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)} 
            ref={cardRef}
        >
            <div className={styles.bgImage} style={{backgroundImage: `url(`+ image +`)`}}></div>
            <div className={styles.cursorSpot} style={{transform: `translate(calc(${relativeX}px - 50%), calc(${relativeY}px - 50%))`}}></div>
            <div className={styles.image} style={{backgroundImage: `url(`+ image +`)`}}></div>
            
            <div className={styles.info}>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className={styles.techContainer}>
                    {tech?.map((item) => (
                        <div className={styles.techChip}>{item}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}
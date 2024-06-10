"use client"
import styles from './Cursor.module.scss';

import { useCursor } from '@/utils/CursorProvider';

export default function Cursor () {
    const { position, isDown, isHovering: cursorHover } = useCursor();

    var cursorStyle = {transform: `translate(calc(${position.x}px - 10px), calc(${position.y}px - 10px))`};

    if (cursorHover && !isDown) {
        cursorStyle = {
            transform: `translate(calc(${position.x}px - 10px), calc(${position.y}px - 10px))`, 
            filter: 'blur(15px)',
            background: 'hsla(0, 0%, 100%, 0.1)'
        }
    } else if (cursorHover && isDown) {
        cursorStyle = {
            transform: `translate(calc(${position.x}px - 10px), calc(${position.y}px - 10px)) scale(0.5)`, 
            background: 'hsla(0, 0%, 100%, 0.15)', 
            filter: 'blur(5px)'
        };
    } else if (!cursorHover && isDown) {
        cursorStyle = {
            transform: `translate(calc(${position.x}px - 10px), calc(${position.y}px - 10px)) scale(0.95)`,
            background: 'hsla(0, 0%, 60%, 0.8)'
        };
    }

    return (
        <div className={styles.cursor} style={cursorStyle}></div>
    )
}
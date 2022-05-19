import React from "react"

import useMousePosition from '../hooks/useMousePosition'

const Cursor = ({ cursorHover }) => {
    const { x, y, down } = useMousePosition();

    var cursorStyle = {transform: `translate(calc(${x}px - 10px), calc(${y}px - 10px))`};

    if (cursorHover && !down) {
        cursorStyle = {
            transform: `translate(calc(${x}px - 10px), calc(${y}px - 10px))`, 
            filter: 'blur(15px)',
            background: 'hsla(0, 0%, 100%, 0.1)'
        }
    } else if (cursorHover && down) {
        cursorStyle = {
            transform: `translate(calc(${x}px - 10px), calc(${y}px - 10px)) scale(0.5)`, 
            background: 'hsla(0, 0%, 100%, 0.15)', 
            filter: 'blur(5px)'
        };
    } else if (!cursorHover && down) {
        cursorStyle = {
            transform: `translate(calc(${x}px - 10px), calc(${y}px - 10px)) scale(0.95)`,
            background: 'hsla(0, 0%, 60%, 0.8)'
        };
    }

    return (
        <div 
            className="cursor" 
            style={cursorStyle}
        >
        </div>
     );
}
 
export default Cursor;
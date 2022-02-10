import React from "react"

import useMousePosition from '../hooks/useMousePosition'

const Cursor = ({ cursorHover }) => {
    const { x, y, down } = useMousePosition();

    var cursorStyle = {left: `calc(${x}px - 10px)`, top: `calc(${y}px - 10px)`};

    if (cursorHover && !down) {
        cursorStyle = {
            left: `calc(${x}px - 10px)`, 
            top: `calc(${y}px - 10px)`, 
            filter: 'blur(10px)',
            background: 'hsla(0, 0%, 100%, 0.05)'
        }
    } else if (cursorHover && down) {
        cursorStyle = {
            left: `calc(${x}px - 10px)`, 
            top: `calc(${y}px - 10px)`, 
            background: 'hsla(0, 0%, 100%, 0.2)', 
            filter: 'blur(10px)'
        };
    } else if (!cursorHover && down) {
        cursorStyle = {
            left: `calc(${x}px - 10px)`, 
            top: `calc(${y}px - 10px)`, 
            background: 'hsla(0, 0%, 60%, 0.8)', 
            transform: 'scale(0.95)'
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
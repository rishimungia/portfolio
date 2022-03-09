import React, { useRef, useState } from "react"

import useMousePosition from '../hooks/useMousePosition';

const HoverButton = ({ setCursorHover, text, link }) => {
    const [isHovering, setIsHovering] = useState(false);

    const { x, y } = useMousePosition();
    let relativeX, relativeY;

    const inputRef = useRef();
    
    if (inputRef.current) {
        relativeX = x - inputRef.current.getBoundingClientRect().x;
        relativeY = y - inputRef.current.getBoundingClientRect().y;
    } 

    return (
        <a 
            href={link} 
            className="hover-button"
            onMouseEnter={() => {setIsHovering(true); setCursorHover(true);}}
            onMouseLeave={() => {setIsHovering(false); setCursorHover(false);}} 
            ref={inputRef}
        > 
            <div 
                className="hover-btn-effect"
                style={isHovering ? {transform: `translate(${relativeX/10}px, ${relativeY/5}px)`, opacity: '1'} : null}>
            </div>
            <p style={isHovering ? {transform: `translate(${relativeX/20}px, ${relativeY/15}px)`} : null}>{text}</p>
        </a>
    );
   
}
 
export default HoverButton;
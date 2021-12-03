import useMousePosition from '../hooks/useMousePosition';
import { useRef } from 'react';

const HoverButton = ({ setIsHovering, text, link }) => {
    const { x, y } = useMousePosition();
    let relativeX, relativeY;

    const inputRef = useRef();
    
    if (inputRef.current) {
        relativeX = x - inputRef.current.getBoundingClientRect().x;
        relativeY = y - inputRef.current.getBoundingClientRect().y;
    } 

    return (
        <a href={link} style={{textDecoration: 'none', color: 'var(--text-color)'}}> 
            <div 
                className="hover-button"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)} 
                ref={inputRef}
            >
                {text}
                <div 
                    className="hover-btn-effect"
                    style={{transform: `translate(${relativeX/10}px, ${relativeY/5}px)`}}>
                </div>
            </div>
        </a>
    );
   
}
 
export default HoverButton;
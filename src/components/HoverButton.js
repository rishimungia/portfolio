const HoverButton = ({ setIsHovering, text }) => {
    return ( 
        <div 
            className="hover-button"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)} 
        >
            {text}
        </div>
    );
}
 
export default HoverButton;
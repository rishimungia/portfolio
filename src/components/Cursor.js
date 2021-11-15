import useMousePosition from '../hooks/useMousePosition';

const Cursor = ({ isHovering }) => {
    const { x, y, down } = useMousePosition();

    var cursorStyle = {left: `calc(${x}px - 10px)`, top: `calc(${y}px - 10px)`};

    if (isHovering && !down) {
        cursorStyle = {
            left: `calc(${x}px - 10px)`, 
            top: `calc(${y}px - 10px)`, 
            filter: 'blur(15px)',
            background: 'hsla(0, 0%, 100%, 0.2)'
        }
    } else if (isHovering && down) {
        cursorStyle = {
            left: `calc(${x}px - 10px)`, 
            top: `calc(${y}px - 10px)`, 
            background: 'hsla(0, 0%, 100%, 0.4)', 
            filter: 'blur(10px)'
        };
    } else if (!isHovering && down) {
        cursorStyle = {
            left: `calc(${x}px - 10px)`, 
            top: `calc(${y}px - 10px)`, 
            background: 'hsla(0, 0%, 40%, 0.5)', 
            transform: 'scale(0.9)'
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
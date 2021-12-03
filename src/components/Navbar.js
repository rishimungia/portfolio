import HoverButton from './HoverButton';

const Navbar = ({ setIsHovering }) => {
    return ( 
        <div className="navbar">
            <p className='nav-logo'>RM</p>
            <div className="nav-links">
                <HoverButton
                    setIsHovering={setIsHovering} 
                    text={"Tools"}
                    link={"#toolkit"}
                /> 
                <HoverButton
                    setIsHovering={setIsHovering} 
                    text={"Projects"}
                    link={"#projects"}
                /> 
                <HoverButton
                    setIsHovering={setIsHovering} 
                    text={"Work in Progress"}
                    link={"#home"}
                /> 
            </div>
            
        </div>
     );
}
 
export default Navbar;
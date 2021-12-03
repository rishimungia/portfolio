import HoverButton from './HoverButton';

const Navbar = ({ isMobile, setIsHovering }) => {
    return ( 
        <div className="navbar">
            <p className='nav-logo'>RM</p>
            
            <div className="nav-links">
            {!isMobile ? <> 
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
                </>
                :<HoverButton
                    setIsHovering={setIsHovering} 
                    text={"Work in Progress"}
                    link={"#home"}
                />
            }
            </div>
        </div>
     );
}
 
export default Navbar;
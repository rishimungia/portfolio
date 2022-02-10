import React from "react"

import HoverButton from './HoverButton';

const Navbar = ({ isMobile, setCursorHover }) => {
    return ( 
        <div className="navbar">
            <a 
                className='nav-logo'
                href="#home"
            >RM</a>
            
            <div className="nav-links">
            {!isMobile ? <> 
                <HoverButton
                    setCursorHover={setCursorHover} 
                    text={"Tools"}
                    link={"#toolkit"}
                /> 
                <HoverButton
                    setCursorHover={setCursorHover} 
                    text={"Projects"}
                    link={"#projects"}
                /> 
                <HoverButton
                    setCursorHover={setCursorHover} 
                    text={"Contact"}
                    link={"#contact"}
                />
                </>
                :<HoverButton
                    setCursorHover={setCursorHover} 
                    text={"Contact"}
                    link={"#contact"}
                />
            }
            </div>
        </div>
     );
}
 
export default Navbar;
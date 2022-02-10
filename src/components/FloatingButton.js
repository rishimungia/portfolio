import React from "react"

import { MdSettings } from '@react-icons/all-files/md/MdSettings';

const FloatingButton = ({ isOpen, setIsOpen }) => {
    return (
        <> 
        <div 
            className="floating-button"
            onClick={() => setIsOpen(!isOpen)}
            style={isOpen ? {pointerEvents: 'none', width: '215px', height: '215px', borderRadius: '20px'} : null}
            // height = 50*(No of Rows) + 15*(No of Rows + 1)
        >
            <MdSettings style={isOpen ? {opacity: '0'} : null}/>
        </div>
        <div className="floating-btn-popup">
            Change Theme
        </div>
        </>    
    );
}
 
export default FloatingButton;
import HoverButton from './HoverButton';
import { FiAlertCircle } from 'react-icons/fi';

const Navbar = ({ isHovering, setIsHovering }) => {
    return ( 
        <div className="navbar">
            <p className='nav-logo'>RM</p>
            <div className="nav-links">
                <HoverButton setIsHovering={setIsHovering} text={<><FiAlertCircle style={{height: '1rem', margin: '-2px 0', color: 'red'}}/> Work in Progress</>}/> 
            </div>
            
        </div>
     );
}
 
export default Navbar;
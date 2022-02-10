import {useState} from "react";

const useCheckScreen = () => {
    const [isMobile, setIsMobile] = useState(false);

    const checkScreen = () => {
        if(window.innerWidth <= 768) {
            setIsMobile(true);
        }
        else {
            setIsMobile(false);
        }
    }

    return [isMobile, checkScreen]
}

export default useCheckScreen
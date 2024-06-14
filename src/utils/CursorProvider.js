"use client";

import { usePathname } from "next/navigation";

import { createContext, useContext, useState, useEffect } from "react";

const CursorContext = createContext();

export function CursorProvider ({ children }) {
    const path = usePathname();
    
    const [position, setPosition] = useState({x: null, y: null});
    const [isDown, setIsDown] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const mouseMoveHandler = (e) => {
          const { clientX, clientY, buttons } = e;
    
          setPosition({ x: clientX, y: clientY });
    
          if (buttons > 0) 
            setIsDown(true);
          else
            setIsDown(false);
        };
        document.addEventListener("mousemove", mouseMoveHandler);
    
        const mouseDownHandler = (e) => {
          const { type } = e;
    
          if (type === "mousedown") 
            setIsDown(true);
          else
            setIsDown(false);
        }
        document.addEventListener("mouseup", mouseDownHandler);
        document.addEventListener("mousedown", mouseDownHandler);
        
        return () => {
          document.removeEventListener("mousemove", mouseMoveHandler);
          document.removeEventListener("mousedown", mouseDownHandler);
          document.removeEventListener("mouseup", mouseDownHandler);
        };
    }, []);

    useEffect(() => {
      setIsHovering(false);
    }, [path])

    return (
        <CursorContext.Provider value={{position, isDown, isHovering, setIsHovering}}>
            {children}
        </CursorContext.Provider>
    )
}

export function useCursor () {
    return useContext(CursorContext);
}
import { useEffect, useState } from "react";

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null, down: false });

  useEffect(() => {
    const mouseMoveHandler = (e) => {
      const { clientX, clientY, buttons } = e;

      setMousePosition({ x: clientX, y: clientY });

      if (buttons > 0) 
        setMousePosition({ down: true });
      else
        setMousePosition({ down: false });
    };
    document.addEventListener("mousemove", mouseMoveHandler);

    const mouseDownHandler = (e) => {
      const { type } = e;

      if (type === "mousedown") 
        setMousePosition({ down: true });
      else
        setMousePosition({ down: false });
    }
    document.addEventListener("mouseup", mouseDownHandler);
    document.addEventListener("mousedown", mouseDownHandler);
    
    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mousedown", mouseDownHandler);
      document.removeEventListener("mouseup", mouseDownHandler);
    };
  }, []);

  return mousePosition;
}
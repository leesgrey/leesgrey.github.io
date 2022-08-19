import { useEffect, useState } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ left: 0, top: 0 });
  useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setMousePosition({ left: clientX, top: clientY });
    };
    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return mousePosition;
};

export default useMousePosition;
import { useEffect, useState } from "react";

export default function useWindow() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  function resize(e) {
    setWidth(e.target.innerWidth);
    setHeight(e.target.innerHeight);
  }
  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return [width, height];
}

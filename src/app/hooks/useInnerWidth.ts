import { useState, useEffect } from "react";

export default function useInnerWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const resize = (fun: Function) => () => {
      fun(window.innerWidth);
    };
    window.addEventListener("resize", resize(setWidth));

    return () => {
      window.removeEventListener("resize", resize(setWidth));
    };
  }, [setWidth]);

  return width;
}

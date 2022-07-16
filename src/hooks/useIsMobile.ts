import { useState, useEffect } from "react";
import throttle from "lodash.throttle";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", throttle(handleResize, 1000));
    return window.addEventListener("resize", () => handleResize());
  }, []);

  function handleResize() {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }

  return isMobile;
};

export default useIsMobile;

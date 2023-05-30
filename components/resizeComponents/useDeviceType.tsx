import { useEffect, useState } from "react";

export function useDeviceType() {
  const [deviceType, setDeviceType] = useState('');

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 480) {
        setDeviceType('phone');
      } else if (window.innerWidth < 768) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return deviceType;
}

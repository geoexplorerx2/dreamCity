"use client"
import { useEffect, useState } from "react";

const useIsMobile = () => {
    const [width, setWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);
  
    useEffect(() => {
        function handleWindowSizeChange() {
            setWidth(window.innerWidth);
        }

        // To avoid errors while server side rendering, where window object is not available
        if(typeof window !== 'undefined'){
            window.addEventListener('resize', handleWindowSizeChange);
            return () => {
                window.removeEventListener('resize', handleWindowSizeChange);
            }
        }
    }, []);
  
    return width <= 768;
}

export default useIsMobile

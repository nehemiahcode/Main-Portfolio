import React from "react"; 
import { useState, useEffect } from "react";
import {BsFillArrowUpCircleFill} from "react-icons/bs"

 
 function ScrollToTop() {
    const [visibleButton, setVisibleButton] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", handleScrollTop);
      return () => {
        window.removeEventListener("scroll", handleScrollTop);
      };
    }, []);
  
    const handleScrollTop = () => {
      const scrollToTop = window.pageYOffset;
      const scrollThresholdButton = 300;
      setVisibleButton(scrollToTop <= scrollThresholdButton);
    };
    const ScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    return (
      <button

        onClick={ScrollToTop}
        className={`h-[50px] w-[50px] ${
          visibleButton ? "hidden" :"block"
        } z-[999999]  p-1  flex justify-center items-center active:hover:scale-110 rounded-full bg-blue-700  dark:bg-purple-700  text-white  text-3xl  fixed bottom-[40px] right-[20px]`}
      >
 
      <BsFillArrowUpCircleFill/>
    </button>
    );
  }
  export default ScrollToTop;
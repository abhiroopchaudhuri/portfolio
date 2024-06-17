import React from 'react'
import {motion, useScroll, useTransform, useInView, useAnimation} from 'framer-motion';
import AnimatedText from "./AnimatedText";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import Button from './mini-components/Button';

const Navbar = () => {

    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // If scrolling down and past a threshold (100px), hide the navbar
        setIsNavbarVisible(false);
      } else {
        // If scrolling up, show the navbar
        setIsNavbarVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);


  return (
    <nav
        className={`text-white fixed z-10 top-0 left-0 w-full h-20 md:px-6 px-4 flex justify-between items-center bg-black bg-opacity-[70%] backdrop-blur-[20px] p-4 transition-transform duration-300 border-b-[1px] border-[#191919] ${
          isNavbarVisible
            ? "transform translate-y-0"
            : "transform -translate-y-full"
        }`}
      >
        <div className="flex flex-row items-center gap-2 select-none cursor-pointer" 
        onClick={() => navigate("/")}>
        <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, type: "ease" }}
        src="https://media.licdn.com/dms/image/C5603AQGjSQKnOggcbw/profile-displayphoto-shrink_200_200/0/1626529279533?e=2147483647&v=beta&t=FUrXFXEb6Bi4siCy9DbfbCCqvGgH-lMn1gIEPH2bKXI" alt="logo" className="md:w-10 md:h-10 w-8 h-8 rounded-full"/>
        <div className="flex flex-col justify-center items-start space-y-1 ">
        <AnimatedText text="ABHIROOP" className="text-sm md:text-md font-light leading-none space-x-1" />
        <AnimatedText text="CHAUDHURI" className="text-sm md:text-md font-light leading-none space-x-1" />
        </div>
        </div>
        <div>
        <a href="https://www.linkedin.com/in/abhiroopchaudhuri" target="_blank" rel="noopener noreferrer">
          <Button icon='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" fill="#ffffff" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>' className=" bg-[#0a66c2] text-black hover:bg-opacity-[70%] active:bg-opacity-[40%] transition-all duration-300 text-white">LinkedIn</Button>
        </a>
        </div>
      </nav>
  )
}

export default Navbar
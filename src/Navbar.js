import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import AnimatedText from "./AnimatedText"; // Assuming this component exists
import Button from './mini-components/Button'; // Assuming this component exists and accepts children for text
import { useNavigate } from 'react-router-dom';

// Hamburger Icon Component (you can replace this with an SVG library if you prefer)
const HamburgerIcon = ({ onClick, isOpen }) => (
  <button
    onClick={onClick}
    className={`flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-50 relative focus:outline-none lg:hidden ${isOpen ? "" : ""} `} // Show only on smaller screens (adjust breakpoint if needed)
    aria-label={isOpen ? "Close menu" : "Open menu"}
    aria-expanded={isOpen}
  >
    <motion.span
      className={`block w-6 h-0.5 bg-white rounded-full ${isOpen ? "" : ""}`}
      animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    />
    <motion.span
      className={`block w-6 h-0.5 bg-white rounded-full ${isOpen ? "" : ""}`}
      animate={{ opacity: isOpen ? 0 : 1 }}
      transition={{ duration: 0.1 }} // Faster fade out
    />
    <motion.span
      className={`block w-6 h-0.5 bg-white rounded-full ${isOpen ? "" : ""}`}
      animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    />
  </button>
);

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const navigate = useNavigate();
  const navRef = useRef(null); // Ref for the navbar element

  // --- Scroll Handling Effect ---
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Hide only if scrolling down significantly and not at the very top
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavbarVisible(false);
        setIsMobileMenuOpen(false); // Close mobile menu on scroll down
      } else {
        // Show if scrolling up or near the top
        setIsNavbarVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // --- Screen Resize Handling Effect ---
  useEffect(() => {
    const checkScreenSize = () => {
      // Use lg breakpoint (1024px) from Tailwind, adjust if needed
      setIsSmallScreen(window.innerWidth < 1024);
    };

    checkScreenSize(); // Initial check
    window.addEventListener('resize', checkScreenSize);

    // Close mobile menu if window resizes to larger screen
    if (!isSmallScreen && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }

    return () => window.removeEventListener('resize', checkScreenSize);
  }, [isSmallScreen, isMobileMenuOpen]); // Rerun effect if isSmallScreen changes

  // --- Click Outside Handler for Mobile Menu ---
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Common button data
  const navButtons = [
    { href: "https://github.com/abhiroopchaudhuri", text: "Github", bgColor: "bg-[#333]", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>' },
    { href: "https://www.behance.net/abhiroopchaudhuri", text: "Behance", bgColor: "bg-[#053eff]", icon: '<svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="64px" height="64px"><path d="M 16 8 C 11.582 8 8 11.582 8 16 L 8 48 C 8 52.418 11.582 56 16 56 L 48 56 C 52.418 56 56 52.418 56 48 L 56 16 C 56 11.582 52.418 8 48 8 L 16 8 z M 36 23 L 46 23 L 46 25.570312 L 36 25.570312 L 36 23 z M 17.146484 23.001953 L 25.759766 23.001953 C 26.694766 23.001953 31.751953 22.941797 31.751953 27.591797 C 31.751953 30.063797 30.065406 30.897672 29.316406 31.263672 C 30.439406 31.631672 32.498047 32.673469 32.498047 35.855469 C 32.499047 40.787469 26.882766 40.999 26.134766 41 L 17.146484 41 L 17.146484 23.001953 z M 20.986328 26.121094 L 20.986328 30.345703 L 25.107422 30.345703 C 25.668422 30.345703 27.539062 30.029578 27.539062 28.142578 C 27.539062 26.255578 25.105422 26.121094 24.732422 26.121094 L 20.986328 26.121094 z M 41.298828 27 C 46.257828 27 47.603734 30.869969 47.802734 31.792969 C 47.999734 32.715969 48 33.532672 48 34.638672 L 37.945312 34.638672 C 37.945312 35.744672 38.533141 38.240234 41.494141 38.240234 C 42.283141 38.240234 42.875797 38.053547 43.466797 37.685547 C 44.057797 37.315547 44.254172 36.947125 44.451172 36.578125 L 47.802734 36.578125 C 47.211734 38.052125 46.423281 39.159484 45.238281 39.896484 C 44.056281 40.633484 42.675609 41 41.099609 41 C 40.113609 41 39.125625 40.815313 38.140625 40.445312 C 37.351625 40.075313 36.564609 39.526656 35.974609 38.972656 C 35.382609 38.422656 34.98775 37.684672 34.59375 36.763672 C 34.19875 36.027672 34 34.92 34 34 C 34 33.081 34.368828 27 41.298828 27 z M 41.115234 29.462891 C 38.220234 29.462891 37.746094 32.2535 37.746094 32.4375 L 44.087891 32.4375 C 43.889891 31.5095 43.057234 29.462891 41.115234 29.462891 z M 20.945312 32.919922 L 20.945312 37.876953 L 25.253906 37.876953 C 25.627906 37.876953 28.248047 37.754234 28.248047 35.490234 C 28.249047 33.223234 26.189906 32.919922 25.253906 32.919922 L 20.945312 32.919922 z"/></svg>' },
    { href: "https://www.linkedin.com/in/abhiroopchaudhuri", text: "LinkedIn", bgColor: "bg-[#0a66c2]", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" fill="#ffffff" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>' }
  ];

  // Function to render buttons
  const renderButtons = (isMobile = false) => (
    <>
      {navButtons.map((button, index) => (
        <a href={button.href} target="_blank" rel="noopener noreferrer" key={index}>
          <Button
             icon={button.icon} // Pass SVG string as icon prop
             className={`${button.bgColor} ${ isMobile ? 'w-full' : 'w-32 xl:scale-100 scale-90'} text-white hover:bg-opacity-[70%] active:bg-opacity-[40%] transition-all duration-300 rounded-full flex items-center justify-center`} // Added flex centering for icon+text
          >
            {button.text} {/* Pass text as children */}
          </Button>
        </a>
      ))}
    </>
  );


  return (
    <nav
      ref={navRef} // Attach ref here
      className={`fixed text-white top-6 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[75%] max-w-4xl h-20 md:px-6 px-4 flex justify-between items-center bg-[#FFFFFF] bg-opacity-[4%] backdrop-blur-[20px] p-4 transition-transform duration-300 border-[1px] border-[#ffffff]/[0.06] rounded-full z-40 ${ // Added fixed positioning, centering, max-width, and z-index
        isNavbarVisible
          ? "translate-y-0"
          : "-translate-y-[150%]"
      }`}
    >
      {/* Left Side: Logo and Name */}
      <div className="flex flex-row items-center gap-2 select-none cursor-pointer"
        onClick={() => navigate("/")}>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, type: "ease" }}
          src={`${process.env.PUBLIC_URL}/profile.webp`} alt="logo" className="md:w-10 md:h-10 w-10 h-10 rounded-full" />
        <div className="flex flex-col justify-center items-start space-y-1 "> {/* Hide text on very small screens if needed */}
          <AnimatedText text="ABHIROOP" className="text-sm md:text-md font-light leading-none space-x-1" />
          <AnimatedText text="CHAUDHURI" className="text-sm md:text-md font-light leading-none space-x-1" />
        </div>
      </div>

      {/* Right Side: Buttons or Hamburger */}
      <div className="flex items-center">
        {isSmallScreen ? (
          <HamburgerIcon onClick={toggleMobileMenu} isOpen={isMobileMenuOpen} />
        ) : (
          <div className="flex flex-row items-center gap-1 xl:gap-2"> {/* Reduced gap slightly */}
            {renderButtons(false)}
          </div>
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {isSmallScreen && (
          <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`absolute top-full left-0 mt-2 w-full bg-[#1a1a1a] bg-opacity-99  backdrop-blur-[90px] rounded-2xl p-4 shadow-lg ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'} z-50`} // Added z-index higher than navbar
              style={{ display: isMobileMenuOpen ? 'block' : 'none' }} // Use display none when hidden for better performance/accessibility
          >
              {/* 2x1 Grid Layout */}
              <div className="grid grid-cols-2 gap-4">
                  {renderButtons(true)} {/* Render buttons adapted for mobile */}
              </div>
          </motion.div>
      )}
    </nav>
  );
}

export default Navbar;


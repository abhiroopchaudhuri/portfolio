import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useInView, useAnimation, useScroll, useTransform  } from "framer-motion";
import AnimatedText from "./AnimatedText";
import useWindowSize from './useWindowSize'; // <-- Import the custom hook

const Homepage = () => {
  // Removed unused state: isNavbarVisible, lastScrollY
  // Removed unused imports: stagger
  // Removed unused variables: aboutMeText, aboutMeLetters, container, child (unless used elsewhere)

  const { scrollY } = useScroll();
  // Map scrollY progress (e.g., from 0px to 500px scrolled)
  // to a vertical transformation (y) for the background (e.g., 0px to -100px)
  // Adjust the range [0, 500] and [0, -100] to control the parallax speed and distance
  const y = useTransform(scrollY, [0, 500], [0, -200]);


  const imgRef = useRef(null);
  const isInView = useInView(imgRef, { once: false });
  const control1 = useAnimation();
  const control2 = useAnimation();
  const navigate = useNavigate();
  const { width } = useWindowSize(); // <-- Get window width from the hook
  const [hoverElement, setHoverElement] = useState(null);

  // Define your mobile breakpoint (Tailwind's 'md' is usually 768px)
  const mobileBreakpoint = 768;
  const isMobile = width !== undefined && width < mobileBreakpoint;

  useEffect(() => {
    // Determine the border radius based on screen size
    const targetBorderRadius = isMobile ? "100px" : "250px"; // <-- Conditional radius

    if (isInView) {
      control1.start({
        clipPath: "inset(0% 0% 0% 0%)",
        borderBottomLeftRadius: targetBorderRadius, // <-- Use conditional radius
        transition: { duration: 0.6, ease: "easeInOut" },
      });

      control2.start({
        clipPath: "inset(0% 0% 0% 0%)",
        borderTopRightRadius: targetBorderRadius, // <-- Use conditional radius
        transition: { duration: 0.6, ease: "easeInOut" },
      });
    } else {
      // Reset animations - these already use 0px radius, which is correct
      control1.start({
        clipPath: "inset(0% 0% 100% 0%)",
        borderBottomLeftRadius: "0px",
        transition: { duration: 0.6, ease: "easeInOut" },
      });
      control2.start({
        clipPath: "inset(100% 0% 0% 0%)",
        borderTopRightRadius: "0px",
        transition: { duration: 0.6, ease: "easeInOut" },
      });
    }
    // Add isMobile as a dependency, as the animation target depends on it.
  }, [control1, control2, isInView, isMobile]);

  // Removed unused 'container' and 'child' variants definition

  return (
    <div className="min-h-screen w-full text-white font-source-code relative">
      <motion.div className="h-full w-full absolute z-[-10]" style={{ y }}>
          <img src={`${process.env.PUBLIC_URL}/bg.webp`} alt="bg" className="w-full h-full object-cover" />
        </motion.div>
      {/* Main Section */}
      <main className="flex flex-col items-center mt-28">
        <h2 className="md:text-2xl text-lg inline-block md:mt-16 mt-10 px-8 text-center md:px-0">
          Which portfolio would you like to see?
        </h2>
        <div
          ref={imgRef}
          // Ensure height is sufficient on mobile if needed, h-[30em] might be large
          className="imgContainer flex flex-col gap-4 md:gap-0 xl:flex-row w-full justify-center md:space-x-4 mt-10 md:mt-16 h-[30em] md:h-[30em]" // Adjusted potential height differences
        >
          {/* First Image Div (UX) */}
          <motion.div
            className="md:w-[100%] flex flex-row justify-center items-center w-full h-1/2 md:h-full overflow-hidden transition-all duration-300 bg-black bg-opacity-[4%] backdrop-blur-[5px] border-[1px] border-[#ffffff]/[0.1] cursor-pointer " // Adjusted height for mobile stack
            initial={{
              clipPath: "inset(100% 0% 0% 0%)",
              borderTopRightRadius: "0px",
            }}
            animate={control2}
            transition={{ duration: 0.6, ease: "easeInOut" }} // Transition is handled by animate
            onMouseEnter={(e) => setHoverElement("ux")}
            onMouseLeave={() => setHoverElement(null)}
          >
            <a className="flex-none h-full" href="https://behance.net/abhiroopchaudhuri" target="_blank" rel="noopener noreferrer">
              <img
                src={`${process.env.PUBLIC_URL}/ux-block.webp`}
                alt="UX Designing"
                className={`w-full h-full object-cover transition-scale duration-700 ease-in-out ${hoverElement === "ux" ? "scale-110" : ""}`}
              />
            </a>
            <a className="w-full h-full flex flex-col justify-center items-center" href="https://behance.net/abhiroopchaudhuri" target="_blank" rel="noopener noreferrer">
            <h1 className="flex-1 text-center text-md md:text-2xl  font-medium text-white uppercase tracking-widest px-12 flex flex-col justify-center ">UX Designing Portfolio <div className={`w-auto h-[2px] bg-white mt-4  mx-4 bg-gradient-to-r from-[#FF3AC4] to-[#0CB2FF] transition-all duration-300 ease-in-out ${hoverElement === "ux" ? "md:mx-4" : "md:mx-12"} `}></div></h1></a>
          </motion.div>
          {/* <motion.div
            className="md:w-[100%] w-full h-1/2 md:h-full overflow-hidden transition-all duration-300 bg-black bg-opacity-[4%] backdrop-blur-[5px] border-[1px] border-[#ffffff]/[0.1] cursor-pointer " // Adjusted height for mobile stack
            initial={{
              clipPath: "inset(100% 0% 0% 0%)",
              borderTopRightRadius: "0px",
            }}
            animate={control2}
            transition={{ duration: 0.6, ease: "easeInOut" }} // Transition is handled by animate
          >
            <a href="https://behance.net/abhiroopchaudhuri" target="_blank" rel="noopener noreferrer">
              <img
                src={`${process.env.PUBLIC_URL}/ux_designing_projects.jpeg`}
                alt="UX Designing"
                className="w-full h-full object-cover hover:scale-[105%] transition-scale duration-700 "
              />
            </a>
          </motion.div> */}

          {/* Second Image Div (Frontend) */}
          <motion.div
            className="md:w-[100%] flex flex-row justify-center items-center w-full h-1/2 md:h-full overflow-hidden transition-all duration-300 bg-black bg-opacity-[4%] backdrop-blur-[5px] border-[1px] border-[#ffffff]/[0.1] cursor-pointer " // Adjusted height for mobile stack
            initial={{
              clipPath: "inset(0% 0% 100% 0%)",
              borderTopRightRadius: "0px",
            }}
            animate={control1}
            transition={{ duration: 0.6, ease: "easeInOut" }} // Transition is handled by animate
            onClick={() => navigate("/frontend-projects")}
            onMouseEnter={(e) => setHoverElement("frontend")}
            onMouseLeave={() => setHoverElement(null)}
          >
            
            <h1 className="flex-1 text-center text-md md:text-2xl font-medium text-white uppercase tracking-widest px-12 flex flex-col justify-center ">AI & Front-end Portfolio <div className={`w-auto h-[2px] bg-white mt-4 md:mx-12 mx-4 bg-gradient-to-r from-[#65FB3D] to-[#FFF714] transition-all duration-300 ease-in-out ${hoverElement === "frontend" ? "md:mx-4" : "md:mx-12"} `}></div></h1>
            <div className="flex-none h-full" >
              <img
                src={`${process.env.PUBLIC_URL}/ai-block.webp`}
                alt="UX Designing"
                className={`w-full h-full object-cover transition-scale duration-700 ease-in-out ${hoverElement === "frontend" ? "scale-110" : ""}`}
              />
            </div>
            
          </motion.div>
          {/* <motion.div
            className="md:w-[100%] w-full h-1/2 md:h-full overflow-hidden transition-all duration-300 bg-black bg-opacity-[4%] backdrop-blur-[5px] border-[1px] border-[#ffffff]/[0.1] cursor-pointer" // Adjusted height for mobile stack
            initial={{
              clipPath: "inset(0% 0% 100% 0%)",
              borderBottomLeftRadius: "0px",
            }}
            animate={control1}
            transition={{ duration: 0.6, ease: "easeInOut" }} // Transition is handled by animate
            onClick={() => navigate("/frontend-projects")}
          >
            <img
              src={`${process.env.PUBLIC_URL}/ai_frontend_projects.jpeg`}
              alt="Front-End Development"
              className="w-full h-full object-cover hover:scale-[105%] transition-scale duration-700"
            />
          </motion.div> */}
        </div>

        {/* Certifications Section */}
<section className="w-full px-0 mt-24 bg-black pt-16 rounded-t-[64px] border-t-[1px] border-[#ffffff]/[0.15]">
<div className="flex md:flex-row flex-col items-center justify-around gap-16 md:gap-0 w-full">
<div>
<AnimatedText text="Certifications" className="md:text-2xl text-lg" />
<motion.div
initial={{ opacity: 0, y: 20, filter: "grayscale(100%)" }}
whileInView={{ opacity: 1, y: 0, filter: "grayscale(0%)" }}
transition={{ duration: 1, type: "ease" }}
viewport={{ once: true }}
className="grid md:grid-cols-3 w-full mt-10 md:mt-16">

<Link to="https://coursera.org/share/9cbf601beeac9fb2e831d4170f52ad28" target="_blank" rel="noopener noreferrer">
<img
src={`${process.env.PUBLIC_URL}/ai_certification.webp`}
className="w-[100%] h-auto object-cover hover:scale-[95%] transition duration-500"
/>
</Link>

<Link to="https://coursera.org/share/bf77019fdf390d8c3f01c2bb8851b54c" target="_blank" rel="noopener noreferrer">
<img
src={`${process.env.PUBLIC_URL}/ux_certification.webp`}
className="w-[100%] h-auto object-cover hover:scale-[95%] transition duration-500"
/>
</Link>

<Link to="https://coursera.org/share/0d5737a8389a205da01d8cc92028ad18" target="_blank" rel="noopener noreferrer">
<img
src={`${process.env.PUBLIC_URL}/product_certification.webp`}
className="w-[100%] h-auto object-cover hover:scale-[95%] transition duration-500"
/>
</Link>


<Link to="https://coursera.org/share/4baf63692cc1ea833e1471dccda3f11e" target="_blank" rel="noopener noreferrer">
<img
src={`${process.env.PUBLIC_URL}/frontend_certification.webp`}
className="w-[100%] h-auto object-cover hover:scale-[95%] transition duration-500"
/>
</Link>







</motion.div>
</div>
</div>
</section>
      </main>
    </div>
  );
};

export default Homepage;

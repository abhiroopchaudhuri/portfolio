import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useInView, useAnimation } from "framer-motion";
import AnimatedText from "./AnimatedText";
import useWindowSize from './useWindowSize'; // <-- Import the custom hook

const Homepage = () => {
  // Removed unused state: isNavbarVisible, lastScrollY
  // Removed unused imports: stagger
  // Removed unused variables: aboutMeText, aboutMeLetters, container, child (unless used elsewhere)

  const imgRef = useRef(null);
  const isInView = useInView(imgRef, { once: false });
  const control1 = useAnimation();
  const control2 = useAnimation();
  const navigate = useNavigate();
  const { width } = useWindowSize(); // <-- Get window width from the hook

  // Define your mobile breakpoint (Tailwind's 'md' is usually 768px)
  const mobileBreakpoint = 768;
  const isMobile = width !== undefined && width < mobileBreakpoint;

  useEffect(() => {
    // Determine the border radius based on screen size
    const targetBorderRadius = isMobile ? "0px" : "250px"; // <-- Conditional radius

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
    <div className="min-h-screen w-full bg-black text-white font-source-code">
      {/* Main Section */}
      <main className="flex flex-col items-center mt-20">
        <h2 className="md:text-2xl text-lg inline-block md:mt-16 mt-10 px-8 text-center md:px-0">
          Which portfolio would you like to see?
        </h2>
        <div
          ref={imgRef}
          // Ensure height is sufficient on mobile if needed, h-[30em] might be large
          className="imgContainer flex flex-col gap-4 md:gap-0 md:flex-row w-full justify-center md:space-x-4 mt-8 md:px-4 px-4 h-[30em] md:h-[30em]" // Adjusted potential height differences
        >
          {/* First Image Div (UX) */}
          <motion.div
            className="md:w-[40%] w-full h-1/2 md:h-full bg-black overflow-hidden transition-all duration-300" // Adjusted height for mobile stack
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
                className="w-full h-full object-cover hover:scale-[105%] transition-scale duration-700"
              />
            </a>
          </motion.div>

          {/* Second Image Div (Frontend) */}
          <motion.div
            className="md:w-[40%] w-full h-1/2 md:h-full bg-black overflow-hidden transition-all duration-300 cursor-pointer" // Adjusted height for mobile stack
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
          </motion.div>
        </div>

        {/* Certifications Section */}
<section className="w-full px-0 mt-36">
<div className="flex md:flex-row flex-col items-center justify-around gap-16 md:gap-0 w-full">
<div>
<AnimatedText text="Certifications" className="text-xl mb-8" />
<motion.div
initial={{ opacity: 0, y: 20, filter: "grayscale(100%)" }}
whileInView={{ opacity: 1, y: 0, filter: "grayscale(0%)" }}
transition={{ duration: 1, type: "ease" }}
viewport={{ once: true }}
className="grid md:grid-cols-3 w-full ">

<Link to="https://coursera.org/share/9cbf601beeac9fb2e831d4170f52ad28" target="_blank" rel="noopener noreferrer">
<img
src={`${process.env.PUBLIC_URL}/ai_certification.png`}
className="w-[100%] h-auto object-cover hover:scale-[95%] transition duration-500"
/>
</Link>

<Link to="https://coursera.org/share/bf77019fdf390d8c3f01c2bb8851b54c" target="_blank" rel="noopener noreferrer">
<img
src={`${process.env.PUBLIC_URL}/ux_certification.png`}
className="w-[100%] h-auto object-cover hover:scale-[95%] transition duration-500"
/>
</Link>

<Link to="https://coursera.org/share/0d5737a8389a205da01d8cc92028ad18" target="_blank" rel="noopener noreferrer">
<img
src={`${process.env.PUBLIC_URL}/product_certification.png`}
className="w-[100%] h-auto object-cover hover:scale-[95%] transition duration-500"
/>
</Link>


<Link to="https://coursera.org/share/4baf63692cc1ea833e1471dccda3f11e" target="_blank" rel="noopener noreferrer">
<img
src={`${process.env.PUBLIC_URL}/frontend_certification.png`}
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

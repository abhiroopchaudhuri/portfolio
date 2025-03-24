import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useInView, useAnimation, stagger } from "framer-motion";
import AnimatedText from "./AnimatedText";

const Homepage = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const imgRef = useRef(null);
  const isInView = useInView(imgRef, { once: false });
  const control1 = useAnimation();
  const control2 = useAnimation();
  const aboutMeText = "ABOUT ME X";
  const aboutMeLetters = Array.from(aboutMeText);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isInView);
    if (isInView) {
      control1.start({
        clipPath: "inset(0% 0% 0% 0%)",
        borderBottomLeftRadius: "250px",
        transition: { duration: 0.6, ease: "easeInOut" },
      });

      control2.start({
        clipPath: "inset(0% 0% 0% 0%)",
        borderTopRightRadius: "250px",
        transition: { duration: 0.6, ease: "easeInOut" },
      });
    } else {
      // Reset animations if not in view
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
  }, [control1, control2, isInView]);

  

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.5 * i },
    }),
  };

// Variants for each letter
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };


  return (
    <div className="min-h-screen w-full bg-black text-white font-source-code">

      {/* Main Section */}
      <main className="flex flex-col items-center mt-20">
        <h2 text="Which of these projects do you want to see?" className="md:text-2xl text-lg inline-block md:mt-16 mt-10 px-8 text-center md:px-0" >
        Which of these projects do you want to see?
        </h2>
        <div
          ref={imgRef}
          className="imgContainer flex flex-col gap-4 md:gap-0 md:flex-row w-full justify-center md:space-x-10 md:space-x-4 mt-8 md:px-4 px-4 h-[30em]"
        >

<motion.div
            className="md:w-[40%] w-full h-full bg-black overflow-hidden transition-all duration-300"
            initial={{
              clipPath: "inset(100% 0% 0% 0%)",
              borderTopRightRadius: "0px",
            }}
            animate={control2}
            // viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <a href="https://behance.net/abhiroopchaudhuri" target="_blank" rel="noopener noreferrer">
            <img
              src={`${process.env.PUBLIC_URL}/ux_designing_projects.jpeg`}
              alt="UX Designing"
              className="w-full h-full object-cover hover:scale-[105%] transition-scale duration-700"
            /> </a>
          </motion.div>
          
          <motion.div
            className="md:w-[40%] w-full h-full bg-black overflow-hidden transition-all duration-300 cursor-pointer"
            initial={{
              clipPath: "inset(0% 0% 100% 0%)",
              borderBottomLeftRadius: "0px",
            }}
            animate={control1}
            // viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            onClick={() => navigate("/frontend-projects")}
          >
            <img
              src={`${process.env.PUBLIC_URL}/ai_frontend_projects.jpeg`}
              alt="Front-End Development"
              className="w-full h-full object-cover hover:scale-[105%] transition-scale duration-700"
            />
          </motion.div>
          {/* Second Image Div */}
         
          
        </div>

        {/* About Me Section */}
        {/* <section className="text-center px-1 md:px-4 md:w-[75%] w-[95%] mt-28">
          <AnimatedText text="About Me" className="text-xl mb-4" />
          <motion.p
           initial={{ opacity: 0, y: 20, filter: "grayscale(100%)" }}
           whileInView={{ opacity: 1, y: 0, filter: "grayscale(0%)" }}
           transition={{ duration: 1, type: "ease" }}
           viewport={{ once: true }}
          className="text-gray-400 leading-2  md:leading-8 md:px-0 px-8">
            Hello! I'm Abhiroop, a {" "}
            <span className="text-yellow-400">
              UX/UI Designer & Gen AI Specialist
            </span>{" "}
            with experience in the Fintech, Healthcare, AI, and Web 3.0 SaaS
            industries. My journey in the tech world has been driven by a
            passion for creating user-centered designs that blend aesthetic
            appeal with seamless functionality. Throughout my career, I have had
            the privilege of working on over 17 products, including SaaS
            applications, software suites, and AI-driven platforms. My role has
            often extended beyond design and development, taking on responsibilities as an {" "}
            <span className="text-yellow-400">
              Interim Assistant Product Manager & Front-end Lead.
            </span>{" "} In these capacities, I've led cross-functional teams spanning front-end development teams, UX teams, AI teams, and testing teams, and have utilized
            AI-driven data insights, including generative AI and AI-based heatmapping, to expedite product decisions and enhance user experiences.
            <br />
            <br /><span className="text-blue-400">
            My educational background includes a B.Tech in Electrical and
            Electronics Engineering, complemented by professional certifications
            from Google (UX Designing), Meta (Front-End Development), and the
            University of Virginia (Digital Product Management).</span>
            <br />
            <br />
            
          </motion.p>
        </section> */}

        {/* Certifications Section */}
        <section className="w-full px-0 mt-20">
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
                  className="w-[100%] h-auto object-cover hover:scale-[95%]  transition duration-500"
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
                  className="w-[100%] h-auto object-cover hover:scale-[95%]  transition duration-500"
                />
                </Link>

                

                
                
                 
                
              </motion.div>
            </div>
            </div>
        </section>

        {/* Tech Stack Section */}
        {/* <section className="w-full px-0 mt-28 mb-10">
          <div className="flex md:flex-row flex-col items-center justify-around gap-16 md:gap-0">
            <div>
              
              <AnimatedText text="Front-End Development" className="text-xl mb-8" />
              <motion.div
              initial={{ opacity: 0, y: 20, filter: "grayscale(100%)" }}
              whileInView={{ opacity: 1, y: 0, filter: "grayscale(0%)" }}
              transition={{ duration: 1, type: "ease" }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-8 gap-x-12">
                
                <div className="flex flex-col items-center justify-between w-20 h-30 md:scale-[100%] scale-[80%]"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" alt="React" className="w-full h-auto object-contain p-1" />React</div>

                <div className="flex flex-col items-center justify-between w-20 h-30 md:scale-[100%] scale-[80%]"><img src="https://www.svgrepo.com/show/374118/tailwind.svg" alt="Tailwind" className="w-full h-auto object-contain" />Tailwind</div>

                <div className="flex flex-col items-center justify-between w-20 h-30 md:scale-[100%] scale-[80%]"><img src="https://www.datocms-assets.com/98835/1684410508-image-7.png" alt="Next.js" className="w-full h-auto object-contain p-1" /><p>Next.js</p></div>


                <div className="flex flex-col items-center justify-between w-20 h-30 md:scale-[100%] scale-[80%]"><img src="https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/html-512.png" alt="Html" className="w-full h-auto object-contain p-2" /><p>Html</p></div>

                <div className="flex flex-col items-center justify-between w-20 h-30 md:scale-[100%] scale-[80%]"><img src="https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/css-512.png" alt="CSS" className="w-full h-auto object-contain p-2" /><p>CSS</p></div>

                <div className="flex flex-col items-center justify-between w-20 h-30 md:scale-[100%] scale-[80%]"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="Javascript" className="w-full h-auto object-contain p-2" /><p>Javascript</p></div>

                
              </motion.div>
            </div>
            <div>
            <AnimatedText text="UX Designing Tools" className="text-xl mb-8" />
              <motion.div
              initial={{ opacity: 0, y: 20, filter: "grayscale(100%)" }}
              whileInView={{ opacity: 1, y: 0, filter: "grayscale(0%)" }}
              transition={{ duration: 1, type: "ease" }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-8 gap-x-12">
             
                <div className="flex flex-col items-center justify-between w-20 h-30 md:scale-[100%] scale-[80%]"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsjBqYeY1ERIluvWk9qxCq2uUGQ95rNdmDyL-_4NpX6DzJgprV1k-zqaOydp3EBUnT6U0&usqp=CAU" alt="Figma" className="w-full h-auto object-contain p-1" />Figma</div>

                <div className="flex flex-col items-center justify-between w-20 h-30 md:scale-[100%] scale-[80%]"><img src="https://framerusercontent.com/images/TvJ9grdPgk3sRz6T6XwkpBrFr4k.png?scale-down-to=512" alt="Framer" className="w-full h-auto object-contain" />Framer</div>

                <div className="flex flex-col items-center justify-between w-20 h-30 md:scale-[100%] scale-[80%]"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/adobe-photoshop-icon.png" alt="Photoshop" className="w-full h-auto object-contain p-1" /><p>Photoshop</p></div>

            

                <div className="flex flex-col items-center justify-between w-20 h-30 md:scale-[100%] scale-[80%]"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/800px-Adobe_Illustrator_CC_icon.svg.png" alt="Illustrator" className="w-full h-auto object-contain p-2" /><p>Illustrator</p></div>

                <div className="flex flex-col items-center justify-between w-20 h-30 md:scale-[100%] scale-[80%]"><img src="https://cdn-static-e.dora.run/dora_runner/expo_logomark.6c524e4f4dff6feb.png" alt="Dora" className="w-full h-auto object-contain p-2" /><p>Dora</p></div>

                <div className="flex flex-col items-center justify-between w-20 h-30 md:scale-[100%] scale-[80%]"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/GAnalytics.svg/1200px-GAnalytics.svg.png" alt="Google Analytics" className="w-full h-auto object-contain p-2" /><p>GA</p></div>

                
              </motion.div>
            </div>
          </div>
        </section> */}
      </main>

      {/* Footer Section */}
      {/* <footer className="text-center py-4 border-t border-gray-700 mt-24">
        <p>Copyright 2024 © Abhiroop</p>
      </footer> */}
    </div>
  );
};

export default Homepage;

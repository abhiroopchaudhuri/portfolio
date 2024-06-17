import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
        <AnimatedText text="Which of these projects do you want to see?" className="md:text-2xl text-lg inline-block md:mt-16 mt-10 px-4 text-center md:px-0" />
        <div
          ref={imgRef}
          className="imgContainer flex w-full justify-center md:space-x-10 space-x-4 mt-8 md:px-4 px-4 h-[30em]"
        >
          <motion.div
            className="md:w-[40%] w-[50%] h-full bg-red-500 overflow-hidden md:grayscale md:hover:grayscale-0 transition-all duration-300 cursor-pointer"
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
              src="https://cdn.midjourney.com/521d599d-126d-473f-9b24-444798bb241e/0_1.png"
              alt="Project 1"
              className="w-full h-full object-cover hover:scale-[105%] transition-scale duration-700"
            />
          </motion.div>
          {/* Second Image Div */}
         
          <motion.div
            className="md:w-[40%] w-[50%] h-full bg-green-500 overflow-hidden md:grayscale md:hover:grayscale-0 transition-all duration-300"
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
              src="https://cdn.midjourney.com/fce06df0-2960-4a40-b917-d6d3ca1bd663/0_0.png"
              alt="Project 2"
              className="w-full h-full object-cover hover:scale-[105%] transition-scale duration-700"
            /> </a>
          </motion.div>
        </div>

        {/* About Me Section */}
        <section className="text-center px-4 md:w-[75%] w-[90%] mt-20">
          <AnimatedText text="About Me" className="text-xl mb-4" />
          <motion.p
           initial={{ opacity: 0, y: 20, filter: "grayscale(100%)" }}
           whileInView={{ opacity: 1, y: 0, filter: "grayscale(0%)" }}
           transition={{ duration: 1, type: "ease" }}
           viewport={{ once: true }}
          className="text-gray-400 leading-8">
            Hello! I'm Abhiroop Chaudhuri, a dedicated and innovative{" "}
            <span className="text-blue-400">
              Front-End Developer and UX/UI Designer
            </span>{" "}
            with experience in the Fintech, Healthcare, AI, and Web 3.0 SaaS
            industries. My journey in the tech world has been driven by a
            passion for creating user-centered designs that blend aesthetic
            appeal with seamless functionality. Throughout my career, I have had
            the privilege of working on over 17 products, including SaaS
            applications, software suites, and AI-driven platforms. My role has
            often extended beyond design and development, where I have utilized
            AI-driven data insights, including generative AI and AI-based
            heatmapping, to expedite product decisions and enhance user
            experiences.
            <br />
            <br />
            My educational background includes a B.Tech in Electrical and
            Electronics Engineering, complemented by professional certifications
            from Google (UX Designing), Meta (Front-End Development), and the
            University of Virginia (Digital Product Management).
            <br />
            <br />
            In every project, I strive to push the boundaries of creativity and
            innovation while maintaining a strong focus on user needs and
            business objectives. My ability to collaborate effectively with
            cross-functional teams, combined with my continuous learning
            mindset, ensures that I stay at the forefront of industry
            advancements and best practices. Whether working on a complex AI
            application or a simple, elegant user interface, I am committed to
            delivering products that are not only visually compelling but also
            intuitive and user-friendly. My goal is always to create products
            that delight users and drive business success.
          </motion.p>
        </section>

        {/* Tech Stack Section */}
        <section className="w-full px-0 mt-20">
          <div className="flex md:flex-row flex-col items-center justify-around gap-16 md:gap-0">
            <div>
              {/* <h4 className="text-lg mb-8">Front-End Development</h4> */}
              <AnimatedText text="Front-End Development" className="text-xl mb-8" />
              <motion.div
              initial={{ opacity: 0, y: 20, filter: "grayscale(100%)" }}
              whileInView={{ opacity: 1, y: 0, filter: "grayscale(0%)" }}
              transition={{ duration: 1, type: "ease" }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-8 gap-x-12">
                {/* Add your tech stack items here */}
                <div className="flex flex-col items-center justify-between w-20 h-30 md:scale-[100%] scale-[80%]"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" alt="React" className="w-full h-auto object-contain p-1" />React</div>

                <div className="flex flex-col items-center justify-between w-20 h-30 md:scale-[100%] scale-[80%]"><img src="https://www.svgrepo.com/show/374118/tailwind.svg" alt="Tailwind" className="w-full h-auto object-contain" />Tailwind</div>

                <div className="flex flex-col items-center justify-between w-20 h-30 md:scale-[100%] scale-[80%]"><img src="https://www.datocms-assets.com/98835/1684410508-image-7.png" alt="Next.js" className="w-full h-auto object-contain p-1" /><p>Next.js</p></div>

                {/* <div className="flex flex-col items-center justify-between w-40 h-30 col-span-2 rounded-[20px] overflow-hidden"><img src="https://upload.wikimedia.org/wikipedia/commons/3/32/Mongo-db-logo.png" alt="Mongo DB" className="w-full h-full object-contain h-auto" />Mongo DB</div> */}

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
                {/* Add your tech stack items here */}
                <div className="flex flex-col items-center justify-between w-20 h-30 md:scale-[100%] scale-[80%]"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsjBqYeY1ERIluvWk9qxCq2uUGQ95rNdmDyL-_4NpX6DzJgprV1k-zqaOydp3EBUnT6U0&usqp=CAU" alt="Figma" className="w-full h-auto object-contain p-1" />Figma</div>

                <div className="flex flex-col items-center justify-between w-20 h-30 md:scale-[100%] scale-[80%]"><img src="https://static-00.iconduck.com/assets.00/framer-icon-2048x2048-msauaaio.png" alt="Framer" className="w-full h-auto object-contain" />Framer</div>

                <div className="flex flex-col items-center justify-between w-20 h-30 md:scale-[100%] scale-[80%]"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/adobe-photoshop-icon.png" alt="Photoshop" className="w-full h-auto object-contain p-1" /><p>Photoshop</p></div>

            

                <div className="flex flex-col items-center justify-between w-20 h-30 md:scale-[100%] scale-[80%]"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/800px-Adobe_Illustrator_CC_icon.svg.png" alt="Illustrator" className="w-full h-auto object-contain p-2" /><p>Illustrator</p></div>

                <div className="flex flex-col items-center justify-between w-20 h-30 md:scale-[100%] scale-[80%]"><img src="https://cdn-static-e.dora.run/dora_runner/expo_logomark.6c524e4f4dff6feb.png" alt="Dora" className="w-full h-auto object-contain p-2" /><p>Dora</p></div>

                <div className="flex flex-col items-center justify-between w-20 h-30 md:scale-[100%] scale-[80%]"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/GAnalytics.svg/1200px-GAnalytics.svg.png" alt="Google Analytics" className="w-full h-auto object-contain p-2" /><p>GA</p></div>

                
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      {/* <footer className="text-center py-4 border-t border-gray-700 mt-24">
        <p>Copyright 2024 © Abhiroop</p>
      </footer> */}
    </div>
  );
};

export default Homepage;

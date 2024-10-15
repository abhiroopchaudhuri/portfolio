// src/FrontendProjects.js
import React from "react";
import AnimatedText from "./AnimatedText";
import FrontendProjComponents from "./FrontendProjComponents";
import Projects from "./projects";
import { motion, transform } from "framer-motion";

const FrontendProjects = () => {

 

// Variants for each letter
  const child = {
    visible: (index) => ({
      opacity: 1,
      y: 0,
      
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: 0.2 * index,
      },
    }),
    hidden: {
      opacity: 0,
      y: 20,
      
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        
        
      },
    },
  };


  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-black text-white font-source-code">
      <div className="flex flex-col items-center mt-20 mb-12 px-4">
        <AnimatedText
          text="Front-End Projects"
          className="md:text-2xl text-lg inline-block md:mt-16 mt-10"
        />
        <motion.p
         initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, type: "ease" }}
           viewport={{ once: true }}
        className="text-center mt-4">
          Here are some of my frontend projects...
        </motion.p>
      </div>

    
      <motion.div
      //Use these for StaggerChildren (initial, animate and transiton stagger in parent)
      // initial="hidden"
      // animate="visible"
      // transition={{ staggerChildren: 0.5, delayChildren: 0.2 }}
      
      className="flex flex-col items-center w-full">
      {Projects.map((project, index) => (
        <motion.div
        //For stagger- just put the variants {child} in variants in child component in map, remove intial, animate)
        initial="hidden"
        animate="visible"
        variants={child}
        key={index}
        className="flex flex-col items-center min-w-full"
        custom={index}
        >
        <FrontendProjComponents
          i={index}
          title={project.title}
          description={project.description}
          image={project.imageLink}
          githubLink={project.githubLink}
          liveLink={project.liveLink}
          className=""
        /> </motion.div>
      ))}

      </motion.div>

    </div>
  );
};

export default FrontendProjects;

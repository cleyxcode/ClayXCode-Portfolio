"use client";

import Cnsole from "console-art-x";
import { motion } from "framer-motion";
import Social from "@/components/Social";
import Transmission from "@/components/Transmission";
import Animation from "@/components/Animation";

const Homepage = () => {
  return (
    <motion.div
      className="min-h-[calc(100svh-6rem)] overflow-x-hidden pt-[calc(1rem+env(safe-area-inset-top))] pb-[calc(5rem+env(safe-area-inset-bottom))]"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <Cnsole />
      <div className="min-h-full flex flex-col lg:flex-row gap-8 lg:gap-0 px-4 py-8 sm:px-8 sm:py-12 md:px-12 lg:px-20 lg:py-20 xl:px-48">
        <div className="lg:w-5/12 flex justify-center items-center">
          <img
            src="/Profile_1.webp"
            alt="Bredley Tuhuleruw"
            className="deneme"
          />
        </div>
        <div className="lg:w-1/2 flex flex-col gap-6 lg:gap-8 items-center justify-center text-white">
          <motion.h1 
            className="max-w-full text-[clamp(2rem,9vw,3.75rem)] leading-[1.08] font-bold text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Code, Create, Innovate <br />
            <span className="block max-w-full break-words bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              <Animation />
            </span>
          </motion.h1>

          <motion.div 
            className="space-y-4 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="md:text-xl text-gray-200">
              Welcome to my digital workspace! I am <strong>Bredley (cleyxcode)</strong>, 
              a Full-Stack Developer, Software Developer, and Game Developer from Maluku.
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <Social />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <Transmission />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;

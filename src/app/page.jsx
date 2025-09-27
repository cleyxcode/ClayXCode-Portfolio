"use client";

import Cnsole from "console-art-x";
import { motion } from "framer-motion";
import Social from "@/components/Social";
import Transmission from "@/components/Transmission";
import Animation from "@/components/Animation";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <Cnsole />
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 p-20">
        <div className="h-1/2 lg:h-full lg:w-5/12 flex justify-center items-center">
          <div className="deneme"></div>
        </div>
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center text-white">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Code, Create, Innovate: <br />
            <span className="md:text-5xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
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

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-6">
              <motion.div 
                className="px-4 py-2 bg-blue-600 bg-opacity-20 rounded-full border border-blue-400 border-opacity-30"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-blue-200 text-sm font-medium">28+ Repositories</span>
              </motion.div>
              <motion.div 
                className="px-4 py-2 bg-green-600 bg-opacity-20 rounded-full border border-green-400 border-opacity-30"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-green-200 text-sm font-medium">Backend Developer</span>
              </motion.div>
              <motion.div 
                className="px-4 py-2 bg-purple-600 bg-opacity-20 rounded-full border border-purple-400 border-opacity-30"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-purple-200 text-sm font-medium">Full-Stack Ready</span>
              </motion.div>
            </div>
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

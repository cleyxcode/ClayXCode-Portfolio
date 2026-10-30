"use client";

import { AnimatePresence } from "framer-motion";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import GhostFibers from "./GhostFibers";
import SwarmCursor from "./SwarmCursor";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="relative isolate w-full min-h-screen overflow-x-hidden bg-gradient-to-b from-slate-800 to-violet-800"
      >
        <div className="pointer-events-none fixed inset-0 z-0 h-[100svh] min-h-screen opacity-70">
          <GhostFibers
            glowColor="#8b5cf6"
            layers={3}
            twist={1.2}
            threads={72}
            fiberStyle="dots"
            depthOfField={0.85}
            hoverEffect="none"
            intro={true}
            mouseInteraction={false}
          />
        </div>
        <div className="pointer-events-none fixed inset-0 z-[5] h-[100svh] min-h-screen">
          <SwarmCursor
            className="h-full w-full"
            count={600}
            size={2.2}
            spread={90}
            swirl={0.6}
            tail={0.5}
            trail={0.6}
            wander={0.5}
            depth={0.7}
            clickEffect="burst"
            targets="a, button, [data-swarm-target]"
            intro={true}
            enabled={true}
          />
        </div>
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pathName.substring(1)}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="relative z-10 h-24">
          <Navbar />
        </div>
        <div className="relative z-10 min-h-[calc(100dvh-6rem)]">{children} </div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;

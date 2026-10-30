"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import CountdownTimer from "@/components/CountdownTimer";
import Marq from "@/components/Marq";
import Lanyard from "@/components/Lanyard";
import ExperienceTimeline from "@/components/ExperienceTimeline";

const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div
        className="h-full overflow-scroll lg:flex max-w-full"
        ref={containerRef}
      >
        {/* LEFT SIDE */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2 text-white">
          {/* BIOGRAPHY */}
          <div className="flex flex-col gap-12 justify-center">
            <div className="relative h-[480px] w-full max-w-[520px] sm:h-[560px] sm:max-w-[600px]">
              <Lanyard
                frontImage="/Profile_2.webp"
                backImage="/Profile_2.webp"
                imageFit="cover"
                orientation="portrait"
                finish="glossy"
                cornerRadius={0.3}
                size={0.62}
                anchor="center"
                strapLength={0.5}
                strapColor="#111111"
                strapWidth={0.65}
                metal="silver"
                gravity={1}
                damping={0.5}
                elasticity={0.5}
                breeze={0.5}
                interactive
                intro
                className="h-full w-full"
              />
            </div>

            <h1 className="font-bold text-2xl">MY BIOGRAPHY</h1>

            <p className="text-lg">
              I am a <b>Backend Developer</b>, <b>Software Developer</b>, and <b>Game Developer</b> 
              passionate about building real-world applications that solve problems and deliver 
              value to users. My journey started with small project experiments, and now I focus 
              on delivering complete solutions — from backend systems to full-stack web and mobile applications.
            </p>

            <p className="text-lg">
              Most of my work revolves around <b>Laravel</b>, <b>React</b>, <b>MySQL</b>, 
              and modern frameworks. I also explore <b>Flutter/Dart</b> for mobile development, 
              <b>Unity with C#</b> for game development, and <b>Kotlin</b> for Android native development.
            </p>

            <p className="text-lg">
              With <b>18+ repositories</b> on GitHub, I have worked on various projects ranging from 
              management systems for TVRI Maluku, AI healthcare apps, AR learning applications, to interactive games. 
              I am always excited to explore new technologies and create innovative solutions.
            </p>

            <span className="italic">
              cleyxcode / Backend • Software • Game Developer
            </span>
          </div>

          {/* SKILLS */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS & TECHNOLOGIES
            </motion.h1>

            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap justify-center max-w-full overflow-hidden"
            >
              {/* Backend & Web Development */}
              {[
                "PHP", "Laravel", "Filament", "Blade", "MySQL", "PostgreSQL",
                "REST API", "GraphQL", "Firebase", "Node.js"
              ].map((skill) => (
                <div
                  key={skill}
                  className="rounded p-2 text-sm cursor-pointer bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  {skill}
                </div>
              ))}
              
              {/* Mobile Development */}
              {[
                "Flutter", "Dart", "Kotlin", "Android", "Firebase Integration"
              ].map((skill) => (
                <div
                  key={skill}
                  className="rounded p-2 text-sm cursor-pointer bg-green-600 text-white hover:bg-green-700 transition-colors"
                >
                  {skill}
                </div>
              ))}

              {/* Game Development */}
              {[
                "Unity", "C#", "Game Design", "AR Development", "3D Modeling"
              ].map((skill) => (
                <div
                  key={skill}
                  className="rounded p-2 text-sm cursor-pointer bg-purple-600 text-white hover:bg-purple-700 transition-colors"
                >
                  {skill}
                </div>
              ))}

              {/* Frontend & Tools */}
              {[
                "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", 
                "Bootstrap", "Git/GitHub", "Ubuntu/Linux", "Docker"
              ].map((skill) => (
                <div
                  key={skill}
                  className="rounded p-2 text-sm cursor-pointer bg-gray-600 text-white hover:bg-gray-700 transition-colors"
                >
                  {skill}
                </div>
              ))}
              
              <Marq />
            </motion.div>
          </div>

          {/* EXPERIENCE */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
          >
            <h1 className="font-bold text-2xl">
              EXPERIENCE & PROJECTS
            </h1>
            <ExperienceTimeline countdown={<CountdownTimer />} />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;

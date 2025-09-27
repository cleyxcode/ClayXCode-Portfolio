"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import CountdownTimer from "@/components/CountdownTimer";
import Marq from "@/components/Marq";

const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

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
            <Image
              src="/Profile_2.webp"
              alt="Profile Photo"
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />

            <h1 className="font-bold text-2xl">MY BIOGRAPHY</h1>

            <p className="text-lg">
              Saya adalah seorang <b>Backend Developer</b>, <b>Software Developer</b>, dan <b>Game Developer</b> 
              yang passionate dalam membangun aplikasi real-world yang menyelesaikan masalah dan memberikan 
              value kepada pengguna. Journey saya dimulai dari eksperimen project kecil, dan sekarang fokus 
              pada delivering solusi lengkap — dari sistem backend hingga full-stack web dan mobile applications.
            </p>

            <p className="text-lg">
              Sebagian besar karya saya berkisar di sekitar <b>PHP/Laravel</b>, <b>Filament</b>, <b>MySQL</b>, 
              dan framework modern. Saya juga mendalami <b>Flutter/Dart</b> untuk mobile development, 
              <b>Unity dengan C#</b> untuk game development, serta <b>Kotlin</b> untuk Android native development.
            </p>

            <p className="text-lg">
              Dengan <b>18+ repositories</b> di GitHub, saya telah mengerjakan berbagai project mulai dari 
              sistem manajemen untuk TVRI Maluku, aplikasi healthcare AI, AR learning apps, hingga game interaktif. 
              Saya selalu excited untuk mengeksplorasi teknologi baru dan menciptakan solusi inovatif.
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
            ref={experienceRef}
          >
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE & PROJECTS
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
            >
              {/* Latest Projects 2025 */}
              <div className="flex justify-between h-64">
                <div className="w-1/3 "></div>
                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-400 bg-white -left-2"></div>
                  </div>
                </div>
                <div className="w-1/3 ">
                  <div className="bg-blue-600 bg-opacity-80 p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Recent Projects 2025
                  </div>
                  <div className="p-3 text-sm italic">
                    • <b>Website Pisang</b> - E-commerce platform (Laravel Blade)<br/>
                    • <b>Cari Sekolah</b> - School finder app (TypeScript)<br/>
                    • <b>Game ID Wizard</b> - Gaming utility tool<br/>
                    • <b>Skin Cancer Detection</b> - AI healthcare app (Flutter)
                  </div>
                  <div className="p-3 text-blue-400 text-sm font-semibold">
                    Sep 2025
                  </div>
                </div>
              </div>

              {/* TVRI Maluku Projects */}
              <div className="flex justify-between h-64">
                <div className="w-1/3 ">
                  <div className="bg-red-600 bg-opacity-80 p-3 font-semibold rounded-b-lg rounded-s-lg">
                    TVRI Maluku Developer
                  </div>
                  <div className="p-3 text-sm italic">
                    • <b>Web Surat Masuk TVRI</b> - Document management system<br/>
                    • <b>Sistem Arsip TVRI</b> - Digital archive platform<br/>
                    Backend development using PHP & MySQL for government institution
                  </div>
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024 - 2025
                  </div>
                </div>
                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                <div className="w-1/3 "></div>
              </div>

              {/* Healthcare & University Projects */}
              <div className="flex justify-between h-64">
                <div className="w-1/3 "></div>
                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-green-400 bg-white -left-2"></div>
                  </div>
                </div>
                <div className="w-1/3 ">
                  <div className="bg-green-600 bg-opacity-80 p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Healthcare & Education Tech
                  </div>
                  <div className="p-3 text-sm italic">
                    • <b>Sinara App</b> - Full-stack health management (PHP + Flutter)<br/>
                    • <b>Resep Makanan API</b> - Nutrition API development<br/>
                    Collaborated with Universitas Indonesia Maluku
                  </div>
                  <div className="p-3 text-green-400 text-sm font-semibold">
                    2024
                  </div>
                </div>
              </div>

              {/* Game & AR Development */}
              <div className="flex justify-between h-64">
                <div className="w-1/3 ">
                  <div className="bg-purple-600 bg-opacity-80 p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Game & AR Developer
                  </div>
                  <div className="p-3 text-sm italic">
                    • <b>AR Bangun Ruang</b> - Educational AR app (Unity C#)<br/>
                    • <b>Timburgan Chess</b> - Interactive GitHub chess game<br/>
                    3D modeling and augmented reality experiences
                  </div>
                  <div className="p-3 text-purple-400 text-sm font-semibold">
                    2025
                  </div>
                </div>
                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-purple-400 bg-white -left-2"></div>
                  </div>
                </div>
                <div className="w-1/3 "></div>
              </div>

              {/* Full-Stack Development */}
              <div className="flex justify-between h-64">
                <div className="w-1/3 "></div>
                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-yellow-400 bg-white -left-2"></div>
                  </div>
                </div>
                <div className="w-1/3 ">
                  <div className="bg-yellow-600 bg-opacity-80 p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Full-Stack Projects
                  </div>
                  <div className="p-3 text-sm italic">
                    • <b>Admin Panel</b> - Universal dashboard system<br/>
                    • <b>Filament Kasir</b> - POS system with Laravel Filament<br/>
                    • <b>Website Profil Gereja</b> - Church management system<br/>
                    • Multiple CRUD applications (Laravel, Kotlin)
                  </div>
                  <div className="p-3 text-yellow-400 text-sm font-semibold">
                    2025
                  </div>
                </div>
              </div>

              {/* Freelancer Journey */}
              <div className="flex justify-between h-64">
                <div className="w-1/3 ">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 bg-opacity-80 p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Freelance Developer
                  </div>
                  <div className="p-3 text-sm italic">
                    Delivering backend solutions, mobile apps, and game development 
                    services using Laravel, Filament, Flutter, Unity, and modern tech stacks.
                    <br/><b>18+ Public Repositories</b> on GitHub
                  </div>
                  <div className="p-3 text-sm font-semibold">
                    Development Journey
                  </div>
                  <div className="text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-sm font-semibold">
                    <CountdownTimer />
                  </div>
                </div>
                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-gradient-to-r ring-blue-400 bg-white -left-2"></div>
                  </div>
                </div>
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
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
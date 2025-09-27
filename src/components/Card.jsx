"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { PiProjectorScreen } from "react-icons/pi";

const items = [
  {
    id: 1,
    title: "e-commerceWebsite",
    desc: "An e-commerce website. Built with Laravel Blade as a special project.",
    img: "/pisang.png",
    link: "https://github.com/cleyxcode/website-pisang",
    demo: "#",
    tech: "Blade",
    updated: "Sep 25, 2025"
  },
  {
    id: 2,
    title: "School Finder",
    desc: "A school search platform built with TypeScript. Helping students find the right school.",
    img: "/carisekolah.png",
    link: "https://github.com/cleyxcode/cari-sekolah",
    demo: "#",
    tech: "TypeScript",
    updated: "Sep 22, 2025"
  },
  {
    id: 3,
    title: "Sinara App",
    desc: "A modern management application built with PHP. Full-featured for data and administration handling.",
    img: "/sinara.jpeg",
    link: "https://github.com/cleyxcode/sinara-app",
    demo: "#",
    tech: "PHP",
    updated: "Sep 20, 2025"
  },
  {
    id: 4,
    title: "Game ID Wizard",
    desc: "A tool for managing Game IDs with TypeScript. User-friendly interface with high performance.",
    img: "/gameid.png",
    link: "https://github.com/cleyxcode/gameid-wizard",
    demo: "#",
    tech: "TypeScript",
    updated: "Sep 2, 2025"
  },
  {
    id: 5,
    title: "Skin Cancer Detection",
    desc: "A Flutter mobile app for detecting skin cancer using AI. Innovative healthcare technology.",
    img: "/place.png",
    link: "https://github.com/cleyxcode/skin-cancer-flutter",
    demo: "#",
    tech: "Dart/Flutter",
    updated: "Aug 15, 2025"
  },
  {
    id: 6,
    title: "Food Recipe API",
    desc: "An API for recipe applications built with Dart. A robust backend for culinary apps.",
    img: "/place.png",
    link: "https://github.com/cleyxcode/resep-makanan-api",
    demo: "#",
    tech: "Dart",
    updated: "Aug 14, 2025"
  },
  {
    id: 7,
    title: "2-Church Profile Website",
    desc: "A profile website for two churches built with Laravel Blade. Elegant design for the community.",
    img: "/place.png",
    link: "https://github.com/cleyxcode/website-profil-2-gereja",
    demo: "#",
    tech: "Blade",
    updated: "Aug 13, 2025"
  },
  {
    id: 8,
    title: "Timburgan Chess",
    desc: "Play chess via GitHub with a unique concept. An interactive game through GitHub platform.",
    img: "/place.png",
    link: "https://github.com/cleyxcode/timburgan",
    demo: "#",
    tech: "GitHub Game",
    updated: "Aug 13, 2025"
  },
  {
    id: 9,
    title: "TVRI Mail System",
    desc: "An incoming mail management system for TVRI Maluku. Built with PHP for administrative efficiency.",
    img: "/tvri.png",
    link: "https://github.com/cleyxcode/Web-Surat-Masuk",
    demo: "#",
    tech: "PHP",
    updated: "Aug 12, 2025"
  },
  {
    id: 10,
    title: "Sinara Mobile App",
    desc: "The mobile version of Sinara App built with Flutter. A cross-platform mobile solution.",
    img: "/place.png",
    link: "https://github.com/cleyxcode/sinara-mobile-app",
    demo: "#",
    tech: "Dart/Flutter",
    updated: "Aug 11, 2025"
  },
  {
    id: 11,
    title: "Admin Panel",
    desc: "A universal admin panel built with Laravel Blade. Powerful dashboard for system management.",
    img: "/place.png",
    link: "https://github.com/cleyxcode/admin-panel",
    demo: "#",
    tech: "Blade",
    updated: "Jun 11, 2025"
  },
  {
    id: 12,
    title: "AR Geometry 3D",
    desc: "An Augmented Reality app for learning 3D geometry. Built with C# for interactive experiences.",
    img: "/place.png",
    link: "https://github.com/cleyxcode/AR-BangunRuang",
    demo: "#",
    tech: "C#",
    updated: "Mar 15, 2025"
  },
  {
    id: 13,
    title: "Firebase Project",
    desc: "An Android project with Firebase integration. Built with Kotlin for backend-as-a-service usage.",
    img: "/place.png",
    link: "https://github.com/cleyxcode/firebase-project",
    demo: "#",
    tech: "Kotlin",
    updated: "Mar 15, 2025"
  },
  {
    id: 14,
    title: "Kotlin CRUD App",
    desc: "A simple CRUD app with Kotlin. Fundamental Android development with database operations.",
    img: "/place.png",
    link: "https://github.com/cleyxcode/Crud-app-kotlin",
    demo: "#",
    tech: "Kotlin",
    updated: "Mar 15, 2025"
  },
  {
    id: 15,
    title: "Laravel 11 CRUD (Midterm)",
    desc: "A CRUD application for midterm exams built with Laravel 11. Modern PHP framework implementation.",
    img: "/place.png",
    link: "https://github.com/cleyxcode/uts-crud-laravel-11",
    demo: "#",
    tech: "PHP/Laravel",
    updated: "Mar 15, 2025"
  },
  {
    id: 16,
    title: "Filament POS",
    desc: "A Point of Sales system built with Laravel Filament. A modern cashier solution for retail businesses.",
    img: "/place.png",
    link: "https://github.com/cleyxcode/filament-kasir",
    demo: "#",
    tech: "PHP/Filament",
    updated: "Mar 15, 2025"
  },
  {
    id: 17,
    title: "Playlist Manager",
    desc: "A music playlist management app built with PHP. Organize and manage your favorite songs.",
    img: "/place.png",
    link: "https://github.com/cleyxcode/PlayListMusic",
    demo: "#",
    tech: "PHP",
    updated: "Mar 13, 2025"
  },
  {
    id: 18,
    title: "Movie Watchlist",
    desc: "A movie watchlist app built with Laravel Blade. Track and manage movies you want to watch.",
    img: "/place.png",
    link: "https://github.com/cleyxcode/WatchListMovie",
    demo: "#",
    tech: "Blade",
    updated: "Mar 12, 2025"
  },
];

function Card() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {items.map((item, index) => (
        <motion.div 
          key={item.id} 
          className="flex"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          <div className="card shadow-xl bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <figure className="relative overflow-hidden">
              <img 
                src={item.img} 
                alt={item.title}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
               
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-white text-lg font-bold mb-2">
                {item.title}
              </h2>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 bg-blue-500 bg-opacity-30 text-blue-200 text-xs rounded-full">
                  {item.tech}
                </span>
                <span className="text-gray-400 text-xs">{item.updated}</span>
              </div>
              <p className="text-gray-200 text-sm line-clamp-3 mb-4">
                {item.desc}
              </p>
              <div className="card-actions justify-between items-center mt-auto">
                <Link href={item.link} target="_blank" rel="noopener noreferrer">
                  <motion.button 
                    className="px-4 py-2 text-sm bg-black bg-opacity-70 text-white hover:bg-opacity-90 font-semibold rounded-lg flex items-center gap-2 transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="text-lg" />
                    GitHub
                  </motion.button>
                </Link>
                {item.demo !== "#" && (
                  <Link href={item.demo} target="_blank" rel="noopener noreferrer">
                    <motion.button 
                      className="px-4 py-2 text-sm bg-white bg-opacity-20 text-white hover:bg-opacity-30 font-semibold rounded-lg flex items-center gap-2 transition-all duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <PiProjectorScreen className="text-lg" />
                      Demo
                    </motion.button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Card;

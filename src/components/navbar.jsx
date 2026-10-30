"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import NavLink from "./navLink";
import { motion } from "framer-motion";
import GithubCorner from "react-github-corner";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const topVariants = {
    closed: { rotate: 0 },
    opened: { rotate: 45, backgroundColor: "rgb(255,255,255)" },
  };
  const centerVariants = { closed: { opacity: 1 }, opened: { opacity: 0 } };
  const bottomVariants = {
    closed: { rotate: 0 },
    opened: { rotate: -45, backgroundColor: "rgb(255,255,255)" },
  };
  const listVariants = {
    closed: { x: "100vw" },
    opened: {
      x: 0,
      transition: { when: "beforeChildren", staggerChildren: 0.2 },
    },
  };
  const listItemVariants = {
    closed: { x: -10, opacity: 0 },
    opened: { x: 0, opacity: 1 },
  };

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeMenu();
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) closeMenu();
    };
    const handleHashChange = () => closeMenu();

    document.body.classList.add("menu-open");
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      document.body.classList.remove("menu-open");
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [open]);

  const mobileOverlay = open && typeof document !== "undefined"
    ? createPortal(
        <div className="fixed inset-0 z-[99999] h-[100dvh] min-h-screen w-screen bg-[#0a0a1a] text-white md:hidden">
          <button
            type="button"
            className="fixed right-4 top-4 z-[100001] flex h-10 w-10 flex-col items-center justify-center gap-[6px] rounded bg-transparent"
            onClick={closeMenu}
            aria-label="Close menu"
            aria-expanded="true"
          >
            <span className="block h-1 w-10 origin-center rotate-45 rounded bg-white" />
            <span className="block h-1 w-10 origin-center -rotate-45 rounded bg-white" />
          </button>
          <nav className="flex h-full w-full flex-col items-center justify-center gap-8 text-4xl" aria-label="Mobile navigation">
            {links.map((link) => (
              <motion.div variants={listItemVariants} initial="closed" animate="opened" key={link.title}>
                <Link href={link.url} onClick={closeMenu}>
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>,
        document.body
      )
    : null;

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl z-50 relative">
      <GithubCorner
        href="https://github.com/cleyxcode"
        target="_blank"
        bannerColor="#000"
        octoColor="#fff"
        size={80}
        direction="left"
        svgStyle={{ mixBlendMode: "darken" }}
      />

      <div className="hidden md:flex w-1/3 text-2xl font-bold font-style: italic">
        <Link href="/">
          <span className="text-white underline decoration-sky-400">CleyX</span>
          <span className="text-sky-400 underline decoration-white">Code</span>
        </Link>
      </div>

      <div className="hidden md:flex gap-4 w-1/3 text-white">
        {links.map((link) => <NavLink link={link} key={link.title} />)}
      </div>

      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-[110] relative"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <motion.div variants={topVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded origin-left" />
          <motion.div variants={centerVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded" />
          <motion.div variants={bottomVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded origin-left" />
        </button>
      </div>
      {mobileOverlay}
    </div>
  );
};

export default Navbar;

"use client";

import BubbleMenu from "./BubbleMenu";

const items = [
  {
    label: "home",
    href: "/",
    ariaLabel: "Home",
    rotation: -8,
    hoverStyles: { bgColor: "#3b82f6", textColor: "#ffffff" },
  },
  {
    label: "about",
    href: "/about",
    ariaLabel: "About",
    rotation: 8,
    hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" },
  },
  {
    label: "portfolio",
    href: "/portfolio",
    ariaLabel: "Portfolio",
    rotation: 8,
    hoverStyles: { bgColor: "#f59e0b", textColor: "#ffffff" },
  },
  {
    label: "contact",
    href: "/contact",
    ariaLabel: "Contact",
    rotation: -8,
    hoverStyles: { bgColor: "#8b5cf6", textColor: "#ffffff" },
  },
];

const Navbar = () => (
  <BubbleMenu
    logo={
      <span className="whitespace-nowrap text-base font-bold italic tracking-tight">
        <span className="text-slate-900">CleyX</span>
        <span className="text-sky-500">Code</span>
      </span>
    }
    items={items}
    menuAriaLabel="Toggle navigation"
    menuBg="#ffffff"
    menuContentColor="#111827"
    useFixedPosition={false}
    animationEase="back.out(1.5)"
    animationDuration={0.5}
    staggerDelay={0.12}
  />
);

export default Navbar;

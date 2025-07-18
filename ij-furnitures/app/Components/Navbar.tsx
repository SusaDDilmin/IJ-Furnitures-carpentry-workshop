"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Optional: You can also use Heroicons or SVGs

import gsap from "gsap";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);
  const xRef = useRef(null);
  const menuPanelRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (!menuPanelRef.current) return;
    if (isOpen) {
      // Show X icon
      gsap.to(menuRef.current, { opacity: 0, rotate: 90, duration: 0.3 });
      gsap.fromTo(
        xRef.current,
        { opacity: 0, rotate: -90 },
        { opacity: 1, rotate: 0, duration: 0.3, delay: 0.15 }
      );

      // Slide in the menu panel from right
      gsap.fromTo(
        menuPanelRef.current,
        { x: "100%" },
        { x: 0, duration: 0.3, ease: "none" }
      );

      // Animate menu items one-by-one
      gsap.fromTo(
        menuPanelRef.current.querySelectorAll(".menu-item"),
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.1,
          delay: 0.2,
          ease: "none",
        }
      );
    } else {
      // Show Menu icon
      gsap.to(xRef.current, { opacity: 0, rotate: 90, duration: 0.3 });
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, rotate: -90 },
        { opacity: 1, rotate: 0, duration: 0.3, delay: 0.15 }
      );
    }
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-3xl lg:text-4xl font-extrabold text-[#4B2E2E]">
          🪚 CraftWorks
        </div>

        {/* Hamburger for mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#4B2E2E] transition-transform duration-300 ease-in-out"
          >
            {isOpen ? (
              <div ref={xRef}>
                <X size={28} className="transform rotate-90" />
              </div>
            ) : (
              <div ref={menuRef}>
                <Menu
                  size={28}
                  className="transform scale-100 hover:scale-125"
                />
              </div>
            )}
          </button>
        </div>

        {/* Nav links */}
        <ul
          ref={menuPanelRef}
          className={`${
            isOpen ? "block" : "hidden"
          } absolute lg:static top-15 left-0 w-full lg:w-auto bg-white lg:bg-transparent px-6 py-4 lg:p-0 space-y-4 lg:space-y-0 lg:flex lg:items-center lg:gap-6 text-[#4B2E2E] font-semibold text-lg transition-all duration-300 shadow-md lg:shadow-none z-50 `}
        >
          <li>
            <a
              href="#home"
              className="menu-item hover:text-[#6B4C3B] transition hover:drop-shadow-[0_0_6px_rgba(107,76,59,0.6)]"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="menu-item hover:text-[#6B4C3B] transition hover:drop-shadow-[0_0_6px_rgba(107,76,59,0.6)]"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              className="menu-item hover:text-[#6B4C3B] transition hover:drop-shadow-[0_0_6px_rgba(107,76,59,0.6)]"
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="#team"
              className="menu-item hover:text-[#6B4C3B] transition hover:drop-shadow-[0_0_6px_rgba(107,76,59,0.6)]"
            >
              Our Team
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="menu-item block text-center bg-[#4B2E2E] text-white px-5 py-2 rounded-full hover:bg-[#6B4C3B] transition"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, House, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center bg-white text-gray-800 px-4 py-6 md:px-10 md:py-8 shadow-lg sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-4">
            <House
            size={36}
            className="text-amber-900 border-2 border-amber-900 rounded-full p-1"
            />
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            IJ Furnitures
            </h1>
        </Link>

        <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
        >
            {isOpen ? (
                <X size={32} className="text-gray-800" />
                ) : (
                <Menu size={32} className="text-gray-800" />
            )}
        </button>

      {isOpen && (
            <div className="md:hidden absolute top-20 right-4 w-64 bg-white rounded-xl shadow-2xl p-5 flex flex-col text-base font-medium text-gray-700 animate-slideDown z-50">
                <Link
                    href="/"
                    className="hover:text-amber-700 transition-colors"
                >
                    Home
                </Link>
                <hr className="my-2 border-gray-200" />

                <Link
                    href="/pages/gallery"
                    className="hover:text-amber-700 transition-colors"
                >
                    Gallery
                </Link>
                <hr className="my-2 border-gray-200" />

                <Link
                    href="/pages/about"
                    className="hover:text-amber-700 transition-colors"
                >
                    Who we are
                </Link>
                <hr className="my-2 border-gray-200" />

                <Link
                    href="/pages/contact"
                    className="hover:text-amber-700 transition-colors"
                >
                    Contact Us
                </Link>
            </div>
        )}

        {/* Desktop menu */}
        <div className="hidden md:flex gap-10 text-lg font-semibold items-center">
            <Link
                href="/"
                className="hover:text-amber-700 transition-colors"
            >
                Home
            </Link>
            <Link
                href="/pages/gallery"
                className="hover:text-amber-700 transition-colors"
            >
                Gallery
            </Link>
            <Link
                href="/pages/about"
                className="hover:text-amber-700 transition-colors"
            >
                Who we are
            </Link>
            <Link
                href="/pages/contact"
                className="bg-amber-900 text-white px-4 py-2 rounded-full hover:bg-amber-800 transition-colors"
            >
                Contact Us
            </Link>
        </div>
    </nav>
  );
}

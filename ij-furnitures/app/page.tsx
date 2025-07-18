"use client";

import Link from "next/link";
import ServiceCard from "./Components/HomePageComponents/ServiceCard";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Custom Furniture",
    description: "...",
    link: "/pages/gallery",
  },
  {
    title: "Roof Construction",
    description: "...",
    link: "/pages/gallery",
  },
  {
    title: "Wood Carving",
    description: "...",
    link: "/pages/gallery",
  },
  {
    title: "Cabinet Making",
    description: "...",
    link: "/pages/gallery",
  },
];

export default function Home() {
  const heroRef = useRef(null);

  const containerRef = useRef(null);
  const cardsWrapperRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".service-card");

    gsap.to(cards, {
      xPercent: -100 * (cards.length - 0.85),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${cards.length * 100}%`,
        pin: true,
        scrub: 1,
        snap: 1 / (cards.length - 1),
      },
    });
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".hero-buttons", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
        },
      });
    }, heroRef);

    return () => ctx.revert(); // Clean-up GSAP context on unmount
  }, []);

  return (
    <div>
      {
        // Hero part of the Home
      }
      <div
        className="bg-[url('/images/HomeImgTwo.avif')] md:bg-[url('/images/HomeImgOne.jpg')] bg-cover bg-right w-full"
        style={{ height: "calc(100vh - 84px)" }}
        ref={heroRef}
      >
        <div className="bg-black/10 backdrop-blur-md h-full w-full">
          <div className="flex flex-col justify-center h-full px-6 py-16 md:px-12 lg:px-24 gap-8">
            {/* Headline */}
            <div className="flex flex-col gap-2 md:gap-3 text-white">
              <h1 className="hero-text text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                Expert Carpentry &
              </h1>
              <h1 className="hero-text text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                Woodworking
              </h1>
              <h1 className="hero-text text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                Services
              </h1>
            </div>

            {/* Subheading */}
            <p className="hero-text text-gray-200 text-base sm:text-lg md:text-2xl lg:text-3xl max-w-4xl font-medium">
              We specialize in handcrafted wooden furniture, roof construction,
              and detailed carvings for homes and businesses. Built with care.
              Designed to impress.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
              <Link
                href="/pages/gallery"
                className="hero-buttons bg-amber-900 text-white text-base sm:text-lg font-semibold px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors text-center"
              >
                View our work
              </Link>
              <Link
                href="/pages/contact"
                className="hero-buttons bg-white text-black text-base sm:text-lg font-semibold px-6 py-3 rounded-lg hover:bg-amber-200 transition-colors text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {
        // Second part of the Home
      }
      <div className="w-full bg-[#fdf5ee] min-h-screen flex">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full py-10 md:py-20">
          <section
            ref={containerRef}
            className="relative w-full overflow-hidden"
          >
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 mt-10 gap-4">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#4B2E2E]">
                  Our Services
                </h2>
                <p className="text-gray-600 md:text-lg mt-2 max-w-xl pl-1">
                  We specialize in high-quality carpentry and woodworking
                  services, bringing decades of experience to every project.
                </p>
              </div>
              <Link
                href="/pages/gallery"
                className="bg-[#4B2E2E] text-white text-base md:text-lg font-semibold px-6 py-3 rounded-lg hover:bg-[#6B4C3B] transition"
              >
                Learn More
              </Link>
            </div>

            {/* Services Cards Grid */}
            <div
              ref={cardsWrapperRef}
              className="flex space-x-4 sm:space-x-8 w-max h-[550px] sm:h-[600px] px-4 sm:px-6"
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className="service-card shrink-0 w-[90vw] sm:w-[380px] h-[500px] sm:h-[550px] bg-white rounded-2xl shadow-xl flex flex-col justify-between items-start p-5 sm:p-7 transition-all scale-70 opacity-50"
                >
                  <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-800">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-5 text-base sm:text-lg leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href={service.link}
                    className="text-blue-600 hover:underline text-base sm:text-lg"
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/*
        Our Team Section
       */}
      <div>
        
      </div>
    </div>
  );
}

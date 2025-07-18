"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Custom Furniture",
    description: "Handcrafted pieces tailored to your space and style.",
    link: "/pages/gallery",
  },
  {
    title: "Roof Construction",
    description: "Durable, beautiful roofs built with expert carpentry.",
    link: "/pages/gallery",
  },
  {
    title: "Wood Carving",
    description: "Intricate carvings for furniture and decor.",
    link: "/pages/gallery",
  },
  {
    title: "Cabinet Making",
    description: "Functional, elegant cabinets for every room.",
    link: "/pages/gallery",
  },
];

function ServiceCard({ title, description, link }: (typeof services)[0]) {
  return (
    <div className="service-card shrink-0 w-[90vw] sm:w-[380px] h-[500px] sm:h-[550px] bg-white rounded-2xl shadow-xl flex flex-col justify-between items-start p-7 transition-all scale-90 opacity-80 hover:scale-100 hover:opacity-100 hover:shadow-2xl duration-300">
      <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-[#4B2E2E]">
        {title}
      </h2>
      <p className="text-gray-600 mb-5 text-base sm:text-lg leading-relaxed">
        {description}
      </p>
      <Link
        href={link}
        className="text-amber-700 hover:underline text-base sm:text-lg font-semibold"
      >
        Learn More →
      </Link>
    </div>
  );
}

export default function Home() {
  const heroRef = useRef(null);
  const containerRef = useRef(null);

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
    return () => ctx.revert();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div
        className="bg-[url('/images/HomeImgTwo.avif')] md:bg-[url('/images/HomeImgOne.jpg')] bg-cover bg-right w-full"
        style={{ height: "calc(100vh - 84px)" }}
        ref={heroRef}
      >
        <div className="bg-black/20 backdrop-blur-md h-full w-full">
          <div className="flex flex-col justify-center h-full px-6 py-16 md:px-12 lg:px-24 gap-8">
            <div className="flex flex-col gap-2 md:gap-3 text-white">
              <h1 className="hero-text text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-lg">
                Expert Carpentry &
              </h1>
              <h1 className="hero-text text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-lg">
                Woodworking
              </h1>
              <h1 className="hero-text text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-lg">
                Services
              </h1>
            </div>
            <p className="hero-text text-gray-200 text-base sm:text-lg md:text-2xl lg:text-3xl max-w-4xl font-medium">
              We specialize in handcrafted wooden furniture, roof construction,
              and detailed carvings for homes and businesses. Built with care.
              Designed to impress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
              <Link
                href="/pages/gallery"
                className="hero-buttons bg-amber-900 text-white text-base sm:text-lg font-semibold px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors text-center shadow-md"
              >
                View our work
              </Link>
              <Link
                href="/pages/contact"
                className="hero-buttons bg-white text-black text-base sm:text-lg font-semibold px-6 py-3 rounded-lg hover:bg-amber-200 transition-colors text-center shadow-md"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full bg-[#fdf5ee] min-h-screen flex">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full py-10 md:py-20">
          <section
            ref={containerRef}
            className="relative w-full overflow-hidden"
          >
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
                className="bg-[#4B2E2E] text-white text-base md:text-lg font-semibold px-6 py-3 rounded-lg hover:bg-[#6B4C3B] transition shadow"
              >
                Learn More
              </Link>
            </div>
            <div className="flex space-x-4 sm:space-x-8 w-max h-[550px] sm:h-[600px] px-4 sm:px-6">
              {services.map((service, idx) => (
                <ServiceCard key={idx} {...service} />
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Team Section */}
      <section className="w-full min-h-screen bg-gradient-to-br from-[#f9e7d6] via-[#f3e5d8] to-[#e7c9a9] animate-gradient-x py-16 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#4B2E2E] mb-4 tracking-tight">
              Meet Our Team
            </h2>
            <p className="text-gray-700 text-lg md:text-xl max-w-2xl">
              Our skilled craftsmen are dedicated to delivering the highest
              quality woodworking services. With years of experience and a
              passion for detail, we bring your vision to life.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 rounded-3xl p-8 md:p-12 bg-white shadow-lg">
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-[250px] h-[300px] md:w-[320px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/Worker.png"
                  alt="Edward Emmanuel"
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  priority
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl md:text-4xl font-bold text-[#4B2E2E] mb-3">
                Hello! I&apos;m{" "}
                <span className="text-amber-700">Edward Emmanuel</span>
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                Head of our woodworking team with over{" "}
                <span className="font-semibold text-[#4B2E2E]">20 years</span>{" "}
                of experience in crafting high-quality wooden furniture. My
                specialty lies in intricate wooden carvings, and I take great
                pride in bringing each piece to life with skill and care.
              </p>
              <div className="flex gap-4 mt-4">
                <span className="inline-block bg-[#e7c9a9] text-[#4B2E2E] px-4 py-2 rounded-full font-semibold shadow text-center">
                  Wood Carving Expert
                </span>
                <span className="inline-block bg-[#fdf5ee] text-[#4B2E2E] px-4 py-2 rounded-full font-semibold shadow text-center">
                  20+ Years Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

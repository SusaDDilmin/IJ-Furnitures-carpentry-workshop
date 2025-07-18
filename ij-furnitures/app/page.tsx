"use client";

import Link from "next/link";
import ServiceCard from "./Components/HomePageComponents/ServiceCard";

export default function Home() {
  return (
    <div className="">
      {
        // First part of the Home
      }
      <div
        className="bg-[url('/images/HomeImgTwo.avif')] md:bg-[url('/images/HomeImgOne.jpg')] bg-cover bg-right w-full"
        style={{ height: "calc(100vh - 84px)" }}
      >
        <div className="bg-black/10 backdrop-blur-md h-full w-full">
          <div className="flex flex-col justify-center h-full px-6 py-16 md:px-12 lg:px-24 gap-8">
            {/* Headline */}
            <div className="flex flex-col gap-2 md:gap-3 text-white">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                Expert Carpentry &
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                Woodworking
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                Services
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-gray-200 text-base sm:text-lg md:text-2xl lg:text-3xl max-w-4xl font-medium">
              We specialize in handcrafted wooden furniture, roof construction,
              and detailed carvings for homes and businesses. Built with care.
              Designed to impress.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
              <Link
                href="/pages/gallery"
                className="bg-amber-900 text-white text-base sm:text-lg font-semibold px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors text-center"
              >
                View our work
              </Link>
              <Link
                href="/pages/contact"
                className="bg-white text-black text-base sm:text-lg font-semibold px-6 py-3 rounded-lg hover:bg-amber-200 transition-colors text-center"
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
      <div className="h-screen w-100vh">
        <div className=" mx-auto px-4 md:px-8 py-4 md:py-20 flex flex-col gap-3 md:gap-0">
          <div className="flex flex-row justify-between items-center">
            <h1 className=" text-3xl md:text-5xl font-bold">Our Services</h1>
            <Link
              href="/pages/gallery"
              className="bg-gray-900 text-white md:text-lg font-semibold px-4 py-2 md:px-6 md:py-3 rounded-lg mt-4 inline-block hover:bg-gray-700 transition-colors"
            >
              Learn more
            </Link>
          </div>
          <p className="md:text-xl text-gray-600">
            We specialize in high-quality carpentry and woodworking services,
            bringing decades of experience to every project.
          </p>
        </div>
        <div className="w-full h-500px flex justify-center items-center">
          <div className="flex overflow-hidden  ">
            <ServiceCard
              title="Custom Furniture"
              description="From custom furniture to complete renovations, we bring your vision to life with exceptional craftsmanship."
              link="/pages/gallery"
            />
            <ServiceCard
              title="Custom Furniture"
              description="From custom furniture to complete renovations, we bring your vision to life with exceptional craftsmanship."
              link="/pages/gallery"
            />
            <ServiceCard
              title="Custom Furniture"
              description="From custom furniture to complete renovations, we bring your vision to life with exceptional craftsmanship."
              link="/pages/gallery"
            />
            <ServiceCard
              title="Custom Furniture"
              description="From custom furniture to complete renovations, we bring your vision to life with exceptional craftsmanship."
              link="/pages/gallery"
            />
            <ServiceCard
              title="Custom Furniture"
              description="From custom furniture to complete renovations, we bring your vision to life with exceptional craftsmanship."
              link="/pages/gallery"
            />
            <ServiceCard
              title="Custom Furniture"
              description="From custom furniture to complete renovations, we bring your vision to life with exceptional craftsmanship."
              link="/pages/gallery"
            />
            <ServiceCard
              title="Custom Furniture"
              description="From custom furniture to complete renovations, we bring your vision to life with exceptional craftsmanship."
              link="/pages/gallery"
            />
            <ServiceCard
              title="Custom Furniture"
              description="From custom furniture to complete renovations, we bring your vision to life with exceptional craftsmanship."
              link="/pages/gallery"
            />
            <ServiceCard
              title="Custom Furniture"
              description="From custom furniture to complete renovations, we bring your vision to life with exceptional craftsmanship."
              link="/pages/gallery"
            />
            <ServiceCard
              title="Custom Furniture"
              description="From custom furniture to complete renovations, we bring your vision to life with exceptional craftsmanship."
              link="/pages/gallery"
            />
            <ServiceCard
              title="Custom Furniture"
              description="From custom furniture to complete renovations, we bring your vision to life with exceptional craftsmanship."
              link="/pages/gallery"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

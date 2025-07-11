"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      {
        // First part of the Home
      }
      <div className="bg-[url('/images/HomeImgTwo.avif')] md:bg-[url('/images/HomeImgOne.jpg')] w-full bg-right bg-cover" style={{height: 'calc(100vh - 84px)' }}>
        <div className="bg-black/10 backdrop-blur-md h-full w-full">

          <div className="py-20 px-8 md:p-20 md:pt-30 flex flex-col gap-6" >
            <div className="flex flex-col gap-2">
              <h1 className="text-white text-3xl md:text-7xl font-bold">Expert Carpentry &</h1> 
              <h1 className="text-white text-3xl md:text-7xl font-bold">Woodworking</h1>
              <h1 className="text-white text-3xl md:text-7xl font-bold">Services</h1>
            </div>

            <p className="text-white text-xl md:text-4xl font-medium text-gray-300">Transform your space with our professional carpentry services. From custom furniture to
              complete renovations, we bring your vision to life with exceptional craftsmanship.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6">
              <Link href="/pages/gallery" className="bg-amber-900 text-white text-lg font-semibold px-6 py-2 md:py-3 rounded-lg mt-4 inline-block hover:bg-amber-700 transition-colors">
                View our work
              </Link>
              <Link href="/pages/gallery" className="bg-white text-black text-lg font-semibold px-6 py-2 md:py-3 rounded-lg mt-4 inline-block hover:bg-amber-200 transition-colors">
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
          <div className="flex flex-row justify-between items-center" >
            <h1 className=" text-3xl md:text-5xl font-bold" >Our Services</h1>
            <Link href="/pages/gallery" className="bg-gray-900 text-white md:text-lg font-semibold px-4 py-2 md:px-6 md:py-3 rounded-lg mt-4 inline-block hover:bg-gray-700 transition-colors">
                Learn more
            </Link>
          </div>
          <p className="md:text-xl text-gray-600" >We specialize in high-quality carpentry and woodworking services, bringing decades of experience to every project.</p>
        </div>
        <div className="w-full h-500px flex justify-center items-center">
          <h1>Service Card...</h1>
        </div>
      </div>
    </div>
  );
}

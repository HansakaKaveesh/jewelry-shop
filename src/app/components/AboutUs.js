"use client"
import React, { useEffect } from 'react';
import "aos/dist/aos.css";  // Import AOS styles
import AOS from "aos";      // Import AOS library

export default function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Optional: Animation duration
      easing: 'ease-in-out', // Optional: Easing function for animations
      once: true, // Optional: Animation will only happen once while scrolling
    });
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image Section */}
          <div
  className="relative group w-full max-w-xl mx-auto overflow-hidden rounded-2xl shadow-2xl"
  data-aos="fade-up"
>
  <img
    src="https://blogapi.perrian.com/wp-content/uploads/2022/03/5-Must-Have-Diamond-Jewellery-Pieces-You-Cant-Ignore.jpg"
    alt="Artisan crafting jewelry"
    className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-500 ease-in-out"
    data-aos="zoom-in"
  />
  
  {/* Gradient overlay on hover */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>

  {/* Text overlay */}
  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
    <h2 className="text-xl font-bold">Elegant Diamond Jewelry</h2>
    <p className="text-sm">Crafted with precision and passion.</p>
  </div>
</div>

          {/* Content Section */}
          <div className="space-y-6" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              <span className="bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent">
                Crafting Timeless Beauty
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              At <span className="text-yellow-600 font-semibold">JewelryGlow</span>, we transform precious metals and 
              gemstones into wearable art. Each piece is a testament to our passion for 
              craftsmanship and attention to detail.
            </p>

            <div className="grid grid-cols-2 gap-4 py-4">
              {/* Feature Items */}
              <div className="flex items-center space-x-3" data-aos="fade-up">
                <div className="p-2 bg-yellow-100 rounded-full">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-medium text-gray-600">Ethically Sourced Materials</span>
              </div>

              <div className="flex items-center space-x-3" data-aos="fade-up" data-aos-delay="100">
                <div className="p-2 bg-yellow-100 rounded-full">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5" />
                  </svg>
                </div>
                <span className="font-medium text-gray-600">Artisan Crafted</span>
              </div>

              <div className="flex items-center space-x-3" data-aos="fade-up" data-aos-delay="200">
                <div className="p-2 bg-yellow-100 rounded-full">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <span className="font-medium text-gray-600">Secure Shopping</span>
              </div>

              <div className="flex items-center space-x-3" data-aos="fade-up" data-aos-delay="300">
                <div className="p-2 bg-yellow-100 rounded-full">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <span className="font-medium text-gray-600">Lifetime Warranty</span>
              </div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed" data-aos="fade-up">
              Our team of master jewelers combines traditional techniques with modern 
              innovation, ensuring every creation meets our exacting standards of 
              quality and beauty.
            </p>

            <button 
              className="mt-6 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white px-8 py-3 rounded-full hover:from-yellow-700 hover:to-yellow-800 transition-all duration-300"
              data-aos="fade-up" 
              data-aos-delay="400"
            >
              Meet Our Artisans
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Collections() {
  const categories = [
    {
      name: 'Rings',
      image: 'https://atoleajewelry.com/cdn/shop/files/stackable-ring-set.jpg?v=1710161166&width=2430',
      description: 'Timeless elegance for your fingers',
      items: '200+ Designs'
    },
    {
      name: 'Necklaces',
      image: 'https://kinclimg6.bluestone.com/f_jpg,c_scale,w_1024,q_80,b_rgb:f0f0f0/giproduct/BISM0018N01_YAA22XXXXXXXXXXXX_ABCD00-PICS-00001-1024-73331.png',
      description: 'Statement pieces for every occasion',
      items: '150+ Styles'
    },
    {
      name: 'Earrings',
      image: 'https://everstylish.com/media/catalog/product/cache/fc1e90810f81d5d5f869fad087b9d639/j/e/jew221128-t.jpg',
      description: 'Sparkling accents for your beauty',
      items: '180+ Pairs'
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, // Set animation duration
      easing: 'ease-in-out', // Set animation easing
      once: true, // Trigger animation once
    });
  }, []);

  return (
    <section className="py-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            <span className="bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent">
              Our Collections
            </span>
          </h2>
          <p className="text-base text-gray-600">Discover exquisite craftsmanship in every piece</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              data-aos="fade-up" // Add your animation here
            >
              {/* Image section with smaller aspect ratio */}
              <div className="relative aspect-[4/3]">
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-yellow-900/20" />
              </div>

              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="transform group-hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="text-lg md:text-xl font-bold mb-1 truncate">{cat.name}</h3>
                  <p className="text-xs md:text-sm text-gray-200 mb-2 line-clamp-2">{cat.description}</p>

                  {/* Button row */}
                  <div className="flex items-center justify-between transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                    <span className="text-xs font-medium">{cat.items}</span>
                    <button className="bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded-full text-xs font-medium transition-colors duration-200">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

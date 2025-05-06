"use client";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function PopularProducts() {
  const products = [
    { 
      name: 'Diamond Ring', 
      price: '$499',
      originalPrice: '$699',
      image: 'https://www.brilliance.com/cdn-cgi/image/f=webp,width=1440,height=1440,quality=90/sites/default/files/vue/collections/engagement-rings-diamond_og.jpg',
      rating: 4.8,
      reviews: 142,
      isNew: true
    },
    { 
      name: 'Pearl Necklace', 
      price: '$349',
      image: 'https://yokolondon.com/cdn/shop/files/Q2362NLET_M0.jpg?v=1728899127&width=1946',
      rating: 4.6,
      reviews: 98,
      isSale: true
    },
    { 
      name: 'Gold Earrings', 
      price: '$229',
      image: 'https://jewelemarket.com/cdn/shop/files/12861051GL_8812bc23-6c72-47d8-bc76-882db53a944f.jpg?v=1743154976',
      rating: 4.9,
      reviews: 205
    },
    { 
      name: 'Gold Earrings', 
      price: '$229',
      image: 'https://jewelemarket.com/cdn/shop/files/12861051GL_8812bc23-6c72-47d8-bc76-882db53a944f.jpg?v=1743154976',
      rating: 4.9,
      reviews: 205
    },
    { 
      name: 'Pearl Necklace', 
      price: '$349',
      image: 'https://yokolondon.com/cdn/shop/files/Q2362NLET_M0.jpg?v=1728899127&width=1946',
      rating: 4.6,
      reviews: 98,
      isSale: true
    },
    { 
      name: 'Pearl Necklace', 
      price: '$349',
      image: 'https://yokolondon.com/cdn/shop/files/Q2362NLET_M0.jpg?v=1728899127&width=1946',
      rating: 4.6,
      reviews: 98,
      isSale: true
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            <span className="bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent">
              Trending Now
            </span>
          </h2>
          <p className="text-base text-gray-600">Discover our most loved pieces</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, i) => (
            <div 
              key={i}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              data-aos="fade-up"
            >
              {/* Badges */}
              <div className="absolute top-3 right-3 z-10 flex gap-1.5">
                {product.isNew && (
                  <span className="bg-yellow-600 text-white px-2 py-0.5 rounded-full text-xs font-medium">
                    New
                  </span>
                )}
                {product.isSale && (
                  <span className="bg-yellow-700 text-white px-2 py-0.5 rounded-full text-xs font-medium">
                    Sale
                  </span>
                )}
              </div>

              {/* Image */}
              <div className="relative h-52 overflow-hidden" data-aos="zoom-in">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Info */}
              <div className="p-4" data-aos="fade-up">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>

                <div className="flex items-center gap-1 mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, j) => (
                      <svg
                        key={j}
                        className={`w-4 h-4 ${j < Math.floor(product.rating) ? 'fill-current' : 'fill-gray-300'}`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">({product.reviews})</span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg font-bold text-yellow-600">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                  )}
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200">
                    Add
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center bg-white border-2 border-gray-200 hover:border-yellow-500 rounded-full transition-all duration-200">
                    <svg 
                      className="w-5 h-5 text-gray-600 hover:text-yellow-600"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video 
  autoPlay 
  loop 
  muted 
  preload="auto"
  className="absolute top-0 left-0 w-full h-full object-cover z-0"
>
  <source src="/hero back.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>


      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-amber-900/60"></div>

      {/* Animated particles background */}
      
      {/* Content container */}
      <div className="relative text-center px-4 max-w-6xl mx-auto">
        <div className="space-y-6 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
            <TypeAnimation
              sequence={[
                'Timeless Elegance', 2000,
                'Luxury Redefined', 2000,
                'Jewelry Collections', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 bg-clip-text text-transparent animate-gradient-shift block"
            />
          </h2>
          
          <div className="relative w-32 h-1 mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500 to-transparent w-full h-full animate-line-expand"></div>
          </div>
          
          <p className="mt-4 text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed text-amber-50 drop-shadow-md">
            Experience luxury redefined through our meticulously crafted jewelry pieces
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button 
              className="relative bg-gradient-to-br from-amber-600 to-amber-800 px-8 py-3 rounded-full text-white 
                         transform transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-amber-500/30
                         focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2
                         group cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2 ">
                <span>Shop Collection</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
            <button 
              className="border-2 border-amber-200 px-8 py-3 rounded-full bg-white/5 backdrop-blur-sm
                         hover:bg-white/20 transform transition-all duration-300 hover:scale-105
                         focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2
                         shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Custom Designs
            </button>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="absolute left-8 bottom-1/3 hidden md:flex flex-col gap-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="group">
          <FaFacebookF className="text-white hover:text-amber-500 transition-all duration-300 w-5 h-5 group-hover:scale-125" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="group">
          <FaInstagram className="text-white hover:text-amber-500 transition-all duration-300 w-5 h-5 group-hover:scale-125" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="group">
          <FaTwitter className="text-white hover:text-amber-500 transition-all duration-300 w-5 h-5 group-hover:scale-125" />
        </a>
        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="group">
          <FaPinterest className="text-white hover:text-amber-500 transition-all duration-300 w-5 h-5 group-hover:scale-125" />
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 group">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <div className="w-8 h-8 rounded-full border-2 border-amber-200 flex items-center justify-center">
            <svg 
              className="w-4 h-4 text-white transform group-hover:scale-125 transition-transform"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
          <span className="text-sm text-amber-200 opacity-0 group-hover:opacity-100 transition-opacity">
            Discover More
          </span>
        </div>
      </div>

      {/* Floating element */}
      <div className="absolute top-20 right-8 animate-float">
        <div className="w-16 h-16 bg-amber-500/20 rounded-full backdrop-blur-sm"></div>
      </div>
    </section>
  );
}

"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-lg' 
        : 'bg-white/0 backdrop-blur-none shadow-none'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className={`text-2xl font-bold transition-colors duration-200 flex items-center ${
                isScrolled ? 'text-amber-700' : 'text-amber-600/90'
              } hover:text-amber-800`}
            >
              <span className="mr-2">💎</span>
              JewelryGlow
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['/', '/Shop', '/About', '/Gallary', '/Contact'].map((path) => (
              <Link 
                key={path}
                href={path} 
                className={`${
                  pathname === path 
                    ? 'text-amber-700' 
                    : `text-gray-600/90 ${isScrolled ? 'hover:text-amber-700' : 'hover:text-amber-600/90'}`
                } transition-colors duration-200 font-medium relative group`}
              >
                {path.split('/')[1] || 'Home'}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all group-hover:w-full ${
                  isScrolled ? 'bg-amber-700' : 'bg-amber-600/80'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-amber-700' 
                  : 'text-gray-600/90 hover:text-amber-600/90'
              } hover:bg-gray-100/30 focus:outline-none focus:ring-2 focus:ring-amber-500/80`}
              aria-label="Toggle menu"
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden pb-4 transition-all duration-300 ease-in-out`}>
          <div className={`pt-2 space-y-2 rounded-lg mx-4 ${
            isScrolled 
              ? 'bg-white/95' 
              : 'bg-white/80'
          } backdrop-blur-sm`}>
            {['/', '/Shop', '/About', '/Gallary', '/Contact'].map((path) => (
              <Link 
                key={path}
                href={path} 
                onClick={() => setIsOpen(false)}
                className={`${
                  pathname === path 
                    ? 'bg-amber-50/80 text-amber-700' 
                    : 'text-gray-600/90 hover:bg-amber-50/50'
                } block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200`}
              >
                {path.split('/')[1] || 'Home'}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
import { FaFacebookF, FaInstagram, FaTwitter, FaGem } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-yellow-50 text-yellow-900 py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
            <FaGem className="text-yellow-600" />
            Glamora
          </h2>
          <p className="text-sm">
            Where elegance meets style. Discover timeless jewelry crafted for you.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-yellow-600">Home</Link></li>
            <li><Link href="/shop" className="hover:text-yellow-600">Shop</Link></li>
            <li><Link href="/about" className="hover:text-yellow-600">About</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-600">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/faq" className="hover:text-yellow-600">FAQ</Link></li>
            <li><Link href="/returns" className="hover:text-yellow-600">Return Policy</Link></li>
            <li><Link href="/shipping" className="hover:text-yellow-600">Shipping Info</Link></li>
            <li><Link href="/privacy" className="hover:text-yellow-600">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-600">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-yellow-600">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-yellow-600">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-10 border-t border-yellow-200 pt-6">
        <div className="flex flex-col md:flex-row justify-center items-center gap-2">
          <div>
            &copy; {new Date().getFullYear()} Glamora Jewelry. All rights reserved.
          </div>
          <a 
  href="https://frithcode.com" 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-gray-500 hover:text-yellow-600 transition-colors flex items-center gap-2 justify-center"
>
  <img 
    src="/singale logo.png" // Replace with your actual logo URL
    alt="FrithCode Technologies" 
    className="w-6 h-6 filter hover:brightness-0.9 transition-all duration-300"
  />
  Developed by FrithCode Technologies
</a>
        </div>
      </div>
    </footer>
  );
}
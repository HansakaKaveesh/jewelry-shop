

export default function AboutUs() {
    return (
      <section className="py-20 bg-gradient-to-b from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Image Section */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-yellow-300 rounded-2xl transform rotate-2 -translate-x-4 -translate-y-4"></div>
              <img 
                src="https://blogapi.perrian.com/wp-content/uploads/2022/03/5-Must-Have-Diamond-Jewellery-Pieces-You-Cant-Ignore.jpg" 
                alt="Artisan crafting jewelry" 
                className="relative rounded-2xl shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-300"
              />
            </div>
  
            {/* Content Section */}
            <div className="space-y-6">
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
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-yellow-100 rounded-full">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-600">Ethically Sourced Materials</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-yellow-100 rounded-full">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5" />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-600">Artisan Crafted</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-yellow-100 rounded-full">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-600">Secure Shopping</span>
 </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-yellow-100 rounded-full">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-600">Lifetime Warranty</span>
                </div>
              </div>
  
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of master jewelers combines traditional techniques with modern 
                innovation, ensuring every creation meets our exacting standards of 
                quality and beauty.
              </p>
  
              <button className="mt-6 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white px-8 py-3 rounded-full hover:from-yellow-700 hover:to-yellow-800 transition-all duration-300">
                Meet Our Artisans
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
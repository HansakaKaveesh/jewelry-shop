const testimonials = [
  {
    name: "Amanda",
    role: "Fashion Blogger",
    text: "Absolutely stunning! The necklace I bought is elegant and high quality.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    name: "Jessica",
    role: "Entrepreneur",
    text: "Fast delivery and amazing customer service. Highly recommended!",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    name: "Lena",
    role: "Jewelry Designer",
    text: "Love the packaging and the design. Will definitely order again.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/3.jpg"
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent">
              Voices of Delight
            </span>
          </h2>
          <p className="text-lg text-gray-600">Discover why customers love JewelryGlow</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl p-8 transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-yellow-200 text-4xl">“</div>
              
              {/* Testimonial Content */}
              <div className="space-y-6">
                <p className="text-lg text-gray-700 italic relative z-10">"{t.text}"</p>
                
                {/* Rating Stars */}
                <div className="flex items-center justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-6 h-6 ${i < t.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* User Info */}
                <div className="flex items-center justify-center space-x-4">
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-yellow-200"
                  />
                  <div>
                    <p className="text-lg font-semibold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-600">{t.role}</p>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-b-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
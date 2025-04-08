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

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent">
              Our Collections
            </span>
          </h2>
          <p className="text-lg text-gray-600">Discover exquisite craftsmanship in every piece</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Image section with fixed aspect ratio */}
              <div className="relative aspect-[4/5]">
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-yellow-900/20" />
              </div>

              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 truncate">{cat.name}</h3>
                  <p className="text-sm md:text-base text-gray-200 mb-3 line-clamp-2">{cat.description}</p>

                  {/* Button: always visible on mobile, fades in on hover for desktop */}
                  <div className="flex items-center justify-between transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                    <span className="text-sm font-medium">{cat.items}</span>
                    <button className="bg-yellow-600 hover:bg-yellow-700 px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200">
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

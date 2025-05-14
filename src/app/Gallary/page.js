import React from 'react';

const Gallery = () => {
  const images = [
    'https://www.zavya.co/cdn/shop/files/LGD-RNG-10005-G_3_copy.jpg?v=1737727225',
    'https://www.culturesse.com.au/assets/full/BPLATECHAINGOLD.jpg?20220221145331',
    'https://www.flawlessmoissanite.com/cdn/shop/products/radiantring1.jpg?v=1615156410',
    'https://inkalloy.com/cdn/shop/files/madelyn-botanical-leaves-thin-circle-hoop-earrings-brass-brer2505-1127240900_550x.jpg?v=1738873386',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH1D2VYPCWiUloYxx-QsN8VwqIotbru_Ey0A&s',
    'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR06332-1YP900_11_listfront.jpg',
    'https://www.culturesse.com.au/assets/full/BPLATECHAINGOLD.jpg?20220221145331',
    'https://www.flawlessmoissanite.com/cdn/shop/products/radiantring1.jpg?v=1615156410',
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Header Section */}
      <section className="relative bg-[url('/bg3.jpg')] bg-cover bg-center py-24 px-6 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center p-8 backdrop-blur-sm bg-white/10 rounded-xl shadow-lg">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Gallery</h1>
          <p className="text-lg md:text-xl text-gray-200 mb-4">
            Discover timeless elegance through our curated collection of fine jewelry.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-lg group relative">
              <img
                src={src}
                alt={`Gallery item ${index + 1}`}
                className="w-full h-60 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white text-sm p-2 text-center opacity-0 group-hover:opacity-100 transition">
                Jewelry Item {index + 1}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;

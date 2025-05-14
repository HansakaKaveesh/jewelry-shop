"use client";
import { useState, useMemo } from "react";

const products = [
  {
    title: "Pure Aura Gold Ring",
    category: "Rings",
    price: "945.00$–1,000.00$",
    numericPrice: 972.5,
    rating: 5,
    carat: "14KT",
    brand: "Alighieri",
    image: "https://www.zavya.co/cdn/shop/files/LGD-RNG-10005-G_3_copy.jpg?v=1737727225",
  },
  {
    title: "Sculpted Link Gold Bracelet",
    category: "Necklaces & Pendants",
    price: "908.20$",
    numericPrice: 908.2,
    rating: 5,
    carat: "18KT",
    brand: "Ariel",
    image: "https://www.culturesse.com.au/assets/full/BPLATECHAINGOLD.jpg?20220221145331",
  },
  {
    title: "Twisted Radiance Diamond Ring",
    category: "Rings",
    price: "799.00$",
    numericPrice: 799.0,
    rating: 4,
    carat: "18KT",
    brand: "Cartier",
    image: "https://www.flawlessmoissanite.com/cdn/shop/products/radiantring1.jpg?v=1615156410",
  },
  {
    title: "Golden Horizon Pendant",
    category: "Necklaces & Pendants",
    price: "1,250.00$",
    numericPrice: 1250.0,
    rating: 4.5,
    carat: "22KT",
    brand: "Tiffany & Co.",
    image: "https://inkalloy.com/cdn/shop/files/madelyn-botanical-leaves-thin-circle-hoop-earrings-brass-brer2505-1127240900_550x.jpg?v=1738873386",
  },
  {
    title: "Lustrous Hoop Earrings",
    category: "Earrings",
    price: "465.00$",
    numericPrice: 465.0,
    rating: 4,
    carat: "14KT",
    brand: "Pandora",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH1D2VYPCWiUloYxx-QsN8VwqIotbru_Ey0A&s",
  },
  {
    title: "Bold Chain Statement Bracelet",
    category: "Bracelets",
    price: "780.00$",
    numericPrice: 780.0,
    rating: 5,
    carat: "18KT",
    brand: "Versace",
    image: "https://www.lialijewellery.com/pub/media/catalog/product/cache/1221331df2bec2255dbb827748d8a552/b/r/br0033463_ps_final_editedaaa_copy.webp",
  },
  {
    title: "Minimal Gold Band",
    category: "Rings",
    price: "320.00$",
    numericPrice: 320.0,
    rating: 3.5,
    carat: "10KT",
    brand: "Zara Fine",
    image: "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR06332-1YP900_11_listfront.jpg",
  },
  {
    title: "Floral Drop Diamond Earrings",
    category: "Earrings",
    price: "1,560.00$",
    numericPrice: 1560.0,
    rating: 5,
    carat: "22KT",
    brand: "Swarovski",
    image: "https://www.jewellery-maker.co.uk/wp-content/uploads/2022/04/154-earring-gold-diamond-floral-drop-1200x1200.jpg",
  },
  {
    title: "Infinity Gold Bangle",
    category: "Bracelets",
    price: "880.00$",
    numericPrice: 880.0,
    rating: 4.8,
    carat: "18KT",
    brand: "Bulgari",
    image: "https://www.zinatahiri.com/cdn/shop/products/KB3G23-presp-kr1_1024x1024.jpg?v=1659459178",
  }
  // Add more products...
];

export default function ShopPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState(2000);
  const [selectedCarats, setSelectedCarats] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [sortBy, setSortBy] = useState("default");

  // Get unique carats and brands from products
  const allCarats = ["All", ...new Set(products.map(p => p.carat))];
  const allBrands = ["All", ...new Set(products.map(p => p.brand))];

  const handleCaratChange = (carat) => {
    if (carat === "All") {
      setSelectedCarats([]);
    } else {
      setSelectedCarats(prev => 
        prev.includes(carat) ? prev.filter(c => c !== carat) : [...prev, carat]
      );
    }
  };

  const handleBrandChange = (brand) => {
    if (brand === "All") {
      setSelectedBrands([]);
    } else {
      setSelectedBrands(prev => 
        prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
      );
    }
  };

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Price filter
    filtered = filtered.filter(product => product.numericPrice <= priceRange);

    // Carat filter
    if (selectedCarats.length > 0) {
      filtered = filtered.filter(product => selectedCarats.includes(product.carat));
    }

    // Brand filter
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product => selectedBrands.includes(product.brand));
    }

    // Sorting
    switch (sortBy) {
      case 'price-asc':
        filtered = filtered.sort((a, b) => a.numericPrice - b.numericPrice);
        break;
      case 'price-desc':
        filtered = filtered.sort((a, b) => b.numericPrice - a.numericPrice);
        break;
      case 'rating':
        filtered = filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  }, [searchTerm, priceRange, selectedCarats, selectedBrands, sortBy]);

  return (
    <div className="bg-white   ">
<section
  className="relative bg-[url('/bg1.jpg')] bg-cover bg-center py-24 px-6 text-white"
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40 bg-opacity-60"></div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto text-center p-8 backdrop-blur-sm bg-white/10 rounded-xl shadow-lg">
    <h1 className="text-4xl md:text-6xl font-bold mb-6">
      Welcome to Our Shop
    </h1>
    <p className="text-lg md:text-xl text-gray-200 mb-8">
      Discover the best products at unbeatable prices. Style meets comfort right here.
    </p>
   
  </div>
</section>


      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 md:px-20 mt-20 mb-20">
{/* Sidebar */}
<aside className="col-span-1 space-y-6 bg-white p-4 rounded-xl shadow-md">
  {/* Search Bar */}
  <div>
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* Price Range */}
  <div className="p-4 border rounded-md bg-gray-50">
    <h3 className="font-semibold text-lg mb-2">Price Range</h3>
    <input
      type="range"
      min={20}
      max={2000}
      value={priceRange}
      onChange={(e) => setPriceRange(Number(e.target.value))}
      className="w-full"
    />
    <p className="text-sm text-gray-600 mt-1">
      Price: <span className="font-medium">${priceRange.toFixed(2)}</span>
    </p>
  </div>

  {/* Carat Filter */}
  <div className="p-4 border rounded-md bg-gray-50">
    <h3 className="font-semibold text-lg mb-2">Carat</h3>
    <ul className="space-y-2">
      {allCarats.map(carat => (
        <li key={carat}>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedCarats.includes(carat) || (carat === 'All' && selectedCarats.length === 0)}
              onChange={() => handleCaratChange(carat)}
              className="form-checkbox text-blue-600"
            />
            <span className="text-sm">{carat}</span>
          </label>
        </li>
      ))}
    </ul>
  </div>

  {/* Brand Filter */}
  <div className="p-4 border rounded-md bg-gray-50">
    <h3 className="font-semibold text-lg mb-2">Brand</h3>
    <ul className="space-y-2">
      {allBrands.map(brand => (
        <li key={brand}>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedBrands.includes(brand) || (brand === 'All' && selectedBrands.length === 0)}
              onChange={() => handleBrandChange(brand)}
              className="form-checkbox text-blue-600"
            />
            <span className="text-sm">{brand}</span>
          </label>
        </li>
      ))}
    </ul>
  </div>
</aside>


        {/* Product Grid */}
        <section className="col-span-1 md:col-span-3">
  {/* Top Bar: Sort + Count */}
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 text-sm gap-2">
    <p className="text-gray-700">
      Showing <span className="font-semibold">{filteredProducts.length}</span> result{filteredProducts.length !== 1 && 's'}
    </p>

    <div className="flex items-center space-x-2">
      <label className="text-gray-600">Sort by:</label>
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="default">Default</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  </div>

  {/* No Products Message */}
  {filteredProducts.length === 0 ? (
    <div className="text-center py-16 bg-gray-50 rounded-md">
      <p className="text-gray-500 text-lg">No products found matching your criteria</p>
    </div>
  ) : (
    // Product Grid
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product, idx) => (
        <div
          key={idx}
          className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white p-4 flex flex-col"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-contain mb-3 transition-transform duration-200 hover:scale-105"
          />
          <h4 className="text-lg font-semibold mb-1 truncate">{product.title}</h4>
          <p className="text-sm text-gray-500">{product.category}</p>
          <p className="text-xl font-bold text-blue-600 mt-2">${product.numericPrice.toFixed(2)}</p>

          <div className="flex items-center justify-between mt-auto pt-4">
            <button className="text-blue-500 hover:underline text-sm cursor-pointer">Quick View</button>
            <button className="text-gray-500 hover:text-yellow-500 text-sm cursor-pointer">Add to Wishlist</button>
          </div>
        </div>
      ))}
    </div>
  )}
</section>

      </div>
    </div>
  );
}

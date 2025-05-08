import React from 'react';

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Header Section */}
<section
  className="relative bg-[url('/bg3.jpg')] bg-cover bg-center py-24 px-6 text-white"
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40 bg-opacity-60"></div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto text-center p-8 backdrop-blur-sm bg-white/10 rounded-xl shadow-lg">
    <h1 className="text-4xl md:text-6xl font-bold mb-6">
    About JewelryGlow
    </h1>
    <p className="text-lg md:text-xl text-gray-200 mb-8">
    Crafting timeless elegance with ethically sourced, artisan-made jewelry that tells your story.
    </p>
   
  </div>
</section>

      {/* Company History & Mission */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://www.voguejewellers.lk/wp-content/uploads/2024/09/Mr.-Sarath-Hemachandra-Early-Years-500x370-1.jpg"
            alt="Our Story"
            className="rounded-2xl shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-amber-700 mb-4">Our Story & Mission</h2>
          <p className="text-gray-700 mb-4">
            Established in 2001, JewelryGlow began as a family-owned atelier with a passion for fine craftsmanship.
            Over the years, we’ve grown into a beloved jewelry brand renowned for quality and sophistication.
          </p>
          <p className="text-gray-700">
            Our mission is to celebrate life’s special moments with uniquely designed pieces that combine luxury,
            sustainability, and heartfelt meaning.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-amber-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-amber-700 mb-10">Why Choose JewelryGlow?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-amber-600 mb-2">Ethical Sourcing</h3>
              <p className="text-gray-600">
                We only use conflict-free diamonds and responsibly sourced materials.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-amber-600 mb-2">Expert Craftsmanship</h3>
              <p className="text-gray-600">
                Our artisans bring decades of experience to every hand-crafted piece.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-amber-600 mb-2">Lifetime Support</h3>
              <p className="text-gray-600">
                Enjoy polishing, repairs, and consultations for life with your purchase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Leadership Section */}
<section className="py-16 px-6 bg-white">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-amber-700 mb-10">Our Leadership</h2>
    <p className="text-gray-600 mb-12">
      Meet the passionate individuals guiding GoldenAura’s vision and values.
    </p>

    <div className="grid md:grid-cols-3 gap-10">
      {/* Leader 1 */}
      <div className="text-center">
        <img
          src="https://d1y8sb8igg2f8e.cloudfront.net/images/Elena-Silva.original.jpg"
          alt="CEO"
          className="w-40 h-40 mx-auto rounded-full shadow-lg object-cover mb-4"
        />
        <h3 className="text-xl font-semibold text-amber-600">Elena Silva</h3>
        <p className="text-gray-500">Founder & CEO</p>
      </div>

      {/* Leader 2 */}
      <div className="text-center">
        <img
          src="https://www.varners.law/img/people/RaviPerera.jpg"
          alt="Creative Director"
          className="w-40 h-40 mx-auto rounded-full shadow-lg object-cover mb-4"
        />
        <h3 className="text-xl font-semibold text-amber-600">Ravi Perera</h3>
        <p className="text-gray-500">Creative Director</p>
      </div>

      {/* Leader 3 */}
      <div className="text-center">
        <img
          src="https://www.voguejewellers.lk/wp-content/uploads/2024/09/Mr.-Anura-Hemachandra-290x375-1.jpg"
          alt="Operations Manager"
          className="w-40 h-40 mx-auto rounded-full shadow-lg object-cover mb-4"
        />
        <h3 className="text-xl font-semibold text-amber-600">Anura Hemachandra</h3>
        <p className="text-gray-500">Operations Manager</p>
      </div>
    </div>
  </div>
</section>

{/* Golden Milestones Section */}
<section className="bg-amber-50 py-16 px-6">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-amber-700 mb-10">Golden Milestones</h2>
    <p className="text-gray-600 mb-12">
      A journey of elegance and excellence—celebrating our key achievements over the years.
    </p>

    <div className="grid md:grid-cols-4 gap-8 text-left">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-2xl font-bold text-amber-600 mb-2">2010</h3>
        <p className="text-gray-600">GoldenAura was founded as a small family-owned jewelry studio.</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-2xl font-bold text-amber-600 mb-2">2015</h3>
        <p className="text-gray-600">Opened our first flagship store in the heart of the city.</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-2xl font-bold text-amber-600 mb-2">2020</h3>
        <p className="text-gray-600">Launched our global e-commerce platform for international customers.</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-2xl font-bold text-amber-600 mb-2">2024</h3>
        <p className="text-gray-600">Celebrated 100,000+ happy customers and introduced a sustainable gold line.</p>
      </div>
    </div>
  </div>
</section>


      {/* Footer Call-to-Action */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold text-amber-700 mb-2">Visit Us Today</h2>
        <p className="text-gray-600 mb-4">
          Explore our latest collections online or in-store and find a piece that speaks to your soul.
        </p>
        <button className="mt-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-6 rounded-full transition">
          Shop Now
        </button>
      </section>
    </div>
  );
};

export default About;

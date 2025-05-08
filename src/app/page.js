import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Categories from "./components/Collections";
import PopularItems from "./components/PopularItems";
import Testimonials from "./components/Testimonials";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StickyImages from "./components/StickyImages";
import ScrollProgress from "./components/ScrollProgress"; // ← new import

export default function Home() {
  return (
    <div>
      
      
      <ScrollProgress /> {/* ← scroll indicator */}
      <Hero />
      <AboutUs />
      <Categories />
      <PopularItems />
      <StickyImages />
      <Testimonials />
      <Footer />
    </div>
  );
}

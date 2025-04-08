import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Categories from "./components/Collections";
import PopularItems from "./components/PopularItems";
import Testimonials from "./components/Testimonials";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Categories />
      <PopularItems />
      <Testimonials />
      <Footer />
    </div>
  );
}

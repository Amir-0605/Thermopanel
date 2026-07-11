import { Routes, Route } from "react-router-dom";
import Hero from "./Companents/Hero/Hero";
import OurServices from "./Companents/Our services/OurServices";
import Delivery from "./Companents/Delivery/Delivery";
import Reviews from "./Companents/Reviews/Reviews";
import About from "./Companents/About/About";
import FAQ from "./Companents/FAQ/FAQ";
import Forma from "./Companents/Form/Form";
import Guarantee from "./Companents/Guarantee/Guarantee";
import Map from "./Companents/Map/Map";
import FloatingButtons from "./Companents/FloatingButtons/FloatingButtons";
import Footer from "./Companents/Footer/Footer";
import Catalog from "./Companents/Catalog/Catalog";
import OurProjects from "./Companents/Our Projects/OurProjects";



const Home = () => {
  return (
    <>
      <Hero />
      <OurServices />
      <Catalog />
      <Delivery />
      <OurProjects />
      <Reviews />
      <About />
      <FAQ />
      <Forma />
      <Guarantee />
      <Map />
      <FloatingButtons />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
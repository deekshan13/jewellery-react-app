import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/sections/HeroSection';
import FeaturedCollections from './components/sections/FeaturedCollections';
import AboutSection from './components/sections/AboutSection';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Testimonials from './components/sections/Testimonials';
import CTASection from './components/sections/CTASection';
import ContactSection from './components/sections/ContactSection';

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-charcoal-900"
    >
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedCollections />
        <AboutSection />
        <WhyChooseUs />
        <Testimonials />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </motion.div>
  );
}

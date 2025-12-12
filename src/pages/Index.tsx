import { useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BrandStorySection from "@/components/BrandStorySection";
import ProductHighlights from "@/components/ProductHighlights";
import IngredientsSection from "@/components/IngredientsSection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import SustainabilitySection from "@/components/SustainabilitySection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update meta tags for SEO
    document.title = "LUMORA SKIN | Luxury Skincare Rituals";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Discover LUMORA SKIN - luxury skincare formulations crafted with rare botanicals and cutting-edge science. Transform your daily ritual into pure luxury.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Discover LUMORA SKIN - luxury skincare formulations crafted with rare botanicals and cutting-edge science. Transform your daily ritual into pure luxury.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <Navigation />
      <HeroSection />
      <BrandStorySection />
      <ProductHighlights />
      <IngredientsSection />
      <BeforeAfterSlider />
      <TestimonialsCarousel />
      <SustainabilitySection />
      <FinalCTA />
      <Footer />
    </motion.main>
  );
};

export default Index;

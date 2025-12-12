import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sophia Laurent",
    title: "Beauty Editor",
    quote: "In twenty years of testing skincare, Lumora stands apart. The Radiance Serum transformed my skin in ways I didn't think possible.",
    rating: 5,
  },
  {
    id: 2,
    name: "Elena Chen",
    title: "Wellness Entrepreneur",
    quote: "The ritual aspect of Lumora changed how I approach self-care. Each application feels like a meditation, and my skin has never looked better.",
    rating: 5,
  },
  {
    id: 3,
    name: "Victoria Barnes",
    title: "Art Director",
    quote: "Finally, skincare that understands luxury isn't just about price—it's about experience. My morning routine has become sacred.",
    rating: 5,
  },
  {
    id: 4,
    name: "Margot DuPont",
    title: "Film Producer",
    quote: "The Midnight Restore cream is nothing short of miraculous. I wake up looking rested even after the longest days on set.",
    rating: 5,
  },
];

const TestimonialsCarousel = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-16 lg:py-24 gradient-rose overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="inline-block font-sans text-xs tracking-[0.4em] text-muted-foreground mb-6"
          >
            TESTIMONIALS
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground"
          >
            In Their Words
          </motion.h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="luxury-divider mt-8"
          />
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Main testimonial */}
          <div className="relative min-h-[320px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-center px-4 lg:px-16"
              >
                {/* Quote mark */}
                <span className="font-serif text-8xl text-rose-gold/30 leading-none block mb-6">
                  "
                </span>

                {/* Quote */}
                <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed italic mb-8">
                  {testimonials[currentIndex].quote}
                </blockquote>

                {/* Rating */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-rose-gold text-rose-gold"
                    />
                  ))}
                </div>

                {/* Author */}
                <div>
                  <p className="font-serif text-lg text-foreground">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="font-sans text-sm text-muted-foreground tracking-wider mt-1">
                    {testimonials[currentIndex].title}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-8 mt-12">
            <button
              onClick={prev}
              className="p-3 border border-border/50 hover:border-foreground/30 transition-colors duration-500"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    i === currentIndex
                      ? "bg-foreground w-6"
                      : "bg-foreground/20 hover:bg-foreground/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 border border-border/50 hover:border-foreground/30 transition-colors duration-500"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;

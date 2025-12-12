import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const BrandStorySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section
      ref={sectionRef}
      id="story"
      className="relative py-16 lg:py-24 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block font-sans text-xs tracking-[0.4em] text-muted-foreground mb-6">
                OUR PHILOSOPHY
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground mb-8"
            >
              Where Science
              <br />
              <span className="italic font-light">Meets Ritual</span>
            </motion.h2>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="luxury-divider !mx-0 !w-12"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="font-sans text-base lg:text-lg text-muted-foreground leading-relaxed"
              >
                At Lumora, we believe skincare transcends mere application. 
                It is a sacred pause in your day, a moment to honor the 
                vessel that carries you through life.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="font-sans text-base lg:text-lg text-muted-foreground leading-relaxed"
              >
                Our formulations marry ancient botanical wisdom with 
                breakthrough biotechnology, creating elixirs that don't 
                just treat—they transform.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="font-sans text-base lg:text-lg text-muted-foreground leading-relaxed"
              >
                Each ingredient is selected with intention, each formula 
                perfected through years of research. This is skincare 
                elevated to its purest form.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-10"
            >
              <a
                href="#ingredients"
                className="luxury-link font-sans text-sm tracking-wider text-foreground"
              >
                Explore Our Ingredients
              </a>
            </motion.div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="relative aspect-[3/4] overflow-hidden"
            >
              {/* Image placeholder with elegant gradient */}
              <motion.div
                style={{ y: imageY }}
                className="absolute inset-0 bg-gradient-to-b from-champagne/50 via-secondary to-rose-gold-light/30"
              />
              
              {/* Decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 border border-foreground/10 flex items-center justify-center">
                  <div className="text-center">
                    <span className="block font-serif text-6xl text-foreground/20 mb-2">L</span>
                    <span className="font-sans text-xs tracking-[0.4em] text-foreground/40">SINCE 2024</span>
                  </div>
                </div>
              </div>

              {/* Thin border decoration */}
              <div className="absolute -inset-4 border border-border/30 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />
    </section>
  );
};

export default BrandStorySection;

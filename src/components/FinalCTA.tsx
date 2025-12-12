import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const FinalCTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-16 lg:py-24 gradient-cta overflow-hidden"
    >
      {/* Organic shape background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] rounded-full bg-gradient-to-br from-rose-gold-light/10 via-transparent to-champagne/10 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="inline-block font-sans text-xs tracking-[0.4em] text-muted-foreground mb-6"
          >
            BEGIN YOUR JOURNEY
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-6"
          >
            Elevate Your
            <br />
            <span className="italic font-light">Ritual</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-base lg:text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto"
          >
            Join those who have transformed their skincare into 
            a daily act of self-reverence. Your radiance awaits.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#products"
              className="group relative px-12 py-4 bg-foreground text-background font-sans text-sm tracking-wider overflow-hidden transition-all duration-500 hover:shadow-glow"
            >
              <span className="relative z-10">Explore the Collection</span>
              <div className="absolute inset-0 bg-primary transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 pt-16 border-t border-border/30"
          >
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
              {["Free Shipping", "30-Day Returns", "Clean Beauty", "Cruelty Free"].map(
                (badge) => (
                  <span
                    key={badge}
                    className="font-sans text-xs tracking-wider text-muted-foreground"
                  >
                    {badge}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

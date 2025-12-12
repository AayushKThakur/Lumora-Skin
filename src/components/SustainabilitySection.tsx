import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Leaf, Recycle, Heart, Droplets } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Sustainably Sourced",
    description: "Every botanical ingredient traced to ethical, sustainable farms.",
  },
  {
    icon: Recycle,
    title: "Zero Waste Packaging",
    description: "Refillable vessels and fully recyclable materials throughout.",
  },
  {
    icon: Heart,
    title: "Cruelty Free",
    description: "Never tested on animals. Certified by Leaping Bunny.",
  },
  {
    icon: Droplets,
    title: "Clean Formulas",
    description: "Free from parabens, sulfates, and synthetic fragrances.",
  },
];

const SustainabilitySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-16 lg:py-24 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Background circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-soft/10 via-transparent to-champagne/20" />
              
              {/* Decorative rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 border border-emerald-soft/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute inset-16 border border-emerald-soft/10 rounded-full"
              />

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Leaf className="w-16 h-16 mx-auto text-emerald-soft/60 mb-4" />
                  <span className="font-sans text-xs tracking-[0.3em] text-emerald-soft">
                    ECO CONSCIOUS
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="inline-block font-sans text-xs tracking-[0.4em] text-emerald-soft mb-6"
            >
              OUR COMMITMENT
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-serif text-4xl md:text-5xl text-foreground mb-8"
            >
              Beauty That
              <br />
              <span className="italic font-light">Gives Back</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-sans text-base text-muted-foreground leading-relaxed mb-12"
            >
              Luxury and responsibility are not mutually exclusive. 
              Our commitment to the planet is woven into every 
              aspect of what we create.
            </motion.p>

            {/* Values grid */}
            <div className="grid sm:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  className="group"
                >
                  <value.icon className="w-6 h-6 text-emerald-soft mb-4 group-hover:scale-110 transition-transform duration-500" />
                  <h3 className="font-serif text-lg text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />
    </section>
  );
};

export default SustainabilitySection;

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const ingredients = [
  {
    id: 1,
    name: "Rose Hip",
    scientific: "Rosa canina",
    description: "Rich in vitamins A & C, deeply nourishes and regenerates skin cells.",
    icon: "🌹",
  },
  {
    id: 2,
    name: "Hyaluronic Acid",
    scientific: "Sodium Hyaluronate",
    description: "Holds 1000x its weight in water for intense, lasting hydration.",
    icon: "💧",
  },
  {
    id: 3,
    name: "Bakuchiol",
    scientific: "Psoralea corylifolia",
    description: "Nature's retinol alternative. Smooths fine lines without irritation.",
    icon: "🌿",
  },
  {
    id: 4,
    name: "Squalane",
    scientific: "Plant-derived",
    description: "Mimics skin's natural oils. Ultra-lightweight moisture lock.",
    icon: "✨",
  },
  {
    id: 5,
    name: "Niacinamide",
    scientific: "Vitamin B3",
    description: "Brightens, minimizes pores, and strengthens skin barrier.",
    icon: "🔬",
  },
  {
    id: 6,
    name: "Centella",
    scientific: "Centella asiatica",
    description: "Ancient healing herb. Calms inflammation, promotes repair.",
    icon: "🍃",
  },
];

const IngredientsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      ref={sectionRef}
      id="ingredients"
      className="relative py-16 lg:py-24 gradient-pearl overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="inline-block font-sans text-xs tracking-[0.4em] text-muted-foreground mb-6"
          >
            THE SCIENCE
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground"
          >
            Key Ingredients
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-base text-muted-foreground mt-6 max-w-xl mx-auto"
          >
            Every ingredient is selected for its proven efficacy and purity.
            Nature and science in perfect harmony.
          </motion.p>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="luxury-divider mt-8"
          />
        </div>

        {/* Ingredients Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ingredients.map((ingredient, index) => (
            <motion.div
              key={ingredient.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              onMouseEnter={() => setHoveredId(ingredient.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative"
            >
              <div className="relative p-8 lg:p-10 bg-card/50 backdrop-blur-sm border border-border/30 hover:border-border/60 transition-all duration-700 overflow-hidden">
                {/* Hover glow */}
                <AnimatePresence>
                  {hoveredId === ingredient.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-gradient-to-br from-rose-gold/5 to-transparent pointer-events-none"
                    />
                  )}
                </AnimatePresence>

                {/* Icon */}
                <motion.div
                  animate={hoveredId === ingredient.id ? { y: -5, scale: 1.1 } : { y: 0, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl mb-6 opacity-80"
                >
                  {ingredient.icon}
                </motion.div>

                {/* Name */}
                <h3 className="font-serif text-2xl text-foreground mb-2">
                  {ingredient.name}
                </h3>

                {/* Scientific name */}
                <span className="font-sans text-xs tracking-wider text-muted-foreground italic">
                  {ingredient.scientific}
                </span>

                {/* Description - shows on hover */}
                <AnimatePresence>
                  {hoveredId === ingredient.id && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="font-sans text-sm text-muted-foreground leading-relaxed mt-4 pt-4 border-t border-border/30"
                    >
                      {ingredient.description}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Floating particles on hover */}
                <AnimatePresence>
                  {hoveredId === ingredient.id && (
                    <>
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 0.4, scale: 1, y: -20 - i * 10 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.6, delay: i * 0.1 }}
                          className="absolute w-1 h-1 rounded-full bg-rose-gold"
                          style={{
                            right: `${20 + i * 15}%`,
                            bottom: "30%",
                          }}
                        />
                      ))}
                    </>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;

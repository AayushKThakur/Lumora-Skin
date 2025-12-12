import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Radiance Serum",
    subtitle: "Illuminating Elixir",
    description: "A potent blend of vitamin C and niacinamide for luminous, even-toned skin.",
    ingredients: ["Vitamin C 15%", "Niacinamide", "Hyaluronic Acid", "Rose Hip Extract"],
    price: "$185",
  },
  {
    id: 2,
    name: "Midnight Restore",
    subtitle: "Night Renewal Cream",
    description: "Deep cellular repair while you sleep. Wake to transformed, youthful skin.",
    ingredients: ["Retinol 0.5%", "Peptide Complex", "Squalane", "Bakuchiol"],
    price: "$220",
  },
  {
    id: 3,
    name: "Velvet Hydra",
    subtitle: "Moisture Barrier Essence",
    description: "Ultra-light yet deeply hydrating. Seals in moisture for 72 hours.",
    ingredients: ["Ceramides", "Centella Asiatica", "Aloe Vera", "Green Tea"],
    price: "$165",
  },
];

const ProductHighlights = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="products"
      className="relative py-16 lg:py-24 gradient-champagne overflow-hidden"
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
            THE COLLECTION
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground"
          >
            Hero Formulations
          </motion.h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="luxury-divider mt-8"
          />
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
              className="group"
            >
              <div className="relative bg-card shadow-soft hover:shadow-medium transition-shadow duration-700 overflow-hidden">
                {/* Product Image Area */}
                <div className="relative aspect-[3/4] bg-gradient-to-b from-secondary via-card to-secondary/60 overflow-hidden">
                  {/* Floating product representation */}
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="relative w-20 h-56">
                      {/* Bottle shape */}
                      <div className="absolute inset-0 bg-gradient-to-b from-background via-ivory to-background/90 rounded-t-full rounded-b-lg shadow-product" />
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-10 bg-gradient-to-b from-rose-gold/50 to-rose-gold/30 rounded-t-sm" />
                      {/* Label */}
                      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 text-center w-full px-2">
                        <span className="block font-serif text-sm tracking-wider text-foreground/70">{product.id}</span>
                      </div>
                      {/* Reflection */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/30 to-transparent rounded-t-full rounded-b-lg" />
                    </div>
                  </motion.div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-rose-gold/0 group-hover:bg-rose-gold/5 transition-colors duration-700" />
                </div>

                {/* Product Info */}
                <div className="p-8 lg:p-10">
                  <span className="font-sans text-xs tracking-[0.3em] text-muted-foreground">
                    {product.subtitle}
                  </span>
                  
                  <h3 className="font-serif text-2xl lg:text-3xl text-foreground mt-2 mb-4">
                    {product.name}
                  </h3>
                  
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Ingredients */}
                  <div className="mb-6">
                    <span className="font-sans text-xs tracking-wider text-foreground/60 block mb-3">
                      KEY INGREDIENTS
                    </span>
                    <ul className="flex flex-wrap gap-2">
                      {product.ingredients.map((ingredient) => (
                        <li
                          key={ingredient}
                          className="font-sans text-xs tracking-wide text-muted-foreground px-3 py-1 border border-border/50"
                        >
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-6 border-t border-border/30">
                    <span className="font-serif text-xl text-foreground">
                      {product.price}
                    </span>
                    <a
                      href="#"
                      className="luxury-link font-sans text-xs tracking-wider text-foreground"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;

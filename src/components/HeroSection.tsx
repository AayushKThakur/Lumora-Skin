import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Generate floating particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: Math.random() * 100,
    delay: Math.random() * 8,
    duration: Math.random() * 4 + 6,
    opacity: Math.random() * 0.4 + 0.1,
  }));

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden gradient-hero"
    >
      {/* Cursor spotlight effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--rose-gold-light) / 0.15), transparent 40%)`,
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-rose-gold/30"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.left}%`,
              bottom: "-5%",
              opacity: particle.opacity,
            }}
            animate={{
              y: [0, -window.innerHeight * 1.2],
              opacity: [0, particle.opacity, particle.opacity, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 container mx-auto px-6 lg:px-12 min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 pt-24"
      >
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="inline-block font-sans text-xs tracking-[0.4em] text-muted-foreground mb-6">
              LUXURY SKINCARE RITUALS
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] tracking-tight text-foreground"
          >
            The Art of
            <br />
            <span className="italic font-light">Radiance</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-8 font-sans text-base lg:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0"
          >
            Discover formulations crafted with rare botanicals and 
            cutting-edge science. Transform your daily ritual into 
            a moment of pure luxury.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <a
              href="#products"
              className="group relative px-10 py-4 bg-foreground text-background font-sans text-sm tracking-wider overflow-hidden transition-all duration-500 hover:shadow-glow"
            >
              <span className="relative z-10">Discover Lumora</span>
              <div className="absolute inset-0 bg-primary transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>
            <a
              href="#products"
              className="px-10 py-4 border border-foreground/20 text-foreground font-sans text-sm tracking-wider hover:border-foreground/50 transition-colors duration-500"
            >
              Shop Collection
            </a>
          </motion.div>
        </div>

        {/* Product visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex-1 relative"
        >
          <div className="relative w-64 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[480px] mx-auto">
            {/* Glow effect behind product */}
            <div className="absolute inset-0 bg-gradient-to-b from-rose-gold-light/30 via-champagne/20 to-transparent rounded-full blur-3xl transform scale-150" />
            
            {/* Product container */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full flex items-center justify-center"
            >
              {/* Elegant product placeholder */}
              <div className="relative w-32 h-72 md:w-40 md:h-80 lg:w-44 lg:h-96">
                {/* Bottle shape */}
                <div className="absolute inset-0 bg-gradient-to-b from-secondary via-card to-secondary/80 rounded-t-full rounded-b-lg shadow-product" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-12 bg-gradient-to-b from-rose-gold/60 to-rose-gold/40 rounded-t-sm" />
                {/* Label */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 text-center">
                  <span className="block font-serif text-lg tracking-widest text-foreground/80">L</span>
                  <span className="block font-sans text-[8px] tracking-[0.3em] text-muted-foreground mt-1">LUMORA</span>
                </div>
                {/* Reflection */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-transparent rounded-t-full rounded-b-lg" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="font-sans text-xs tracking-widest text-muted-foreground">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-foreground/40 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;

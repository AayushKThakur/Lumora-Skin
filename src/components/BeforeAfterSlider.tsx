import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const BeforeAfterSlider = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  return (
    <section
      ref={sectionRef}
      id="results"
      className="relative py-16 lg:py-24 bg-background overflow-hidden"
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
            TRANSFORMATIONS
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground"
          >
            Visible Results
            <br />
            <span className="italic font-light">in Weeks</span>
          </motion.h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="luxury-divider mt-8"
          />
        </div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div
            className="relative aspect-[16/10] cursor-ew-resize select-none overflow-hidden shadow-medium"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* Before image (full width, clipped) */}
            <div className="absolute inset-0 bg-gradient-to-br from-muted via-secondary to-muted">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="font-serif text-6xl text-foreground/10">Before</span>
                  <p className="font-sans text-sm text-muted-foreground mt-4">Day 1</p>
                </div>
              </div>
            </div>

            {/* After image (clipped by slider position) */}
            <div
              className="absolute inset-0 z-10 bg-gradient-to-br from-champagne via-rose-gold to-secondary"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="font-serif text-6xl text-foreground/40">After</span>
                  <p className="font-sans text-sm text-foreground/70 mt-4">Week 8</p>
                </div>
              </div>
            </div>

            {/* Slider handle */}
            <div
              className="absolute top-0 bottom-0 w-px z-20 bg-foreground/80 transition-all duration-75"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Handle button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background border border-foreground/20 shadow-soft flex items-center justify-center">
                <div className="flex gap-1">
                  <div className="w-0.5 h-4 bg-foreground/40 rounded-full" />
                  <div className="w-0.5 h-4 bg-foreground/40 rounded-full" />
                </div>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute bottom-6 left-6 font-sans text-xs tracking-wider text-foreground/60">
              BEFORE
            </div>
            <div className="absolute bottom-6 right-6 font-sans text-xs tracking-wider text-foreground/60">
              AFTER
            </div>
          </div>

          {/* Caption */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center font-sans text-sm text-muted-foreground mt-8"
          >
            Results after 8 weeks of consistent use. Individual results may vary.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;

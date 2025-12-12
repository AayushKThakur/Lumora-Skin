import { motion } from "framer-motion";

const Footer = () => {
  const footerLinks = {
    shop: ["All Products", "Serums", "Moisturizers", "Cleansers", "Gift Sets"],
    about: ["Our Story", "Ingredients", "Sustainability", "Press"],
    support: ["Contact Us", "FAQs", "Shipping", "Returns"],
    connect: ["Instagram", "Pinterest", "Newsletter"],
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="font-serif text-2xl tracking-[0.3em]">
                LUMORA
              </span>
              <span className="block font-sans text-[10px] tracking-[0.5em] opacity-60 mt-1">
                SKIN
              </span>
            </div>
            <p className="font-sans text-sm leading-relaxed opacity-70 max-w-xs">
              Luxury skincare rituals crafted with intention. 
              Where science meets the art of self-care.
            </p>
            
            {/* Newsletter */}
            <div className="mt-8">
              <span className="font-sans text-xs tracking-wider opacity-60 block mb-4">
                JOIN THE RITUAL
              </span>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-transparent border-b border-background/30 py-2 font-sans text-sm focus:outline-none focus:border-background/60 transition-colors placeholder:opacity-40"
                />
                <button className="px-4 font-sans text-xs tracking-wider hover:opacity-70 transition-opacity">
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Shop */}
          <div>
            <span className="font-sans text-xs tracking-wider opacity-60 block mb-6">
              SHOP
            </span>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-sans text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <span className="font-sans text-xs tracking-wider opacity-60 block mb-6">
              ABOUT
            </span>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-sans text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <span className="font-sans text-xs tracking-wider opacity-60 block mb-6">
              SUPPORT
            </span>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-sans text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-20 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="font-sans text-xs opacity-50">
            © 2024 Lumora Skin. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-sans text-xs opacity-50 hover:opacity-80 transition-opacity">
              Privacy Policy
            </a>
            <a href="#" className="font-sans text-xs opacity-50 hover:opacity-80 transition-opacity">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

// "use client" ensures this component runs only on the client side
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoldButton } from "./GoldButton";

/**
 * ScrollToTopButton – a fixed button that appears after the user scrolls down.
 * Uses the GoldButton (filled variant) for brand colors and adds a fade/scale animation.
 */
export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show the button after scrolling 300px
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <GoldButton
            variant="filled"
            onClick={scrollToTop}
            className="shadow-xl"
          >
            ↑ Top
          </GoldButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LikeButton from "./LikeButton.jsx";

export default function AnimatedCard({ title, description, category }) {
  // Track if the card is expanded
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      // Card container animation on hover
      whileHover={{ scale: 1.02 }} // scale up slightly on hover
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white dark:bg-gray-900 p-4 rounded-xl overflow-hidden shadow-md cursor-pointer"
      onClick={() => setExpanded(!expanded)} // toggle expand on click
    >
      <h2 className="font-bold text-lg mb-2">{title}</h2>

      {/* Animate description expansion */}
      <AnimatePresence>
        {expanded && (
          <motion.p
            key="description"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-2"
          >
            {description}
          </motion.p>
        )}
      </AnimatePresence>

    <div className="flex justify-between items-center">

        {/* Show BUY button only for web projects */}
        {category === "web" && (
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Buy
          </button>
        )}

        {/* Show LIKE only for portfolio */}
        {category === "design" && (
          <LikeButton />
        )}

      </div>
    </motion.div>
  );
}
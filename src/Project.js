import React from "react";
import { motion } from "framer-motion";

function Project() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: "1s" }}
    >
      Project
    </motion.div>
  );
}

export default Project;


import React from "react";
import { motion } from "framer-motion";

export default function NumbersSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="mt-20 mb-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-7xl md:text-8xl font-bold text-muted mb-8"
      >
        Numbers
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent rounded-2xl" />
        <div className="relative bg-secondary/50 backdrop-blur-sm rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="block text-5xl md:text-6xl font-bold text-accent mb-2"
              >
                357
              </motion.span>
              <span className="text-lg text-muted-foreground">Happy Clients</span>
            </div>
            <div className="text-center">
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="block text-5xl md:text-6xl font-bold text-accent mb-2"
              >
                123
              </motion.span>
              <span className="text-lg text-muted-foreground">Finished Projects</span>
            </div>
            <div className="text-center">
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="block text-5xl md:text-6xl font-bold text-accent mb-2"
              >
                637
              </motion.span>
              <span className="text-lg text-muted-foreground">Working Hours</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

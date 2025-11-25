"use client";

import { motion } from "framer-motion";

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Large gradient orbs */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 15,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-32 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-[#7A4A5A] rounded-full blur-[80px] sm:blur-[100px] md:blur-[150px] opacity-30"
      />
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 12,
          ease: "easeInOut",
        }}
        className="absolute -bottom-32 -right-32 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-[#79D3F9] rounded-full blur-[80px] sm:blur-[100px] md:blur-[150px] opacity-20"
      />
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 18,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-[#BF956A] rounded-full blur-[60px] sm:blur-[80px] md:blur-[120px] opacity-20"
      />

      {/* Floating sparkles - Reduced on mobile */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            y: [0, -100, -200],
            x: Math.sin(i) * 50,
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 4 + i * 0.5,
            delay: i * 0.8,
            ease: "easeOut",
          }}
          className="absolute hidden sm:block"
          style={{
            left: `${15 + i * 15}%`,
            bottom: "10%",
          }}
        >
          <span className="text-lg sm:text-xl md:text-2xl">✨</span>
        </motion.div>
      ))}

      {/* Geometric decorative elements - Desktop only */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 20,
          ease: "linear",
        }}
        className="hidden lg:block absolute top-20 right-20 w-32 h-32 border border-[#E1C4D2]/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 25,
          ease: "linear",
        }}
        className="hidden lg:block absolute bottom-32 left-20 w-24 h-24 border border-[#BF956A]/10 rounded-full"
      />

      {/* Small floating dots - Fewer on mobile */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 3 + i * 0.3,
            delay: i * 0.4,
          }}
          className={`absolute w-1 h-1 md:w-2 md:h-2 bg-[#E1C4D2] rounded-full ${
            i > 4 ? "hidden md:block" : ""
          }`}
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
        />
      ))}
    </div>
  );
}

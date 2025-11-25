"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 md:py-8">
      {/* Image composition */}
      <div className="relative w-full max-w-5xl mx-auto mb-8 md:mb-12">
        {/* Main centered image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mx-auto w-48 h-64 sm:w-56 sm:h-72 md:w-72 md:h-96 lg:w-80 lg:h-[28rem]"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#E1C4D2]/20 to-transparent rounded-2xl md:rounded-3xl" />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4 }}
            className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://cdn.jsdelivr.net/gh/tobi-i-codes/semiloore@main/public/semiloore.png"
              alt="Author portrait"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#373D54]/50" />
          </motion.div>

          {/* Decorative frame */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -inset-2 md:-inset-4 border border-[#E1C4D2]/30 rounded-2xl md:rounded-3xl pointer-events-none"
          />
        </motion.div>

        {/* Side images - Hidden on mobile, visible on md+ */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-32 h-40 lg:w-44 lg:h-56"
        >
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [-5, -3, -5] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 5,
              delay: 0.5,
            }}
            className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="https://cdn.jsdelivr.net/gh/tobi-i-codes/semiloore@main/public/semi1.webp"
              alt="Author at work"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#373D54]/40" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-32 h-40 lg:w-44 lg:h-56"
        >
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [5, 3, 5] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 6,
              delay: 1,
            }}
            className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="https://cdn.jsdelivr.net/gh/tobi-i-codes/semiloore@main/public/semi2.jpg"
              alt="Book signing"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#373D54]/40" />
          </motion.div>
        </motion.div>
      </div>

      {/* Headline text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="text-center max-w-3xl mx-auto px-4"
      >
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-[#FDE5F9] text-lg sm:text-xl md:text-2xl font-semibold tracking-wide mb-2"
        >
          DARE-ATUNSE &apos;SEMILOORE
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-[#BF956A] text-xs sm:text-sm md:text-base tracking-[0.2em] md:tracking-[0.3em] uppercase mb-3 md:mb-4"
        >
          The Visionary
        </motion.p>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#E1C4D2] leading-tight text-balance">
          Congratulations on Your
          <br />
          <span className="relative">
            <span className="text-[#FDE5F9]">Book Launch</span>
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute -bottom-1 md:-bottom-2 left-0 h-0.5 md:h-1 bg-gradient-to-r from-[#FDE5F9] via-[#B68099] to-[#BA6D5C]"
            />
          </span>
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-4 md:mt-6 text-[#E1C4D2]/70 text-base sm:text-lg md:text-xl max-w-xl mx-auto leading-relaxed px-2"
        >
          Touching hearts and shifting perspectives, one selfless story at a
          time.
        </motion.p>
      </motion.div>
    </div>
  );
}

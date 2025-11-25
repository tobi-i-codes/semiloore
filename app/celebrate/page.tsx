"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCard } from "@/components/message-card";
import { BookMockup } from "@/components/book-mockup";
import { ChevronLeft, Sparkles } from "lucide-react";

export default function CelebratePage() {
  return (
    <main className="min-h-screen bg-[#373D54] relative overflow-x-hidden">
      {/* Background gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 8 }}
          className="absolute top-1/4 -left-32 w-64 md:w-96 h-64 md:h-96 bg-[#7A4A5A] rounded-full blur-[100px] md:blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 10 }}
          className="absolute bottom-1/4 -right-32 w-64 md:w-96 h-64 md:h-96 bg-[#79D3F9] rounded-full blur-[100px] md:blur-[150px]"
        />
      </div>

      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="fixed top-4 left-4 md:top-8 md:left-8 z-50"
      >
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1 md:gap-2 px-3 py-2 md:px-4 md:py-2 glass rounded-full text-[#E1C4D2] text-sm md:text-base"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden sm:inline">Back</span>
          </motion.button>
        </Link>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-2 glass rounded-full mb-4 md:mb-6"
          >
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-[#BF956A]" />
            <span className="text-[#E1C4D2] text-xs md:text-sm tracking-widest uppercase">
              A Special Message
            </span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#E1C4D2] leading-tight text-balance">
            A Celebration of
            <br />
            <span className="text-[#854F66]">Your Journey</span>
          </h1>
        </motion.div>

        {/* Message card */}
        <MessageCard />

        {/* Book section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 md:mt-24"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold text-[#E1C4D2] mb-8 md:mb-12"
          >
            The Masterpiece
          </motion.h2>
          <BookMockup />
        </motion.div>

        {/* Footer message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16 md:mt-24 pb-8"
        >
          <p className="text-[#E1C4D2]/60 text-base md:text-lg italic px-4">
            "Three books down. A legacy in the making."
          </p>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            className="mt-6 md:mt-8 text-3xl md:text-4xl"
          >
            🥂 👑
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}

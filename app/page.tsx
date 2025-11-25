"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { HeroSection } from "@/components/hero-section";
import { FloatingElements } from "@/components/floating-elements";
import { useAudio } from "@/components/audio-provider";

export default function HomePage() {
  const router = useRouter();
  const { playMusic } = useAudio();

  const handleCelebrate = async () => {
    await playMusic();
    router.push("/celebrate");
  };

  return (
    <main className="relative min-h-screen bg-[#373D54] overflow-hidden">
      {/* Floating decorative elements */}
      <FloatingElements />

      {/* Main hero content */}
      <HeroSection />

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full px-4 md:px-0 md:w-auto"
      >
        <motion.button
          onClick={handleCelebrate}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 40px rgba(122, 74, 90, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          className="w-full md:w-auto relative px-8 py-4 md:px-12 md:py-5 bg-[#7A4A5A] text-white font-semibold text-lg md:text-xl rounded-full overflow-hidden group cursor-pointer animate-glow"
        >
          <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
            A Note for You
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            >
              💌
            </motion.span>
          </span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#7A4A5A] via-[#BF956A] to-[#7A4A5A]"
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 3,
              ease: "linear",
            }}
            style={{ opacity: 0.3 }}
          />
        </motion.button>
      </motion.div>
    </main>
  );
}

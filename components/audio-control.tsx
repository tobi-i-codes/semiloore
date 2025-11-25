"use client"

import { motion } from "framer-motion"
import { Volume2, VolumeX } from "lucide-react"
import { useAudio } from "./audio-provider"

export function AudioControl() {
  const { isPlaying, hasInteracted, toggleMusic } = useAudio()

  if (!hasInteracted) return null

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, type: "spring" }}
      onClick={toggleMusic}
      className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full bg-[#1C1C1C]/80 backdrop-blur-sm border border-[#E1C4D2]/30 flex items-center justify-center text-[#E1C4D2] hover:bg-[#1C1C1C] hover:border-[#FDE5F9]/50 transition-colors cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isPlaying ? "Mute music" : "Play music"}
    >
      {isPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
    </motion.button>
  )
}

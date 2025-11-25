"use client";

import { motion } from "framer-motion";
import { Heart, Star, Sparkles } from "lucide-react";

const messageLines = [
  "Dear Semiloore,",
  "Today is your third book launch, and looking at how far you’ve come, I just want to say… wow.",
  "Your level of passion and drive honestly needs to be studied.",
  "Yes, some things come naturally to us, and over time we get familiar with them.",
  "But what you have? That’s something people actually need to study and emulate.",
  "",
  "You’re a visionary person, and this isn’t me trying to motivate you.",
  "Every visionary goes through tests, and your decision not to compromise impact for visibility and virality is proof of who you truly are.",

  "You chose depth over trends, purpose over applause, and selfless vision over popularity.",

  "You are a purposeful writer. Every word in your books isn’t just for vibes,",
  "It’s to touch hearts, influence mindsets, and shift perspectives, one person at a time.",
  "That shows you’re not writing from selfish ambition, but from a selfless calling.",
  "To show up once is impressive. To do it three times is a testament to your character.",
  "",
  "What you’re doing is rare, and you should always remember how special you are",
  "Not because of the number of readers, but because of who you are,",
  "What you represent, and the path you are boldly charting.",
  "",
  "So it’s only a matter of time.",
  "Everyone who has ever charted a new course has gone through seasons",
  "Where it felt like their voice wasn’t heard enough.",
  "But through perseverance, consistency, and keeping the faith,",
  "It was always just a matter of time before their voice reached",
  "Those who were in darkness and needed light.",
  "",
  "So today, amidst the busyness, take a moment to breathe it all in.",
  "You have done the work.",
  "",
  "Congratulations on your book launch, Semiloore 🤍",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function MessageCard() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className="max-w-3xl mx-auto"
    >
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative glass rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-2xl"
      >
        {/* Decorative corner elements */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: "spring" }}
          className="absolute -top-3 -left-3 md:-top-4 md:-left-4"
        >
          <div className="w-6 h-6 md:w-8 md:h-8 bg-[#7A4A5A] rounded-full flex items-center justify-center shadow-lg">
            <Heart className="w-3 h-3 md:w-4 md:h-4 text-white" fill="white" />
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0, rotate: 180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, type: "spring" }}
          className="absolute -top-3 -right-3 md:-top-4 md:-right-4"
        >
          <div className="w-6 h-6 md:w-8 md:h-8 bg-[#79D3F9] rounded-full flex items-center justify-center shadow-lg">
            <Star className="w-3 h-3 md:w-4 md:h-4 text-white" fill="white" />
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, type: "spring" }}
          className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4"
        >
          <div className="w-6 h-6 md:w-8 md:h-8 bg-[#BF956A] rounded-full flex items-center justify-center shadow-lg">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-white" />
          </div>
        </motion.div>

        {/* Message content */}
        <div className="space-y-3 md:space-y-4 text-[#E1C4D2]">
          {messageLines.map((line, index) => (
            <motion.p
              key={index}
              variants={lineVariants}
              className={`text-base sm:text-lg md:text-xl leading-relaxed ${
                index === 0
                  ? "font-semibold text-xl sm:text-2xl md:text-3xl text-[#BF956A]"
                  : ""
              } ${line === "" ? "h-2 md:h-4" : ""} ${
                index === messageLines.length - 1
                  ? "font-semibold text-lg sm:text-xl md:text-2xl text-[#854F66] pt-2"
                  : ""
              }`}
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, type: "spring" }}
          className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-[#E1C4D2]/20"
        >
          <p className="text-[#E1C4D2]/60 text-xs sm:text-sm md:text-base italic">
            With warmest regards and endless admiration,
          </p>
          <p className="mt-2 text-[#BF956A] text-lg sm:text-xl md:text-2xl font-semibold">
            Tobi
          </p>
        </motion.div>

        {/* Animated background gradient */}
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, rgba(122, 74, 90, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, rgba(121, 211, 249, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 100%, rgba(191, 149, 106, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 0%, rgba(122, 74, 90, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 10 }}
          className="absolute inset-0 rounded-2xl md:rounded-3xl pointer-events-none -z-10"
        />
      </motion.div>
    </motion.div>
  );
}

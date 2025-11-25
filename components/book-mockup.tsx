"use client";

import type React from "react";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export function BookMockup() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [15, -15]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-15, 15]), {
    stiffness: 300,
    damping: 30,
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.matchMedia("(max-width: 768px)").matches ||
          "ontouchstart" in window
      );
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    if (isMobile) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    if (isMobile) return;
    x.set(0);
    y.set(0);
    setIsHovered(false);
  }

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16">
      {/* 3D Book */}
      <motion.div
        onMouseMove={handleMouse}
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: 1000,
        }}
        className="relative"
      >
        <motion.div
          style={{
            rotateX: isMobile ? 0 : rotateX,
            rotateY: isMobile ? 0 : rotateY,
            transformStyle: "preserve-3d",
          }}
          animate={
            isMobile
              ? {
                  y: [0, -8, 0],
                  rotateY: [-3, 3, -3],
                  rotateX: [2, -2, 2],
                }
              : {
                  y: isHovered ? -10 : [0, -5, 0],
                }
          }
          transition={
            isMobile
              ? {
                  y: {
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 3,
                    ease: "easeInOut",
                  },
                  rotateY: {
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 4,
                    ease: "easeInOut",
                  },
                  rotateX: {
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 5,
                    ease: "easeInOut",
                  },
                }
              : {
                  y: isHovered
                    ? { duration: 0.3 }
                    : { repeat: Number.POSITIVE_INFINITY, duration: 3 },
                }
          }
          className="relative w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80"
        >
          {/* Book cover front */}
          <motion.div
            className="absolute inset-0 rounded-lg overflow-hidden shadow-2xl"
            style={{
              transformStyle: "preserve-3d",
              transform: "translateZ(20px)",
            }}
          >
            <Image
              src="https://cdn.jsdelivr.net/gh/tobi-i-codes/semiloore@main/public/seat.png"
              alt="Book cover"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#BF956A]/20 to-transparent" />

            {/* Shine effect - Continuous for mobile, hover-based for desktop */}
            <motion.div
              animate={
                isMobile
                  ? {
                      x: ["-100%", "200%"],
                      opacity: [0, 0.4, 0],
                    }
                  : {
                      x: isHovered ? ["-100%", "200%"] : "-100%",
                      opacity: isHovered ? [0, 0.5, 0] : 0,
                    }
              }
              transition={
                isMobile
                  ? {
                      duration: 2.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 1.5,
                      ease: "easeInOut",
                    }
                  : { duration: 0.8 }
              }
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
            />
          </motion.div>

          {/* Book spine */}
          <div
            className="absolute top-0 left-0 w-4 md:w-6 h-full  rounded-l-sm"
            style={{
              transform: "rotateY(-90deg) translateZ(2px)",
              transformOrigin: "left",
            }}
          />

          {/* Book pages */}
          <div
            className="absolute top-1 md:top-2 right-0 w-3 md:w-4 h-[calc(100%-8px)] md:h-[calc(100%-16px)]  rounded-r-sm"
            style={{
              transform: "rotateY(90deg) translateX(-2px)",
              transformOrigin: "right",
            }}
          />

          {/* Shadow - Animated for mobile */}
          <motion.div
            animate={
              isMobile
                ? {
                    scale: [1, 1.08, 1],
                    opacity: [0.3, 0.4, 0.3],
                  }
                : {
                    scale: isHovered ? 1.1 : 1,
                    opacity: isHovered ? 0.4 : 0.3,
                  }
            }
            transition={
              isMobile
                ? {
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 3,
                    ease: "easeInOut",
                  }
                : { duration: 0.3 }
            }
            className="absolute -bottom-4 md:-bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-4 md:h-6 bg-black/30 blur-lg md:blur-xl rounded-full"
          />
        </motion.div>

        {/* Glow effect - Updated color to #4B1E20 and animated for mobile */}
        <motion.div
          animate={
            isMobile
              ? {
                  opacity: [0.3, 0.5, 0.3],
                  scale: [1, 1.1, 1],
                }
              : {
                  opacity: isHovered ? 0.6 : 0.3,
                  scale: isHovered ? 1.2 : 1,
                }
          }
          transition={
            isMobile
              ? {
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 3,
                  ease: "easeInOut",
                }
              : { duration: 0.3 }
          }
          className="absolute inset-0 -z-10 bg-[#4B1E20] rounded-full blur-[40px] md:blur-[60px]"
        />
      </motion.div>

      {/* Book info */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center lg:text-left max-w-md px-4 lg:px-0"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-[#79D3F9] text-xs sm:text-sm tracking-widest uppercase mb-2">
            New Release
          </p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#E1C4D2] mb-3 md:mb-4 text-balance">
            This Seat is Taken
          </h3>
          <p className="text-[#BF956A] text-base sm:text-lg md:text-xl mb-4 md:mb-6">
            By DARE-ATUNSE 'SEMILOORE
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-[#E1C4D2]/70 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8"
        >
          Edidiong is fierce, ambitious, and gunning for the Parliament's Chair.
          But she faces a massive problem: Tejumade Alde-Thomas. He is the
          charming, respected rival whose influence stands between her and the
          position.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-3"
        >
          {["Inspiring", "Transformative", "Must-Read"].map((tag, index) => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-3 py-1 md:px-4 md:py-2 glass rounded-full text-[#E1C4D2] text-xs md:text-sm"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

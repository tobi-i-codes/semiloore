"use client";

import type React from "react";

import {
  createContext,
  useContext,
  useRef,
  useState,
  useCallback,
  useEffect,
} from "react";

interface AudioContextType {
  isPlaying: boolean;
  hasInteracted: boolean;
  playMusic: () => Promise<void>;
  toggleMusic: () => void;
}

const AudioContext = createContext<AudioContextType | null>(null);

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
}

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Create audio element on mount
    audioRef.current = new Audio("/celebration-music.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 1;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const playMusic = useCallback(async () => {
    if (!audioRef.current) return;

    setHasInteracted(true);

    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch {
      // If autoplay fails, silently continue - user clicked so it should work
      // Retry once more as a fallback
      setTimeout(async () => {
        try {
          await audioRef.current?.play();
          setIsPlaying(true);
        } catch {
          // Silent fail - navigation will still happen
        }
      }, 100);
    }
  }, []);

  const toggleMusic = useCallback(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Silent fail
        });
    }
  }, [isPlaying]);

  return (
    <AudioContext.Provider
      value={{ isPlaying, hasInteracted, playMusic, toggleMusic }}
    >
      {children}
    </AudioContext.Provider>
  );
}

import type React from "react";
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { AudioProvider } from "@/components/audio-provider";
import { AudioControl } from "@/components/audio-control";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Congratulations on Your Book Launch | A Celebration",
  description:
    "A digital standing ovation celebrating an incredible book launch. Join us in honoring this momentous achievement.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/seat-icon.png", media: "(prefers-color-scheme: light)" },
      { url: "/sit-icon.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    // apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#373D54",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${playfair.variable} font-sans antialiased bg-[#373D54] min-h-screen`}
      >
        <AudioProvider>
          {children}
          <AudioControl />
        </AudioProvider>
        <Analytics />
      </body>
    </html>
  );
}

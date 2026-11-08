import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import SampleStrip from "@/components/SampleStrip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const display = Fraunces({ subsets: ["latin"], weight: ["400", "600", "700"], style: ["normal", "italic"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Animesh Pradhan — Travel Itineraries, Destinations & Stays",
  description:
    "Animesh Pradhan (@_animeshpradhan_official) — Bhubaneswar-based travel creator. Budget-friendly itineraries, destinations and stays across India and 25+ countries, planned for Indian travellers.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>
        {/* <SampleStrip /> */}
        <Navbar />
        <main>{children}</main>
        <Footer />
        <a
          className="float-ig"
          href="https://www.instagram.com/_animeshpradhan_official"
          target="_blank"
          rel="noreferrer"
          aria-label="Animesh Pradhan on Instagram"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1s-3.6 0-4.9-.1c-3.3-.1-4.8-1.7-4.9-4.9-.1-1.3-.1-1.6-.1-4.8s0-3.6.1-4.8C2.3 4 3.9 2.4 7.1 2.3c1.3-.1 1.7-.1 4.9-.1zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm5.2-9.6a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z" />
          </svg>
        </a>
      </body>
    </html>
  );
}

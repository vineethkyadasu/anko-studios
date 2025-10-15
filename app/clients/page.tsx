"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ClientsPage() {
  // List all image file names here (relative to /public/clients)
  const clientLogos = [
    "01.png",
    "02.png",
    "03.png",
    "04.svg.png",
    "06.png",
    "07.png",
    "08.jpg",
    "09.jpg",
    "10.png",
    "11.jpg",
    "12.png",
    "IMG_6902.PNG",
    "Rayal Ra.png",
    "UKTA.jpg",
  ];

  return (
    <div className="min-h-screen bg-[#0f0f10] text-gray-100">
      <Header />

      <main className="px-6 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Clients</h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            We’re proud to have collaborated with amazing brands and creators
            who trust ANKO Studios to tell their stories.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
            {clientLogos.map((file, i) => (
              <div
                key={i}
                className="flex items-center justify-center p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#d4af37]/40 transition"
              >
                <img
                  src={`/clients/${file}`}
                  alt={`Client ${i + 1}`}
                  className="max-h-20 max-w-[140px] object-contain opacity-90 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>

          <p className="mt-16 text-gray-400 text-sm">
            Interested in collaborating?{" "}
            <a
              href="/#contact"
              className="text-[#d4af37] font-semibold hover:underline"
            >
              Let’s work together →
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

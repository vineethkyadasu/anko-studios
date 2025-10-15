"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const nav = [
    { href: "/", label: "Home" },
    { href: "/#about-us", label: "About" },
    { href: "/#why-choose-us", label: "Why Us" },
    { href: "/#services", label: "Services" },
    { href: "/#gallery", label: "Gallery" },
    { href: "/clients", label: "Clients" },
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0d0d0e]/90 backdrop-blur border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img
            src="https://res.cloudinary.com/dhtytlwnz/image/upload/v1755606514/Anko_Studios_logo_bpid46.png"
            alt="Anko Studios"
            className="h-9 sm:h-11"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-gray-300 hover:text-[#d4af37] transition"
            >
              {n.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="px-4 py-2 rounded-full bg-[#d4af37] text-black text-sm font-semibold hover:opacity-90"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md border border-white/10"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-72 bg-[#0f0f10] border-l border-white/10 p-6 space-y-6">
            <div className="flex items-center justify-between">
              <img
                src="https://res.cloudinary.com/dhtytlwnz/image/upload/v1755606514/Anko_Studios_logo_bpid46.png"
                alt="Anko"
                className="h-8"
              />
              <button
                className="p-2 border border-white/10 rounded-md"
                onClick={() => setMobileOpen(false)}
              >
                <X />
              </button>
            </div>
            <div className="flex flex-col gap-3">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="px-3 py-3 rounded-lg hover:bg-white/5"
                  onClick={() => setMobileOpen(false)}
                >
                  {n.label}
                </a>
              ))}
              <a
                href="/#contact"
                className="mt-2 px-4 py-3 text-center rounded-xl bg-[#d4af37] text-black font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

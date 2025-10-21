"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

export default function ShowcaseButton() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = [
    "/pdf-slides/slide1.jpg",
    "/pdf-slides/slide2.jpg",
    "/pdf-slides/slide3.jpg",
    "/pdf-slides/slide4.jpg",
    "/pdf-slides/slide5.jpg",
    "/pdf-slides/slide6.jpg",
    "/pdf-slides/slide7.jpg",
    "/pdf-slides/slide8.jpg",
    "/pdf-slides/slide9.jpg",
  ];

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <>
      {/* Floating Button */}
      {/* Floating Button */}
<motion.button
  onClick={() => setOpen(true)}
  className="fixed bottom-6 right-6 p-2 rounded-full z-50 flex items-center justify-center"
  animate={{
    boxShadow: [
      "0 0 20px 5px rgba(212,175,55,0.6)",
      "0 0 35px 10px rgba(212,175,55,0.9)",
      "0 0 20px 5px rgba(212,175,55,0.6)",
    ],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
  }}
>
  <motion.img
    src="/images/highlight-icon.png"
    alt="Showcase"
    className="h-12 w-12 rounded-full object-contain"
    whileHover={{ scale: 1.2 }}
    transition={{ type: "spring", stiffness: 200, damping: 10 }}
  />
</motion.button>



      {/* Lightbox Slideshow */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-50"
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-[#d4af37]"
              onClick={() => setOpen(false)}
            >
              <X size={32} />
            </button>

            <div className="relative flex justify-center items-center">
  {/* Image */}
  <Image
    src={slides[index]}
    alt={`Slide ${index + 1}`}
    width={1240}
    height={1755}
    className="rounded-xl shadow-xl max-h-[90vh] w-auto h-auto object-contain"
  />

  {/* Navigation Arrows */}
<div className="absolute inset-y-0 w-full flex items-center justify-between px-6">
  <button
    onClick={prevSlide}
    className="bg-black/40 hover:bg-black/70 text-white text-5xl rounded-full p-3 transition shadow-lg"
  >
    ‹
  </button>
  <button
    onClick={nextSlide}
    className="bg-black/40 hover:bg-black/70 text-white text-5xl rounded-full p-3 transition shadow-lg"
  >
    ›
  </button>
</div>


  {/* Slide Counter */}
  <div className="absolute bottom-4 right-1/2 translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium tracking-wide">
    {index + 1} / {slides.length}
  </div>

  {/* Coming Soon Tag */}
  <div className="absolute top-4 left-4 bg-[#d4af37] text-black px-3 py-1 rounded-full text-sm font-semibold shadow-lg uppercase tracking-wide">
    Coming Soon
  </div>
</div>


          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

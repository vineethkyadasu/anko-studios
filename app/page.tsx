"use client";
import Footer from "./components/Footer";
import React, { useState } from "react";
import HeroSlideshow from "./components/HeroSlideshow";
import Testimonials from "./components/Testimonials";
import { Camera, Film, Clapperboard, Drone, ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";





export default function AnkoStudiosLanding() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const nav = [
    { href: "#about-us", label: "About" },
    { href: "#why-choose-us", label: "Why Us" },
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Gallery" },
    { href: "/clients", label: "Clients" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  const reasons = [
    {
      icon: <Camera className="w-12 h-12" aria-hidden />,
      title: "Artistic Vision",
      text: "A blend of creativity and technical skill for striking, consistent results.",
    },
    {
      icon: <Film className="w-12 h-12" aria-hidden />,
      title: "Cinematic Storytelling",
      text: "Films crafted to move people—structure, pacing and color that tell your story.",
    },
    {
      icon: <Clapperboard className="w-12 h-12" aria-hidden />,
      title: "Creative Direction",
      text: "From concept to delivery, we guide the look, feel and narrative of every project.",
    },
    {
      icon: <Drone className="w-12 h-12" aria-hidden />,
      title: "Stunning Aerials",
      text: "FAA-style discipline with cinematic flair for breathtaking perspectives.",
    },
  ];

  const services = [
    {
      icon: <Camera className="w-12 h-12" aria-hidden />,
      title: "Wedding Photography",
      text: "Emotive, elegant coverage of your day—from candid moments to timeless portraits.",
    },
    {
      icon: <Film className="w-12 h-12" aria-hidden />,
      title: "Corporate Videography",
      text: "Promos, events and training films that feel polished and on-brand.",
    },
    {
      icon: <Camera className="w-12 h-12" aria-hidden />,
      title: "Maternity & Family",
      text: "Celebrate new life and togetherness with warm, natural storytelling.",
    },
    {
      icon: <Clapperboard className="w-12 h-12" aria-hidden />,
      title: "Portrait & Portfolio",
      text: "Crisp, flattering portraits that showcase personality and professionalism.",
    },
  ];

  const testimonials = [
  {
    quote:
      "Studios in London, and I couldn’t be more impressed with their work. From start to finish, the team was professional, creative, and incredibly easy to work with. Every shot was sharp, well-composed, and full of life. Highly recommend ANKO Studios — a top-tier experience from a talented team!",
    author: "Ganesh Kuppala",
  },
  {
    quote:
      "Absolutely wonderful experience with Anko Studios London for my daughter's event! They were incredibly professional, easy to work with, and captured every moment beautifully. Very reliable and patient when dealing with customers.",
    author: "Chandra Cs",
  },
  {
    quote:
      "We’ve been using Anko Studios for photos and videos at all our events, and they never disappoint! They captured our Ganesh Festival perfectly — every moment was amazing. Highly recommend Anko Studios — super talented and great to work with!",
    author: "Janu Angel",
  },
  {
    quote:
      "Had a really good experience with Anko Studios. Anand is very professional and friendly. The photos came out beautifully with great detail and creativity. Highly recommend for housewarming, baby photoshoots, or any special event.",
    author: "Sri",
  },
  {
    quote:
      "Had a wonderful experience with Anko Studios! Anand Korva is truly fantastic — professional, friendly, talented, and patient, especially with kids. I’m extremely happy and strongly recommend Anko Studios for all kinds of events and family shoots!",
    author: "Divya Garigaboina",
  },
  {
    quote:
      "This year’s Ganesh Festival was captured beautifully thanks to Anand Anna. Every detail and candid expression was documented with passion and creativity. Truly grateful for his dedication — the video editing was mind-blowing!",
    author: "Srikanth Mudhiraj",
  },
  {
    quote:
      "This studio offers creative ideas and delivers professional photos at a very reasonable price. The photographer is patient, friendly, and truly understands Indian-style photography. A wonderful experience overall – highly recommended!",
    author: "Nagesh B",
  },
  {
    quote:
      "Anko Studios did such an amazing job capturing my little girl’s 1st birthday. The pictures turned out beautifully, and they were wonderful to work with. Highly recommend if you’re looking for a photographer to capture your best moments.",
    author: "Raghunath Reddy",
  },
  {
    quote:
      "We had an amazing experience with Anand. He did a photoshoot for our child, and the results were stunning. His patience and creativity made the entire session enjoyable. Highly recommended for anyone looking for a talented and thoughtful photographer!",
    author: "Parimala Rao",
  },
  {
    quote:
      "Great services! I have done my photoshoot from Anand Anna! And it was great! Definitely recommended!",
    author: "Ramagiri Shruthi Vyshalini",
  },
  {
    quote:
      "Amazing photography, excellent service in reasonable budget, perfect for all events and private shoots.",
    author: "Pradeep Katkam",
  },
  {
    quote:
      "Easy to work with! Great candid captures. Beautifully done photography that feels natural and full of life.",
    author: "Vidyani Suryadevara",
  },
  {
    quote:
      "I had an exceptional experience with Anko Studios in London under Anand Korva. Professionalism, creativity, and attention to detail at its best. Anand is talented and humble — truly a wonderful person and photographer. Highly recommended!",
    author: "Boddupally Raghuvaran",
  },
  {
    quote:
      "Anko Studios has always been there for me with budget-friendly, high-quality services. Anand is humble, honest, and easy to work with — no ego, no pressure, just passion and perfection. He lets his work speak for itself!",
    author: "Pavani Kollu",
  },
];


  const gallery = [
    "https://res.cloudinary.com/dhtytlwnz/image/upload/v1755617768/WhatsApp_Image_2025-08-19_at_8.53.53_PM_gcfkc5.jpg",
    "https://res.cloudinary.com/dhtytlwnz/image/upload/v1755617766/WhatsApp_Image_2025-08-19_at_8.53.53_PM_1_g0bz15.jpg",
    "https://res.cloudinary.com/dhtytlwnz/image/upload/v1755617741/WhatsApp_Image_2025-08-19_at_8.53.52_PM_sv7dkg.jpg",
    "https://res.cloudinary.com/dhtytlwnz/image/upload/v1755617732/WhatsApp_Image_2025-08-19_at_8.53.52_PM_2_aqibjn.jpg",
    "https://res.cloudinary.com/dhtytlwnz/image/upload/v1755617718/WhatsApp_Image_2025-08-19_at_8.53.52_PM_1_kqxcgm.jpg",
    "https://res.cloudinary.com/dhtytlwnz/image/upload/v1755617716/WhatsApp_Image_2025-08-19_at_8.53.51_PM_wq6rxg.jpg",
  ];

  const nextTestimonial = () =>
    setTestimonialIndex((i) => (i + 1) % testimonials.length);
  const prevTestimonial = () =>
    setTestimonialIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="min-h-screen bg-[#0f0f10] text-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#0d0d0e]/90 backdrop-blur border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3">
            <img
              src="https://res.cloudinary.com/dhtytlwnz/image/upload/v1755606514/Anko_Studios_logo_bpid46.png"
              alt="Anko Studios"
              className="h-9 sm:h-11"
            />
          </a>

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
              href="#contact"
              className="px-4 py-2 rounded-full bg-[#d4af37] text-black text-sm font-semibold hover:opacity-90"
            >
              Book Now
            </a>
          </nav>

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
            <div className="absolute inset-0 bg-black/70" onClick={() => setMobileOpen(false)} />
            <div className="absolute right-0 top-0 h-full w-72 bg-[#0f0f10] border-l border-white/10 p-6 space-y-6">
              <div className="flex items-center justify-between">
                <img
                  src="https://res.cloudinary.com/dhtytlwnz/image/upload/v1755606514/Anko_Studios_logo_bpid46.png"
                  alt="Anko"
                  className="h-8"
                />
                <button className="p-2 border border-white/10 rounded-md" onClick={() => setMobileOpen(false)}>
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
                  href="#contact"
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

      {/* Hero with Auto-Sliding Background */}
<section
  id="hero"
  className="relative flex items-center justify-center text-center min-h-[80vh] px-6 overflow-hidden"
>
  <HeroSlideshow />

  <div className="max-w-5xl mx-auto relative z-10">
    <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white">
      Crafting <span className="text-[#d4af37]">Visual Stories</span>
    </h1>
    <p className="mt-4 text-lg sm:text-xl text-gray-300">
      Professional Photography, Videography & Digital Marketing Services
    </p>
    <div className="mt-8 flex items-center justify-center gap-4">
      <a
        href="#contact"
        className="px-6 py-3 rounded-full bg-[#d4af37] text-black font-semibold hover:opacity-90"
      >
        Book a Consultation
      </a>
      <a
        href="#gallery"
        className="px-6 py-3 rounded-full border border-white/10 hover:bg-white/5"
      >
        View Gallery
      </a>
    </div>
  </div>
</section>






      {/* About */}
<section id="about-us" className="px-6 py-20 sm:py-28">
  <div className="max-w-7xl mx-auto">
    {/* Top Row: Text + Video */}
    <div className="grid md:grid-cols-2 gap-10 items-center">
      {/* Left: Text */}
      <div className="order-2 md:order-1">
        <h2 className="text-3xl sm:text-4xl font-bold">Our Passion, Your Story</h2>
        <p className="mt-4 text-gray-400">
          At ANKO Studios, we transform fleeting moments into timeless memories. Our team
          specializes in capturing your unique story with authenticity and creative vision,
          from weddings to corporate events.
        </p>
        <h3 className="mt-8 text-2xl font-semibold">Our Commitment to You</h3>
        <p className="mt-3 text-gray-400">
          We offer a personalized, seamless experience—understanding your vision and ensuring
          every detail is perfect.
        </p>
        <a href="#contact" className="inline-block mt-6 text-[#d4af37] font-semibold">
          Learn more →
        </a>
      </div>

      {/* Right: Video */}
      <div className="order-1 md:order-2">
        <video
          className="w-full h-full rounded-2xl border border-white/10 shadow-xl"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://res.cloudinary.com/dhtytlwnz/video/upload/v1755606559/Anko_logo_end_zyy0eq.mp4" type="video/mp4" />
        </video>
      </div>
    </div>

    {/* Bottom Row: 4 Portrait Images */}
    <div className="mt-16 flex flex-wrap justify-center gap-6">
      <img src="/images/about1.jpg" alt="About 1" className="w-[250px] h-[350px] object-cover rounded-2xl shadow-lg" />
      <img src="/images/about2.jpg" alt="About 2" className="w-[250px] h-[350px] object-cover rounded-2xl shadow-lg" />
      <img src="/images/about3.jpg" alt="About 3" className="w-[250px] h-[350px] object-cover rounded-2xl shadow-lg" />
      <img src="/images/about4.jpg" alt="About 4" className="w-[250px] h-[350px] object-cover rounded-2xl shadow-lg" />
    </div>
  </div>
</section>




      {/* Why Choose Us */}
      <section id="why-choose-us" className="bg-white/[0.03] border-y border-white/5 px-6 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="p-8 rounded-2xl bg-black/30 border border-white/10 hover:border-[#d4af37]/50 transition group text-center"
              >
                <div className="mx-auto mb-4 text-[#d4af37] group-hover:scale-105 transition-transform">
                  {r.icon}
                </div>
                <h3 className="text-xl font-semibold">{r.title}</h3>
                <p className="mt-2 text-gray-400 text-sm">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition text-center">
                <div className="mx-auto mb-4 text-[#d4af37]">{s.icon}</div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-gray-400 text-sm">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="px-6 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold">Our Latest Work</h2>
            <p className="text-gray-400 mt-2">A glimpse into the moments We&apos;ve captured.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((src, i) => (
              <button
                key={src}
                onClick={() => setLightboxSrc(src)}
                className="group relative rounded-xl overflow-hidden border border-white/10"
                aria-label={`Open image ${i + 1}`}
              >
                <img src={src} alt={`Gallery image ${i + 1}`} className="h-64 w-full object-cover group-hover:opacity-90 transition" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxSrc && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6" onClick={() => setLightboxSrc(null)}>
          <img src={lightboxSrc} alt="Expanded" className="max-h-[85vh] max-w-[90vw] rounded-lg border border-white/10" />
        </div>
      )}

      {/* Testimonials */}
      <section id="testimonials" className="bg-white/[0.03] border-y border-white/5 px-6 py-20 sm:py-28">
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">What Our Clients Say</h2>
          <div className="p-8 rounded-2xl bg-black/30 border border-white/10">
            <p className="italic text-gray-300">“{testimonials[testimonialIndex].quote}”</p>
            <p className="mt-4 font-semibold text-[#d4af37]">— {testimonials[testimonialIndex].author}</p>
          </div>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              className="p-2 rounded-full border border-white/10 hover:bg-white/5"
              aria-label="Previous"
              onClick={prevTestimonial}
            >
              <ChevronLeft />
            </button>
            <button
              className="p-2 rounded-full border border-white/10 hover:bg-white/5"
              aria-label="Next"
              onClick={nextTestimonial}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-20 sm:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400 mb-8">
            Ready to create something amazing? Fill out the form below and we&apos;ll be in touch.
          </p>

          {/* NOTE: Replace the email with client&apos;s address */}
          <form
            action="https://formsubmit.co/sasanklakshman1554@gmail.com"
            method="POST"
            className="space-y-4 text-left"
          >
            <input type="hidden" name="_subject" value="New Inquiry from ANKO Studios Website!" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                required
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <select
                required
                name="service"
                className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a Service
                </option>
                <option>Wedding Photography</option>
                <option>Corporate Videography</option>
                <option>Maternity & Family</option>
                <option>Portrait & Portfolio</option>
                <option>Other</option>
              </select>
              <input
                name="phone"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              />
            </div>

            <textarea
              required
              name="message"
              rows={5}
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
            />

            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-[#d4af37] text-black font-semibold hover:opacity-90"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />

    </div>
  );
}

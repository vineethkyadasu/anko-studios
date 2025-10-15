"use client";

import React from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ganesh Kuppala",
    text: `Studios in London, and I couldn’t be more impressed with their work. From start to finish, the team was professional, creative, and incredibly easy to work with. Their photography is truly outstanding — every shot was sharp, well-composed, and full of life. They have a great eye for detail and a natural ability to capture authentic moments in a way that feels both artistic and timeless.`,
  },
  {
    name: "Chandra Cs",
    text: `Absolutely wonderful experience with Anko Studios London for my daughter's event! They were incredibly professional, easy to work with, and captured every moment beautifully. The quality of the photography is superb. Very reliable and patient when dealing with customers.`,
  },
  {
    name: "Janu Angel",
    text: `We’ve been using Anko Studios for photos and videos at all our events, and they never disappoint! Recently, they covered our Ganesh Festival, and the photos and videos came out amazing. Highly recommend Anko Studios — super talented and great to work with!`,
  },
  {
    name: "Sri",
    text: `Had a really good experience with Anko Studios. Anand is very professional and friendly. The photos came out beautifully with great detail and creativity. Highly recommended for housewarming, baby photoshoots, or any special event.`,
  },
  {
    name: "Divya Garigaboina",
    text: `Had a wonderful experience with Anko Studios! Anand Korva is truly fantastic — professional, friendly, talented, and incredibly patient, especially with kids. Extremely happy and would strongly recommend Anko Studios for all kinds of events and family shoots!`,
  },
  {
    name: "Srikanth Mudhiraj",
    text: `This year’s Ganesh Festival was captured beautifully thanks to the amazing work of Anand Anna. Every moment, from the decorations to the energy of the celebrations, was documented with so much passion and creativity. The photos feel alive!`,
  },
  {
    name: "Nagesh B",
    text: `This studio offers creative ideas and delivers professional photos at a reasonable price. The photographer has patience, is friendly, and truly understands Indian-style photography. Captured traditional outfits and colors beautifully.`,
  },
  {
    name: "Raghunath Reddy",
    text: `Anko Studios did such an amazing job capturing my little girl’s 1st birthday. The pictures turned out beautifully, and they were wonderful to work with. Highly recommend!`,
  },
  {
    name: "Parimala Rao",
    text: `We had an amazing experience with Anand. He did a photoshoot for our child, and the results were absolutely stunning. His patience, creativity, and professionalism made it so enjoyable.`,
  },
  {
    name: "Ramagiri Shruthi Vyshalini",
    text: `Great services! I have done my photoshoot from Anand Anna! And it was great! Definitely recommended!`,
  },
  {
    name: "Pradeep Katkam",
    text: `Amazing photography, excellent service in reasonable budget, perfect for all events and private shoots.`,
  },
  {
    name: "Vidyani Suryadevara",
    text: `Easy to work with! Great candid captures. Highly recommend!`,
  },
  {
    name: "Boddupally Raghuvaran",
    text: `Exceptional experience with Anko Studios in London. Professionalism, creativity, and attention to detail were top-notch. Anand Anna is one of the most talented photographers I’ve met. Highly recommended!`,
  },
  {
    name: "Pavani Kollu",
    text: `Anko Studios has always been there for me with budget-friendly services and best quality. Anand is humble, honest, and easy to work with. A man of action who lets his work speak for itself!`,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-[#0f0f10] text-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-[#d4af37]">
          What Our Clients Say
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white/[0.03] border border-white/10 hover:border-[#d4af37]/40 rounded-xl p-6 text-left transition"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-[#d4af37] fill-[#d4af37]"
                  />
                ))}
              </div>
              <p className="text-gray-300 italic mb-4">“{review.text}”</p>
              <p className="font-semibold text-[#d4af37]">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";

import contentLogo from "@/assets/images/content.png";
import modeLogo from "@/assets/images/mode.png";
import quizLogo from "@/assets/images/quiz.png";
import sherestaLogo from "@/assets/images/sheresta.png";

const logos = [
  { src: contentLogo, alt: "Content CMS Platform" },
  { src: modeLogo, alt: "Mode Analytics Engine" },
  { src: quizLogo, alt: "Quiz Interactive Learning" },
  { src: sherestaLogo, alt: "Sheresta Blockchain Infrastructure" },
];

const LogoBar: React.FC = () => {
  return (
    <section className="bg-[#00473e] py-10 overflow-hidden">
      <style>{`
        @keyframes logomarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-logo-marquee {
          animation: logomarquee 30s linear infinite;
        }
      `}</style>
      <div className="main-container overflow-hidden relative">
        {/* Modern Edge Fade - Left */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-10 pointer-events-none bg-linear-to-r from-[#00473e] to-transparent" />
        
        {/* Modern Edge Fade - Right */}
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-10 pointer-events-none bg-linear-to-l from-[#00473e] to-transparent" />

        <div className="w-full flex">
          <div className="flex animate-logo-marquee whitespace-nowrap gap-12 md:gap-24 px-6 md:px-12">
            {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="relative h-6 md:h-8 w-24 md:w-32 shrink-0 brightness-0 invert opacity-50 transition-all hover:opacity-100 hover:scale-110"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoBar;

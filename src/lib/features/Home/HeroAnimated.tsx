"use client";

import React from "react";
import Image from "next/image";
import {
   Play,
   Target,
   Crown,
} from "lucide-react";

// --- TECH LOGOS (Simple Icons) ---
const TECH_LOGOS = [
   { name: "Angular", src: "https://cdn.simpleicons.org/angular" },
   { name: "TypeScript", src: "https://cdn.simpleicons.org/typescript" },
   { name: "JavaScript", src: "https://cdn.simpleicons.org/javascript" },
   { name: "Prisma", src: "https://cdn.simpleicons.org/prisma" },
   { name: "MongoDB", src: "https://cdn.simpleicons.org/mongodb" },
   { name: "Hono", src: "https://cdn.simpleicons.org/hono" },
   { name: "PostgreSQL", src: "https://cdn.simpleicons.org/postgresql" },
   { name: "Drizzle", src: "https://cdn.simpleicons.org/drizzle" },
];


// --- SUB-COMPONENTS ---
const StatItem = ({ value, label }: { value: string; label: string }) => (
   <div className="flex flex-col items-center justify-center transition-transform hover:-translate-y-1 cursor-default">
      <span className="text-xl font-bold text-(--brand-forest-green) sm:text-2xl">{value}</span>
      <span className="text-[10px] uppercase tracking-wider text-(--brand-text-muted) font-medium sm:text-xs">{label}</span>
   </div>
);

// --- MAIN COMPONENT ---
export default function HeroAnimated() {
   return (
      <div className="relative w-full bg-(--brand-parchment) text-(--brand-text-main) overflow-hidden font-sans">
         <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-fade-in {
          animation: fadeSlideIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

         <div className="absolute inset-0 z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-(--brand-primary)/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-(--brand-forest-green)/5 blur-[150px] rounded-full" />
         </div>

         <div className="relative z-10 main-container px-4 pt-24 pb-12 sm:px-6 md:pt-32 md:pb-20 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">
               <div className="lg:col-span-7 flex flex-col justify-center space-y-8 pt-8 text-left">
                  <div className="animate-fade-in delay-100">
                     <div className="inline-flex items-center gap-2 rounded-full border border-(--brand-forest-green)/10 bg-white/40 px-3 py-1.5 backdrop-blur-md transition-colors hover:bg-white/60">
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-(--brand-forest-green) flex items-center gap-2">
                           Build smarter. Launch faster. Grow bigger.
                        </span>
                     </div>
                  </div>

                  <h1
                     className="animate-fade-in delay-200 text-3xl sm:text-4xl lg:text-7xl xl:text-8xl font-medium tracking-tighter leading-[0.9] text-(--brand-primary)"
                     style={{
                        maskImage: "linear-gradient(180deg, black 0%, black 80%, transparent 100%)",
                        WebkitMaskImage: "linear-gradient(180deg, black 0%, black 80%, transparent 100%)"
                     }}
                  >
                     The web dev agency<br />
                     <span className="bg-linear-to-br from-(--brand-primary) via-(--brand-forest-green) to-(--brand-primary) bg-clip-text text-transparent">
                        That puts you
                     </span><br />
                     At the center
                  </h1>

                  <p className="animate-fade-in delay-300 max-w-xl text-lg text-(--brand-text-muted) leading-relaxed">
                     Mattrika Technologies is a full-service web design and development agency specializing in creating custom, high-performing websites tailored to meet diverse business needs.
                  </p>

                  <div className="animate-fade-in delay-400 flex flex-col sm:flex-row gap-4">
                     <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-(--brand-primary) px-8 py-4 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:bg-(--brand-primary)/90 active:scale-[0.98]" aria-label="Book a consultation call">
                        Book a call
                     </button>
                     <button className="group inline-flex items-center justify-center gap-2 rounded-full border border-(--brand-forest-green)/20 bg-white/40 px-8 py-4 text-sm font-semibold text-(--brand-forest-green) backdrop-blur-sm transition-colors hover:bg-white/60 hover:border-(--brand-forest-green)/30" aria-label="View our portfolio projects">
                        <Play className="w-4 h-4 fill-current" />
                        View Portfolio
                     </button>
                  </div>
               </div>

               <div className="lg:col-span-5 space-y-6 lg:mt-12 text-left">
                  <div className="animate-fade-in delay-500 relative overflow-hidden rounded-3xl border border-(--brand-forest-green)/10 bg-white/40 p-8 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,71,62,0.03),0_1px_2px_rgba(0,0,0,0.01)]">
                     <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-(--brand-primary)/10 blur-3xl pointer-events-none" />
                     <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-8">
                           <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--brand-primary)/10 ring-1 ring-(--brand-primary)/20">
                              <Target className="h-6 w-6 text-(--brand-primary)" />
                           </div>
                           <div>
                              <div className="text-3xl font-bold tracking-tight text-(--brand-forest-green)">150+</div>
                              <div className="text-sm text-(--brand-text-muted)">Projects Delivered</div>
                           </div>
                        </div>

                        <div className="space-y-3 mb-8">
                           <div className="flex justify-between text-sm">
                              <span className="text-(--brand-text-muted)">Client Satisfaction</span>
                              <span className="text-(--brand-forest-green) font-medium">98%</span>
                           </div>
                           <div className="h-2 w-full overflow-hidden rounded-full bg-(--brand-forest-green)/10">
                              <div className="h-full w-[98%] rounded-full bg-linear-to-r from-(--brand-primary) to-(--brand-forest-green)" />
                           </div>
                        </div>

                        <div className="h-px w-full bg-(--brand-forest-green)/10 mb-6" />

                        <div className="grid grid-cols-3 gap-4 text-center">
                           <StatItem value="5+" label="Years" />
                           <div className="w-px h-full bg-(--brand-forest-green)/10 mx-auto" />
                           <StatItem value="24/7" label="Support" />
                           <div className="w-px h-full bg-(--brand-forest-green)/10 mx-auto" />
                           <StatItem value="100%" label="Quality" />
                        </div>

                        <div className="mt-8 flex flex-wrap gap-2">
                           <div className="inline-flex items-center gap-1.5 rounded-full border border-(--brand-forest-green)/10 bg-white/40 px-3 py-1 text-[10px] font-medium tracking-wide text-(--brand-forest-green)">
                              <span className="relative flex h-2 w-2">
                                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                 <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
                              </span>
                              ACTIVE
                           </div>
                           <div className="inline-flex items-center gap-1.5 rounded-full border border-(--brand-forest-green)/10 bg-white/40 px-3 py-1 text-[10px] font-medium tracking-wide text-(--brand-forest-green)">
                              <Crown className="w-3 h-3 text-yellow-600" />
                              PREMIUM
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="animate-fade-in delay-500 relative overflow-hidden rounded-3xl border border-(--brand-forest-green)/10 bg-white/40 py-4 backdrop-blur-xl">
                     <h3 className="mb-6 px-8 text-sm font-medium text-(--brand-text-muted)">Trusted by Industry Leaders</h3>
                     <div
                        className="relative flex overflow-hidden"
                        style={{
                           maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                           WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)"
                        }}
                     >
                        <div className="flex gap-8 whitespace-nowrap px-4">
                           {[...TECH_LOGOS,].map((logo, i) => (
                              <div
                                 key={i}
                                 className="flex items-center gap-3 transition-all hover:opacity-100 hover:scale-105 cursor-default grayscale hover:grayscale-0"
                              >
                                 <div className="h-8 w-8 relative shrink-0">
                                    <Image
                                       src={logo.src}
                                       alt={`${logo.name} logo - used by Mattrika Technologies`}
                                       fill
                                       className="object-contain"
                                       unoptimized
                                    />
                                 </div>
                                 {/* <span className="text-sm font-semibold tracking-tight text-(--brand-text-muted)">{logo.name}</span> */}
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

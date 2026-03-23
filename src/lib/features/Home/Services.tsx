"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/utils/utils";

const SERVICES = [
   {
      id: "01",
      title: "Web Development",
      description: "We specialize in developing dynamic, responsive, and scalable web applications tailored to your business needs.",
   },
   {
      id: "02",
      title: "Mobile App Development",
      description: "Our mobile experts create intuitive and powerful applications for iOS and Android, ensuring a seamless user experience across all devices.",
   },
   {
      id: "03",
      title: "UI/UX Development",
      description: "We design beautiful, functional, and user-centered interfaces that enhance engagement and provide a delightful journey for your customers.",
   },
   {
      id: "04",
      title: "Maintenance",
      description: "Stay worry-free with our comprehensive maintenance services, including regular updates, bug fixes, and performance optimizations.",
   },
   {
      id: "05",
      title: "IT Consultation",
      description: "Leverage our technical expertise to navigate complex IT challenges and develop a roadmap that aligns with your long-term vision.",
   },
   {
      id: "06",
      title: "Security",
      description: "Protect your digital assets with our rigorous security protocols and audits, ensuring your data and users are safe from emerging threats.",
   },
];

export default function Services() {
   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

   return (
      <section className="py-24 bg-(--brand-parchment) overflow-hidden">
         <div className="main-container">
            {/* Heading Section */}
            <div className="text-center mb-28">
               <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-(--brand-primary) tracking-tighter leading-[1.1] uppercase">
                  OUR EXPERTISE GOES<br /> BEYOND DESIGN
               </h2>
            </div>

            {/* Services List Root */}
            <div className="relative border-t border-(--brand-text-main)/20">
               {SERVICES.map((service, index) => (
                  <motion.div
                     key={service.id}
                     onMouseEnter={() => setHoveredIndex(index)}
                     onMouseLeave={() => setHoveredIndex(null)}
                     className={cn(
                        "group relative border-b border-(--brand-text-main)/20 transition-all duration-500",
                        hoveredIndex === index ? "bg-(--brand-primary)" : "bg-transparent"
                     )}
                  >
                     <div className="relative z-20 flex px-2 py-10 md:py-16 cursor-pointer">
                        {/* 12-Column Grid Simulation */}
                        <div className="grid grid-cols-12 w-full items-center gap-4">

                           {/* Sequence Part (Col 1) */}
                           <div className="col-span-1 hidden md:block">
                              <span className={cn(
                                 "text-xs font-semibold font-mono transition-colors duration-500",
                                 hoveredIndex === index ? "text-(--brand-parchment)/60" : "text-(--brand-text-main)/40"
                              )}>
                                 ({service.id})
                              </span>
                           </div>

                           {/* Title Part (Col 2-5) */}
                           <div className="col-span-12 md:col-span-4 pl-4 md:pl-0">
                              <h3 className={cn(
                                 "text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight transition-colors duration-500",
                                 hoveredIndex === index ? "text-(--brand-parchment)" : "text-(--brand-text-main)"
                              )}>
                                 {service.title}
                              </h3>
                           </div>

                           {/* Description Part (Col 6-11) */}
                           <div className="col-span-11 md:col-span-6 md:col-start-6 mt-4 md:mt-0 transition-all duration-500">
                              <p className={cn(
                                 "text-sm md:text-base leading-relaxed transition-colors duration-500 max-w-lg",
                                 hoveredIndex === index ? "text-(--brand-parchment)/90" : "text-(--brand-text-muted)"
                              )}>
                                 {service.description}
                              </p>
                           </div>

                           {/* Arrow Part (Col 12) */}
                           <div className="col-span-1 flex justify-end pr-4">
                              <div className={cn(
                                 "transition-all duration-500 transform",
                                 hoveredIndex === index ? "opacity-100 translate-x-0 scale-110" : "opacity-0 -translate-x-8 scale-50"
                              )}>
                                 <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10 text-(--brand-parchment)" strokeWidth={1.5} />
                              </div>
                           </div>

                        </div>
                     </div>

                     {/* Centered Floating Image Background Effect */}
                     <AnimatePresence>
                        {hoveredIndex === index && (
                           <motion.div
                              initial={{ opacity: 0, scale: 0.7, y: 30 }}
                              animate={{
                                 opacity: 1,
                                 scale: 1,
                                 y: [0, -15, 0], // Continuous floating
                              }}
                              exit={{ opacity: 0, scale: 0.7, y: 30 }}
                              transition={{
                                 opacity: { duration: 0.4 },
                                 scale: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                                 y: {
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                 }
                              }}
                              className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden"
                           >

                           </motion.div>
                        )}
                     </AnimatePresence>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
}

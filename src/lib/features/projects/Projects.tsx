"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/utils/utils";

import projectImg from "@/assets/images/project.jpg";

const PROJECTS = [
   {
      id: 1,
      title: "Sheresta",
      category: "Court diary managment",
      year: "2025",
      image: projectImg,
   },
   {
      id: 2,
      title: "Quizzaro",
      category: "Education",
      year: "2025",
      image: projectImg,
   },
   {
      id: 3,
      title: "Libslingsmode",
      category: "Ecommerce",
      year: "2025",
      image: projectImg,
   },
   {
      id: 4,
      title: "ContentERP",
      category: "SaaS",
      year: "2025",
      image: projectImg,
   },
];

export default function Projects() {
   const [hoveredId, setHoveredId] = useState<number | null>(null);

   return (
      <section className="py-24 bg-(--brand-parchment)">
         <div className="main-container px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-28">
               <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-(--brand-primary) tracking-tighter leading-[1.1] uppercase">
                  Proud of our projects
               </h2>
            </div>

            {/* Staggered Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-16 md:gap-y-24">
               {PROJECTS.map((project, index) => (
                  <motion.div
                     key={project.id}
                     initial={{ opacity: 0, y: 40 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                     className={cn(
                        "group cursor-pointer",
                        index % 2 !== 0 && "md:mt-32" // Staggering effect
                     )}
                     onMouseEnter={() => setHoveredId(project.id)}
                     onMouseLeave={() => setHoveredId(null)}
                  >
                     {/* Image Container */}
                     <motion.div
                        className="relative aspect-square overflow-hidden bg-stone-200"
                        animate={{
                           borderRadius: hoveredId === project.id ? "50%" : "40px",
                           scale: hoveredId === project.id ? 0.9 : 1
                        }}
                        transition={{
                           duration: 0.8,
                           ease: [0.16, 1, 0.3, 1]
                        }}
                     >
                        <Image
                           src={project.image}
                           alt={project.title}
                           fill
                           className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Hover Overlay Icon */}
                        <AnimatePresence>
                           {hoveredId === project.id && (
                              <motion.div
                                 initial={{ opacity: 0, scale: 0.8 }}
                                 animate={{ opacity: 1, scale: 1 }}
                                 exit={{ opacity: 0, scale: 0.8 }}
                                 className="absolute inset-0 flex items-center justify-center pointer-events-none"
                              >
                                 <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl shadow-[#6B46C1]/10">
                                    <ArrowUpRight className="w-10 h-10 text-[#6B46C1]" />
                                 </div>
                              </motion.div>
                           )}
                        </AnimatePresence>
                     </motion.div>

                     {/* Project Info */}
                     <div className="mt-8 flex flex-col gap-2">
                        <h3 className={cn(
                           "text-3xl md:text-4xl font-semibold tracking-tight transition-colors duration-300",
                           hoveredId === project.id ? "text-(--brand-primary)" : "text-(--brand-text-main)"
                        )}>
                           {project.title}
                        </h3>
                        <div className="flex gap-2 text-xs md:text-sm font-medium text-(--brand-text-muted)/60 uppercase tracking-wider">
                           <span>({project.category})</span>
                           <span>({project.year})</span>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
}

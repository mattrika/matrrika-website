"use client";

import { Plus, Minus, ExternalLink } from "lucide-react";
import { Project } from "@/data/projectsData";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
   project: Project;
   index: number;
   isExpanded: boolean;
   onToggle: () => void;
}


const getTechColor = (tech: string) => {
   const techColors: Record<string, string> = {
      // Frameworks & Libraries
      "ANGULAR": "#DD0031",
      "TYPESCRIPT": "#3178C6",
      "NODE.JS": "#339933",
      "SOCKET.IO": "#010101",
      "REACT": "#61DAFB",
      "NEXT.JS": "#000000",

      // Database & ORM
      "POSTGRESQL": "#4169E1",
      "DRIZZLE": "#C5F74F",
      "PRISMA": "#2D3748",
      "HONOJS": "#E36002",

      // CSS & UI
      "TAILWIND CSS": "#06B6D4",
      "STRIPE": "#635BFF",

      // Default
      "DEFAULT": "#000000"
   };

   const normalizedTech = tech.toUpperCase();
   return techColors[normalizedTech] || techColors["DEFAULT"];
};

export default function ProjectCard({ project, index, isExpanded, onToggle }: ProjectCardProps) {
   const formattedIndex = (index + 1).toString().padStart(2, '0');

   return (
      <div
         className="border-b border-dashed border-black/10"
         itemScope
      >
         <button
            onClick={onToggle}
            className="group w-full flex items-center justify-between py-8 text-left transition-all duration-500 hover:px-4 focus:outline-none"
            aria-expanded={isExpanded}
         >
            <div className="flex items-baseline gap-12 md:gap-24">
               <span className="text-3xl md:text-5xl font-mono font-medium text-black/20 tabular-nums transition-colors duration-500 group-hover:text-black/90">
                  {formattedIndex}
               </span>
               <h3
                  className="text-2xl lg:text-5xl font-medium text-black tracking-tight leading-none group-hover:translate-x-2 transition-transform duration-500"
                  itemProp="name"
               >
                  {project.title}
               </h3>
            </div>

            <div className="flex items-center gap-8 md:gap-16">
               <span className="hidden md:block text-xs font-mono font-bold tracking-widest uppercase text-black/40 group-hover:text-black transition-colors duration-300">
                  {project.category}
               </span>
               <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border border-black/10 rounded-full group-hover:bg-(--brand-primary)  group-hover:text-white transition-all duration-500">
                  {isExpanded ? (
                     <Minus className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-500" />
                  ) : (
                     <Plus className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-500 group-hover:rotate-90" />
                  )}
               </div>
            </div>
         </button>

         {/* Expanded Content */}
         <AnimatePresence>
            {isExpanded && (
               <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
               >
                  <div className="pb-20 md:pb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                     {/* Left: Modern Immersive Image */}
                     <div className="relative overflow-hidden group/img w-full lg:h-[500px] aspect-video lg:aspect-auto rounded-xl">
                        <motion.div
                           initial={{ scale: 1.1 }}
                           animate={{ scale: 1 }}
                           transition={{ duration: 1.5, ease: "easeOut" }}
                           className="w-full h-full"
                        >
                           <Image
                              src={project.image}
                              alt={`${project.title} - ${project.subTitle}`}
                              fill
                              className="object-contain transition-transform duration-700 group-hover/img:scale-105"
                              sizes="(max-width: 1024px) 100vw, 50vw"
                              priority={index < 2}
                              itemProp="image"
                           />
                           {/* Subtle Background for "Full View" */}
                           <div className="absolute inset-0 -z-10 bg-black/5 blur-3xl opacity-50" />
                           {/* Modern Overlay */}
                           <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/5 to-black/20 opacity-60 pointer-events-none" />
                        </motion.div>
                     </div>

                     {/* Right: Info */}
                     <div className="flex flex-col justify-between py-2">
                        <div>
                           <motion.p
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.1 }}
                              className="text-xl  font-normal text-black/80 leading-snug mb-20 max-w-xl indent-20 md:indent-32"
                              itemProp="description"
                           >
                              {project.description}
                           </motion.p>

                           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                              {/* Services with Chips */}
                              <motion.div
                                 initial={{ y: 20, opacity: 0 }}
                                 animate={{ y: 0, opacity: 1 }}
                                 transition={{ delay: 0.2 }}
                              >
                                 <h4 className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-black/30 mb-6 pb-3 border-b border-black/5">
                                    Services
                                 </h4>
                                 <div className="flex flex-wrap gap-2">
                                    {project.services.map((service) => (
                                       <span
                                          key={service}
                                          className="px-3 py-1.5 rounded-full text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-wider transition-all duration-300 border border-black/10 bg-black/5 text-black"
                                       >
                                          {service}
                                       </span>
                                    ))}
                                 </div>
                              </motion.div>

                              {/* Tech with Chips */}
                              <motion.div
                                 initial={{ y: 20, opacity: 0 }}
                                 animate={{ y: 0, opacity: 1 }}
                                 transition={{ delay: 0.3 }}
                              >
                                 <h4 className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-black/30 mb-6 pb-3 border-b border-black/5">
                                    Tech Stack
                                 </h4>
                                 <div className="flex flex-wrap gap-2" itemProp="keywords">
                                    {project.tech.map((t) => {
                                       const tColor = getTechColor(t);
                                       return (
                                          <span
                                             key={t}
                                             className="px-3 py-1.5 rounded-full text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-wider transition-all duration-300 border bg-black/5"
                                             style={{
                                                borderColor: `${tColor}33`, // 33 is ~0.2 opacity in hex
                                                color: tColor
                                             }}
                                          >
                                             {t}
                                          </span>
                                       );
                                    })}
                                 </div>
                              </motion.div>
                           </div>
                        </div>

                        <motion.div
                           initial={{ y: 20, opacity: 0 }}
                           animate={{ y: 0, opacity: 1 }}
                           transition={{ delay: 0.4 }}
                        >
                           <a
                              href={project.projectLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-4 text-lg font-medium text-[var(--brand-primary)] group/link transition-all duration-300"
                              itemProp="url"
                           >
                              <span className="relative pb-1">
                                 View Live Project
                                 <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-black/10 transition-all duration-500 group-hover/link:bg-black" />
                                 <span
                                    className="absolute bottom-0 left-0 h-[1.5px] transition-all duration-500 w-0 group-hover/link:w-full bg-(--brand-primary)"
                                 />
                              </span>
                              <div
                                 className="p-3 rounded-full border border-black/10 transition-all duration-500 group-hover/link:bg-(--brand-primary) group-hover/link:text-white group-hover/link:-rotate-45"
                              >
                                 <ExternalLink className="w-5 h-5" />
                              </div>
                           </a>
                        </motion.div>
                     </div>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   );
}

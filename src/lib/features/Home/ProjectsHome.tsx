
"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import Link from "next/link";
import { PROJECTS_DATA } from "@/data/projectsData";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsHome() {
   const [activeIndex, setActiveIndex] = useState(0);
   const containerRef = useRef<HTMLDivElement>(null);
   const projects = PROJECTS_DATA.slice(0, 5);

   // Update active index based on scroll position
   const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end end"]
   });

   useEffect(() => {
      const unsubscribe = scrollYProgress.on("change", (v) => {
         const index = Math.min(
            Math.floor(v * projects.length),
            projects.length - 1
         );
         setActiveIndex(index);
      });
      return () => unsubscribe();
   }, [scrollYProgress, projects.length]);

   const handleTabClick = (index: number) => {
      setActiveIndex(index);
      // Optional: scroll to the corresponding dummy div if needed
   };

   return (
      <>
         <div className="text-center mb-28">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-(--brand-primary) tracking-tighter leading-[1.1] uppercase">
               Featured Projects
            </h2>
         </div>
         <div ref={containerRef} className=" text-black">
            <div className="main-container">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

                  {/* Fixed Left Column: Project Content Showcase */}
                  <div className="lg:col-span-7 sticky top-24 lg:h-[70vh] flex flex-col justify-center overflow-hidden">
                     <AnimatePresence mode="wait">
                        <motion.div
                           key={activeIndex}
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           exit={{ opacity: 0, y: -20 }}
                           transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                           className="relative py-12"
                        >
                           {/* Project ID Indicator */}
                           <div className="absolute top-0 left-0 -translate-y-1/2  pr-4">
                              <span className="text-[#00A991] font-mono text-xs font-bold tracking-[0.3em] uppercase">
                                 {projects[activeIndex].id}
                              </span>
                           </div>

                           <div className="space-y-8">
                              <div className="space-y-4">
                                 <h2 className="text-5xl md:text-6xl lg:text-6xl font-bold tracking-tighter leading-[0.95] text-black">
                                    {projects[activeIndex].title}
                                 </h2>
                                 <p className="text-[#00A991] text-lg md:text-xl font-medium tracking-tight">
                                    {projects[activeIndex].subTitle}
                                 </p>
                              </div>

                              <div className="max-w-xl">
                                 <p className="text-black/60 text-lg md:text-xl font-light leading-relaxed">
                                    {projects[activeIndex].description}
                                 </p>
                              </div>

                              <div className="pt-6">
                                 <Link
                                    href={projects[activeIndex].projectLink}
                                    target="_blank"
                                    className="group inline-flex items-center gap-4 text-black hover:text-[#00A991] transition-colors"
                                 >
                                    <span className="text-sm font-bold uppercase tracking-wider">Explore Project</span>
                                    <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:border-[#00A991] group-hover:bg-[#00A991] group-hover:text-white transition-all duration-300">
                                       <ArrowUpRight size={18} />
                                    </div>
                                 </Link>
                              </div>
                           </div>

                           {/* Bottom ID Indicator */}
                           <div className="absolute bottom-0 right-0 translate-y-1/2  pl-4">
                              <span className="text-[var(--brand-primary)] font-mono text-[10px] uppercase tracking-widest">
                                 {projects[activeIndex].category} — Website
                              </span>
                           </div>
                        </motion.div>
                     </AnimatePresence>
                  </div>

                  {/* Right Column: Tab Navigation */}
                  <div className="lg:col-span-5 relative lg:border-l lg:border-black/5 lg:pl-16 lg:min-h-[150vh] ">
                     <div className="lg:sticky lg:top-32">
                        {projects.map((project, index) => {
                           const isActive = activeIndex === index;
                           return (
                              <button
                                 key={project.id}
                                 onClick={() => handleTabClick(index)}
                                 className={cn(
                                    "w-full text-left group transition-all duration-500 py-6 md:py-8 outline-none border-b border-black/5 first:border-t",
                                    isActive ? "bg-black/[0.01]" : "hover:bg-black/[0.005]"
                                 )}
                              >
                                 <div className="flex justify-end gap-8 px-4 ">
                                    <span className={cn(
                                       "text-[11px] font-mono tabular-nums transition-all duration-500",
                                       isActive ? "text-[#00A991] font-bold" : "text-black/10 group-hover:text-black/40"
                                    )}>
                                       0{index + 1}
                                    </span>
                                    <div className="space-y-1">
                                       <h3 className={cn(
                                          "text-2xl md:text-3xl lg:text-4xl transition-all duration-500",
                                          isActive
                                             ? "text-black font-semibold translate-x-2"
                                             : "text-black/20 font-medium hover:text-black/50 translate-x-0"
                                       )}>
                                          {project.title}
                                       </h3>
                                       {isActive && (
                                          <motion.p
                                             initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
                                             animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
                                             className="text-[11px] uppercase tracking-widest text-[#00A991] font-bold"
                                          >
                                             Active Case — {project.id}
                                          </motion.p>
                                       )}
                                    </div>
                                 </div>
                              </button>
                           );
                        })}
                     </div>

                     {/* Scrollable Spacer to allow scroll detection */}
                     <div className="h-[120vh]" />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

// Local utility for class concatenation
function cn(...classes: (string | boolean | undefined)[]) {
   return classes.filter(Boolean).join(" ");
}

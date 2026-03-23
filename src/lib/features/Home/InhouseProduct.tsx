"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/utils";
import { Star, Bell, MessageSquare, List, UserCheck, Users, Building2 } from "lucide-react";

const starPositions = [
   { top: "10%", left: "15%", delay: 0 },
   { top: "25%", left: "75%", delay: 0.5 },
   { top: "50%", left: "20%", delay: 1 },
   { top: "70%", left: "80%", delay: 1.5 },
   { top: "85%", left: "40%", delay: 2 },
];

const InhouseProduct: React.FC = () => {
   return (
      <section className="py-16 pb-32 px-6 bg-[#fbf8f3]">
         <div className="main-container">
            <div className="bg-[#00473e] rounded-[2.5rem] p-6 md:p-12 lg:p-16 overflow-hidden relative group">
               {/* Decorative Stars */}
               {starPositions.map((pos, i) => (
                  <motion.div
                     key={i}
                     className="absolute text-white/10"
                     style={{
                        top: pos.top,
                        left: pos.left,
                     }}
                     animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.3, 0.1],
                     }}
                     transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        delay: pos.delay,
                     }}
                  >
                     <Star fill="currentColor" size={24} />
                  </motion.div>
               ))}

               <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
                  <div>
                     <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                     >
                        <span className="text-[10px] font-bold text-[#1EB79C] uppercase tracking-[0.3em] mb-3 block">
                           court diary managment
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.1] mb-6">
                           Sheresta
                        </h2>
                        <p className="text-white/70 text-base mb-8 max-w-sm">
                           The ultimate legal management platform designed to streamline law firm operations, case tracking, and client communication with precision.
                        </p>
                        <button className="button-outline">
                           Apply for Demo
                        </button>
                     </motion.div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-8 lg:py-0">
                     {[
                        { icon: Users, title: "Active Users", value: "2,500+" },
                        { icon: Building2, title: "Law Firms", value: "120+" },
                        { icon: Bell, title: "Auto Reminder", value: "Real-time" },
                        { icon: MessageSquare, title: "Custom Msg", value: "Automated" },
                        { icon: List, title: "Cause List", value: "Daily Sync" },
                        { icon: UserCheck, title: "Enrolment", value: "Simplified" },
                     ].map((feature, i) => (
                        <motion.div
                           key={i}
                           initial={{ opacity: 0, y: 20 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ delay: 0.1 * i, duration: 0.5 }}
                           className={cn(
                              "flex items-center gap-3 bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 shadow-2xl w-full",
                              // Masonry offsets for 3 columns (lg breakpoint)
                              i % 3 === 0 && "lg:translate-y-0",
                              i % 3 === 1 && "lg:translate-y-8",
                              i % 3 === 2 && "lg:translate-y-16",
                              // Staggered offsets for 2 columns (sm breakpoint)
                              i % 2 === 1 && "sm:max-lg:translate-y-10"
                           )}
                        >
                           <div className="w-10 h-10 rounded-full bg-[#1EB79C] flex items-center justify-center text-white shadow-lg shadow-[#1EB79C]/20 shrink-0">
                              <feature.icon size={20} />
                           </div>
                           <div>
                              <p className="text-[9px] font-bold text-white/50 uppercase tracking-widest leading-none mb-1 text-nowrap">
                                 {feature.title}
                              </p>
                              <p className="text-lg font-black text-white leading-none">
                                 {feature.value}
                              </p>
                           </div>
                        </motion.div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default InhouseProduct;

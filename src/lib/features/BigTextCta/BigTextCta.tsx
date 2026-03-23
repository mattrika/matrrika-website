"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface BigTextCtaProps {
   text: string;     // The main heading text
   des: string;      // The small description text
   button: string;   // The link destination or text
   label?: string;   // Optional small label at the top
}

export default function BigTextCta({ text, des, button, label }: BigTextCtaProps) {
   // Split text into words for staggered animation
   const words = text.split(" ");

   // Animation variants
   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
         },
      },
   };

   const wordVariants = {
      hidden: { y: "100%", opacity: 0 },
      visible: {
         y: 0,
         opacity: 1,
         transition: {
            duration: 0.8,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ease: [0.33, 1, 0.68, 1] as any,
         },
      },
   };

   return (
      <section className="py-20 md:py-30 px-4 md:px-8 overflow-hidden">
         <div className="main-container relative">
            <motion.div
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-100px" }}
               className="flex flex-col"
            >
               {/*
                  Staggered Layout Strategy:
                  Line 1: WE (Left) DRIVE (Right)
                  Line 2: -> YOUR (Indented) + Description
                  Line 3: SYSTEMS (Full Width)
                  Line 4: FWRD (Indented Right)
               */}

               {/* Optional Top Label */}
               {label && (
                  <motion.div
                     variants={wordVariants}
                     className="mb-8 md:mb-16"
                  >
                     <span className="text-[8px] md:text-[9px] font-mono font-bold tracking-[0.2em] uppercase text-black/40">
                        / {label}
                     </span>
                  </motion.div>
               )}

               {/* Row 1: [0] ... [1] */}
               <div className="flex gap-10 md:gap-10 items-baseline mb-4 md:mb-4">
                  <motion.span variants={wordVariants} className="text-[13vw] md:text-[10vw] font-bold tracking-tight leading-none uppercase">
                     {words[0]}
                  </motion.span>
                  <motion.span variants={wordVariants} className="text-[13vw] md:text-[10vw] font-bold tracking-tight leading-none uppercase">
                     {words[1]}
                  </motion.span>
               </div>

               {/* Row 2: -> [2] [3] + Description */}
               <div className="flex items-center justify-between gap-12 md:gap-24 mb-4 md:mb-8">
                  <div className="flex items-center gap-6 md:gap-12">
                     <motion.div variants={wordVariants} className="flex items-center">
                        <ArrowRight className="w-[8vw] h-[8vw] md:w-[6vw] md:h-[6vw] stroke-3" />
                     </motion.div>
                     <motion.span variants={wordVariants} className="text-[13vw] md:text-[10vw] font-bold tracking-tight leading-none uppercase">
                        {words[2]} {words[3]}
                     </motion.span>
                  </div>

                  {/* Small Description Block */}
                  <motion.div
                     variants={wordVariants}
                     className="max-w-[150px] md:max-w-[400px] text-right md:text-left mt-8 md:mt-0"
                  >
                     <p className="text-base md:text-lg font-normal text-black/60 leading-tight">
                        {des}
                     </p>
                     <Link href={button} className="flex justify-end text-[var(--brand-primary)]">
                        Contact Us
                     </Link>
                  </motion.div>
               </div>

               {/* Row 3: [4] [5] */}
               <div className="flex gap-10 md:gap-20 justify-start mb-4 md:mb-8">
                  <motion.span variants={wordVariants} className="text-[13vw] md:text-[10vw] font-bold tracking-tight leading-none uppercase">
                     {words[4]}
                  </motion.span>
                  <motion.span variants={wordVariants} className="text-[13vw] md:text-[10vw] font-bold tracking-tight leading-none uppercase">
                     {words[5]}
                  </motion.span>
               </div>

               {/* Row 4: [6] */}
               <div className="flex justify-center md:justify-end">
                  <motion.span variants={wordVariants} className="text-[13vw] md:text-[10vw] font-bold tracking-tight leading-none uppercase md:mr-20">
                     {words[6] || ""}
                  </motion.span>
               </div>
            </motion.div>
         </div>
      </section>
   );
}

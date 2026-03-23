"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function Contact() {
   return (
      <section className="py-24 bg-(--brand-parchment) overflow-hidden">
         <div className="main-container px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col space-y-16">

               {/* Main Heading */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
               >
                  <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-(--brand-primary) tracking-tighter leading-[0.9] uppercase">
                     HOW TO GET<br /> IN TOUCH
                  </h2>
               </motion.div>

               {/* Contact Details Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-8 border-t border-(--brand-text-main)/10">

                  {/* Phone */}
                  <motion.a
                     href="tel:019876563326"
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: 0.1 }}
                     className="group flex flex-col h-full space-y-4"
                  >
                     <div className="flex items-center gap-3 text-(--brand-text-muted) group-hover:text-(--brand-primary) transition-colors">
                        <Phone className="w-5 h-5" strokeWidth={1.5} />
                        <span className="text-sm font-semibold uppercase tracking-widest">Call Us</span>
                     </div>
                     <div className="flex items-end justify-between border-b border-(--brand-text-main)/20 pb-4 group-hover:border-(--brand-primary) transition-all mt-auto">
                        <span className="text-2xl md:text-3xl font-medium tracking-tight text-(--brand-text-main) group-hover:text-(--brand-primary)">
                           019876563326
                        </span>
                        <ArrowUpRight className="w-6 h-6 text-(--brand-text-main)/20 group-hover:text-(--brand-primary) group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                     </div>
                  </motion.a>

                  {/* Email */}
                  <motion.a
                     href="mailto:info@mattrika.com"
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: 0.2 }}
                     className="group flex flex-col h-full space-y-4"
                  >
                     <div className="flex items-center gap-3 text-(--brand-text-muted) group-hover:text-(--brand-primary) transition-colors">
                        <Mail className="w-5 h-5" strokeWidth={1.5} />
                        <span className="text-sm font-semibold uppercase tracking-widest">Email Us</span>
                     </div>
                     <div className="flex items-end justify-between border-b border-(--brand-text-main)/20 pb-4 group-hover:border-(--brand-primary) transition-all mt-auto">
                        <span className="text-2xl md:text-3xl font-medium tracking-tight text-(--brand-text-main) group-hover:text-(--brand-primary)">
                           info@mattrika.com
                        </span>
                        <ArrowUpRight className="w-6 h-6 text-(--brand-text-main)/20 group-hover:text-(--brand-primary) group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                     </div>
                  </motion.a>

                  {/* Address */}
                  <motion.div
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: 0.3 }}
                     className="group flex flex-col h-full space-y-4"
                  >
                     <div className="flex items-center gap-3 text-(--brand-text-muted)">
                        <MapPin className="w-5 h-5" strokeWidth={1.5} />
                        <span className="text-sm font-semibold uppercase tracking-widest">Visit Us</span>
                     </div>
                     <div className="border-b border-(--brand-text-main)/20 pb-4 mt-auto">
                        <p className="text-xl font-medium leading-tight text-(--brand-text-main)">
                           18 Macalister Drive<br />
                           Northborough, MA 01532, USA
                        </p>
                     </div>
                  </motion.div>
               </div>
            </div>
         </div>
      </section>
   );
}

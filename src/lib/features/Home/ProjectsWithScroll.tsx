"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

if (typeof window !== "undefined") {
   gsap.registerPlugin(ScrollTrigger);
}

const PROJECTS = [
   {
      id: "S/001",
      title: "Sheresta",
      description: "Gain strategic insights from our fractional CTOs, benefit from comprehensive technical reviews, and achieve accelerated development with expert backend, frontend, and DevOps solutions.",
      shape: "sphere",
      projectLink: "/sheresta",
   },
   {
      id: "S/002",
      title: "ContentERP",
      description: "Delivering secure immutable data, smart contract development, tokenomics, and zero-knowledge proof technologies to optimize security, transparency, and financial operations. ₿",
      shape: "cube",
      projectLink: "/blockchain",
   },
   {
      id: "S/003",
      title: "Libslinkmode",
      description: "Bring market-ready products to life with our product development services. Prototypes & MVPs, SaaS, web, and mobile applications, managed services from planning and design to coding, testing, and ongoing maintenance.",
      shape: "cylinder",
      projectLink: "/",
   },
   {
      id: "S/004",
      title: "Quzzaro",
      description: "Scale effectively with our enterprise software solutions: streamline operations with customized platforms, enhance productivity through advanced integrations, and secure your infrastructure with a robust support systems.",
      shape: "structure",
      projectLink: "/enterprise-software",
   },
   {
      id: "S/005",
      title: "Sahred Auth",
      description: "Enhance operations with AI, from strategy to development, LLM integration, automated decision systems, and OCR technology, tailored to optimize performance and efficiency.",
      shape: "sphere",
      projectLink: "/artificial-intelligence-ai",
   },
];

const IllustrationBox = ({ color = "black" }: { color?: string }) => {
   return (
      <div
         className="relative w-full flex items-center justify-center overflow-hidden"
         style={{
            paddingTop: "100%",
            backgroundColor: "#f0f1f4",
            clipPath: "inset(0 round 4px)"
         }}
      >
         <div
            className="absolute inset-0 flex items-center justify-center p-8"
            style={{ mixBlendMode: "multiply" }}
         >
            <svg
               viewBox="0 0 120 160"
               className="w-full max-w-[140px] h-auto"
               fill={color}
            >
               <circle cx="60" cy="52" r="38" />
               <circle cx="60" cy="108" r="38" />
            </svg>
         </div>
      </div>
   );
};

export default function ProjectsWithScroll() {
   const containerRef = useRef<HTMLDivElement>(null);
   const headerRefs = useRef<(HTMLDivElement | null)[]>([]);

   useGSAP(() => {
      if (!containerRef.current) return;

      const headers = headerRefs.current.filter((h): h is HTMLDivElement => h !== null);
      const headerHeight = 80; // Approximate height for pinning offset

      headers.forEach((header, i) => {
         ScrollTrigger.create({
            trigger: header,
            start: `top top+=${i * headerHeight}`,
            pin: true,
            pinSpacing: false,
            endTrigger: containerRef.current,
            end: "bottom bottom",
         });
      });

      return () => {
         ScrollTrigger.getAll().forEach((t) => t.kill());
      };
   }, { scope: containerRef });

   return (
      <section ref={containerRef} className="relative bg-white pt-20 pb-40 z-60">
         <div className="text-center mb-28">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-(--brand-primary) tracking-tighter leading-[1.1] uppercase">
               Featured Projects
            </h2>
         </div>

         <div className="main-container">
            {PROJECTS.map((project, i) => (
               <div key={project.id} className="relative last:mb-0 border-t border-dashed border-[var(--brand-primary)]/30">
                  <div
                     ref={el => { headerRefs.current[i] = el; }}
                     className="bg-white flex items-center py-6 z-60"
                  >
                     <span className="text-xs font-mono text-black/50 mr-8">{project.id}</span>
                     <h4 className="text-2xl md:text-4xl font-normal text-black tracking-tight leading-none">
                        {project.title}
                     </h4>
                  </div>

                  <div className="grid grid-cols-12 gap-10 items-start">
                     <div className="col-span-12 lg:col-span-8">
                        <p className="text-sm md:text-lg text-black/70 leading-relaxed mb-10 max-w-2xl">
                           {project.description}
                        </p>
                        <Link href={project.projectLink}
                           className="group button-filled"
                        >
                           See our projects
                        </Link>
                     </div>
                     <div className="col-span-12 lg:col-span-4 flex justify-center">
                        <div className="w-full max-w-[320px] aspect-3/4">
                           <IllustrationBox />
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
}

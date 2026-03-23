"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const TextLogo = () => {
   const logoRef = useRef<HTMLDivElement>(null);

   useGSAP(() => {
      gsap.from(".logo-letter", {
         y: 80,
         opacity: 0,
         rotate: -20,
         duration: 1,
         ease: "power3.out",
         stagger: 0.12,
      });
   }, { scope: logoRef });

   return (
      <div
         ref={logoRef}
         className="pt-4 opacity-5 pb-12 main-container"
      >
         <span className="text-[10vw] font-black leading-none whitespace-nowrap select-none">
            <span className="logo-letter inline-block">M</span>
            <span className="logo-letter inline-block">A</span>

            <span className="logo-letter inline-block text-[var(--brand-primary)]">
               T
            </span>

            <span className="logo-letter inline-block -rotate-180 font-black">
               T
            </span>

            <span className="logo-letter inline-block">R</span>
            <span className="logo-letter inline-block">I</span>
            <span className="logo-letter inline-block">K</span>
            <span className="logo-letter inline-block">A</span>
         </span>
      </div>
   );
};
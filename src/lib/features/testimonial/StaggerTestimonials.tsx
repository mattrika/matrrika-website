"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/utils/utils';
import TestimonialCard from './TestimonialCard';

const testimonials = [
   {
      tempId: 0,
      testimonial: "The Mattrika team transformed our digital presence with a premium, user-centric design that truly reflects our brand values.",
      by: "Sarah Johnson, CEO at TechFlow",
      imgSrc: "https://i.pravatar.cc/150?img=1"
   },
   {
      tempId: 1,
      testimonial: "Professionalism and creativity at its best. Their attention to detail in the UI/UX phase was exceptional.",
      by: "David Chen, CTO at SecureLayer",
      imgSrc: "https://i.pravatar.cc/150?img=2"
   },
   {
      tempId: 2,
      testimonial: "Mattrika's agile approach allowed us to launch faster than anticipated without compromising on quality.",
      by: "Elena Rodriguez, Operations Director",
      imgSrc: "https://i.pravatar.cc/150?img=3"
   },
   {
      tempId: 3,
      testimonial: "A game-changer for our workflow. Their solutions are not just beautiful, but highly functional and scalable.",
      by: "Marcus Thorne, Founder of InnovateX",
      imgSrc: "https://i.pravatar.cc/150?img=4"
   },
   {
      tempId: 4,
      testimonial: "Exceeded all expectations. The level of craftsmanship in their frontend work is unparalleled in the industry.",
      by: "Aisha Khan, Head of Design",
      imgSrc: "https://i.pravatar.cc/150?img=5"
   },
   {
      tempId: 5,
      testimonial: "I've worked with many agencies, but Mattrika stands out for their strategic thinking and technical excellence.",
      by: "Julian Vane, Product Manager",
      imgSrc: "https://i.pravatar.cc/150?img=6"
   }
];

export const StaggerTestimonials: React.FC = () => {
   const [cardSize, setCardSize] = useState(365);
   const [testimonialsList, setTestimonialsList] = useState(testimonials);

   const handleMove = useCallback((steps: number) => {
      setTestimonialsList((prevList) => {
         const newList = [...prevList];
         if (steps > 0) {
            for (let i = steps; i > 0; i--) {
               const item = newList.shift();
               if (!item) return prevList;
               newList.push({ ...item, tempId: Math.random() });
            }
         } else {
            for (let i = steps; i < 0; i++) {
               const item = newList.pop();
               if (!item) return prevList;
               newList.unshift({ ...item, tempId: Math.random() });
            }
         }
         return newList;
      });
   }, []);

   useEffect(() => {
      const updateSize = () => {
         const { matches } = window.matchMedia("(min-width: 640px)");
         setCardSize(matches ? 365 : 290);
      };

      updateSize();
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
   }, []);

   return (
      <>
         <div className="text-center mb-28">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-(--brand-primary) tracking-tighter leading-[1.1] uppercase">
               Trusted by Industry Leaders
            </h2>
            <p className="text-xl mt-4 text-(--brand-text-muted) max-w-4xl mx-auto px-4">
               Discover how Mattrika is helping businesses across the globe achieve their digital aspirations.
            </p>
         </div>
         <div
            className="relative w-full overflow-hidden bg-(--brand-parchment)"
            style={{ height: 600 }}
         >
            <div className="relative h-full flex items-center justify-center">
               {testimonialsList.map((testimonial, index) => {
                  const position = testimonialsList.length % 2
                     ? index - (testimonialsList.length + 1) / 2
                     : index - testimonialsList.length / 2;
                  return (
                     <TestimonialCard
                        key={testimonial.tempId}
                        testimonial={testimonial}
                        handleMove={handleMove}
                        position={position}
                        cardSize={cardSize}
                     />
                  );
               })}
            </div>

            <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-4 z-20">
               <button
                  onClick={() => handleMove(-1)}
                  className={cn(
                     "flex h-14 w-14 items-center justify-center text-2xl transition-all",
                     "bg-(--brand-parchment) border-2 border-(--brand-forest-green)/20 text-(--brand-forest-green)",
                     "hover:bg-(--brand-primary) hover:text-(--brand-parchment) hover:border-(--brand-primary)",
                     "focus-visible:outline-none focus:scale-95 active:scale-90"
                  )}
                  aria-label="Previous testimonial"
               >
                  <ChevronLeft />
               </button>
               <button
                  onClick={() => handleMove(1)}
                  className={cn(
                     "flex h-14 w-14 items-center justify-center text-2xl transition-all",
                     "bg-(--brand-parchment) border-2 border-(--brand-forest-green)/20 text-(--brand-forest-green)",
                     "hover:bg-(--brand-primary) hover:text-(--brand-parchment) hover:border-(--brand-primary)",
                     "focus-visible:outline-none focus:scale-95 active:scale-90"
                  )}
                  aria-label="Next testimonial"
               >
                  <ChevronRight />
               </button>
            </div>
         </div>
      </>
   );
};

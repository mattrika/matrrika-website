"use client";

import React from 'react';
import Image from 'next/image';
import { cn } from '@/utils/utils';

const SQRT_5000 = Math.sqrt(5000);

interface Testimonial {
   tempId: number;
   testimonial: string;
   by: string;
   imgSrc: string;
}

interface TestimonialCardProps {
   position: number;
   testimonial: Testimonial;
   handleMove: (steps: number) => void;
   cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
   position,
   testimonial,
   handleMove,
   cardSize
}) => {
   const isCenter = position === 0;

   return (
      <div
         onClick={() => handleMove(position)}
         className={cn(
            "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
            isCenter
               ? "z-10 bg-(--brand-primary) text-(--brand-parchment) border-(--brand-primary)"
               : "z-0 bg-(--brand-parchment) text-(--brand-text-main) border-(--brand-forest-green)/10 hover:border-(--brand-primary)/50"
         )}
         style={{
            width: cardSize,
            height: cardSize,
            clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
            transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
            boxShadow: isCenter ? "0px 8px 0px 4px var(--brand-forest-green)" : "0px 0px 0px 0px transparent"
         }}
      >
         <span
            className="absolute block origin-top-right rotate-45 bg-(--brand-forest-green)/10"
            style={{
               right: -2,
               top: 48,
               width: SQRT_5000,
               height: 2
            }}
         />
         <Image
            src={testimonial.imgSrc}
            alt={`${testimonial.by.split(',')[0]}`}
            width={48}
            height={56}
            className="mb-4 h-14 w-12 bg-muted object-cover object-top"
            style={{
               boxShadow: "3px 3px 0px var(--brand-parchment)"
            }}
         />
         <h3 className={cn(
            "text-base sm:text-xl font-medium leading-relaxed",
            isCenter ? "text-(--brand-parchment)" : "text-(--brand-text-main)"
         )}>
            &quot;{testimonial.testimonial}&quot;
         </h3>
         <p className={cn(
            "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
            isCenter ? "text-(--brand-parchment)/80" : "text-(--brand-text-muted)"
         )}>
            - {testimonial.by}
         </p>
      </div>
   );
};

export default React.memo(TestimonialCard);

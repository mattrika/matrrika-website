"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/utils/utils"

const testimonials = [
  {
    id: 1,
    quote: "This changed everything for me.",
    author: "Sarah Chen",
    role: "Designer at Figma",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 2,
    quote: "Simply brilliant. Nothing else compares.",
    author: "Marcus Johnson",
    role: "Engineer at Vercel",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 3,
    quote: "The attention to detail is unmatched.",
    author: "Elena Rodriguez",
    role: "Founder at Craft",
    avatar: "https://i.pravatar.cc/150?img=7",
  },
]

export function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [displayedQuote, setDisplayedQuote] = useState(testimonials[0].quote)
  const [displayedRole, setDisplayedRole] = useState(testimonials[0].role)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const handleSelect = (index: number) => {
    if (index === activeIndex || isAnimating) return
    setIsAnimating(true)

    setTimeout(() => {
      setDisplayedQuote(testimonials[index].quote)
      setDisplayedRole(testimonials[index].role)
      setActiveIndex(index)
      setTimeout(() => setIsAnimating(false), 400)
    }, 200)
  }

  return (
    <>  <div className="text-center mb-28">
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-(--brand-primary) tracking-tighter leading-[1.1] uppercase">
        Trusted by Industry Leaders
      </h2>
      {/* <p className="text-xl mt-4 text-(--brand-text-muted) max-w-4xl mx-auto px-4">
        Discover how Mattrika is helping businesses across the globe achieve their digital aspirations.
      </p> */}
    </div>
      <div className="flex flex-col items-center gap-10 py-16">
        {/* Quote Container */}
        <div className="relative px-8">
          <span className="absolute -left-2 -top-6 text-7xl font-serif text-(--brand-primary) select-none pointer-events-none">
            &quot;
          </span>

          <h6
            className={cn(
              "text-2xl md:text-3xl font-light text-(--brand-text-main) text-center max-w-lg leading-relaxed transition-all duration-400 ease-out",
              isAnimating ? "opacity-0 blur-sm scale-[0.98]" : "opacity-100 blur-0 scale-100",
            )}
          >
            {displayedQuote}
          </h6>

          <span className="absolute -right-2 -bottom-8 text-7xl font-serif text-(--brand-primary)  select-none pointer-events-none">
            &quot;
          </span>
        </div>

        <div className="flex flex-col items-center gap-6 mt-2">
          {/* Role text */}
          <p
            className={cn(
              "text-xs text-(--brand-text-muted) tracking-[0.2em] uppercase transition-all duration-500 ease-out",
              isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0",
            )}
          >
            {displayedRole}
          </p>

          <div className="flex items-center justify-center gap-2">
            {testimonials.map((testimonial, index) => {
              const isActive = activeIndex === index
              const isHovered = hoveredIndex === index && !isActive
              const showName = isActive || isHovered

              return (
                <button
                  key={testimonial.id}
                  onClick={() => handleSelect(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={cn(
                    "relative flex items-center gap-0 rounded-full cursor-pointer",
                    "transition-all duration-500 ease-in-out",
                    isActive ? "bg-(--brand-primary) shadow-lg" : "bg-transparent hover:bg-(--brand-forest-green)/10",
                    showName ? "pr-4 pl-2 py-2" : "p-0.5",
                  )}
                >
                  {/* Avatar with smooth ring animation */}
                  <div className="relative shrink-0">
                    <div className={cn(
                      "relative w-8 h-8 rounded-full overflow-hidden transition-all duration-500 ease-in-out",
                      isActive ? "ring-2 ring-white/30" : "ring-0",
                      !isActive && "hover:scale-105",
                    )}>
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div
                    className={cn(
                      "grid transition-all duration-500 ease-in-out",
                      showName ? "grid-cols-[1fr] opacity-100 ml-2" : "grid-cols-[0fr] opacity-0 ml-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <span
                        className={cn(
                          "text-sm font-medium whitespace-nowrap block",
                          "transition-colors duration-300",
                          isActive ? "text-white" : "text-(--brand-text-main)",
                        )}
                      >
                        {testimonial.author}
                      </span>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

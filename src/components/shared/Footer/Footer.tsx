"use client";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
   const currentYear = new Date().getFullYear();

   return (
      <footer className="bg-(--brand-parchment) py-12 border-t border-(--brand-forest-green)/5">
         <div className="main-container px-4 md:px-6">
            <div className="flex flex-col items-center">
               <div className="mb-8 flex space-x-6">
                  <a
                     href="https://facebook.com/mattrika"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/40 border border-(--brand-forest-green)/10 hover:bg-(--brand-primary) hover:text-white transition-all text-(--brand-primary)"
                  >
                     <Facebook className="h-4 w-4" />
                     <span className="sr-only">Facebook</span>
                  </a>
                  <a
                     href="https://twitter.com/mattrika"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/40 border border-(--brand-forest-green)/10 hover:bg-(--brand-primary) hover:text-white transition-all text-(--brand-primary)"
                  >
                     <Twitter className="h-4 w-4" />
                     <span className="sr-only">Twitter</span>
                  </a>
                  <a
                     href="https://instagram.com/mattrika"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/40 border border-(--brand-forest-green)/10 hover:bg-(--brand-primary) hover:text-white transition-all text-(--brand-primary)"
                  >
                     <Instagram className="h-4 w-4" />
                     <span className="sr-only">Instagram</span>
                  </a>
                  <a
                     href="https://linkedin.com/company/mattrika"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/40 border border-(--brand-forest-green)/10 hover:bg-(--brand-primary) hover:text-white transition-all text-(--brand-primary)"
                  >
                     <Linkedin className="h-4 w-4" />
                     <span className="sr-only">LinkedIn</span>
                  </a>
               </div>

               <div className="text-center">
                  <p className="text-sm text-(--brand-text-muted) font-medium tracking-wide uppercase">
                     © {currentYear} Mattrika. All rights reserved.
                  </p>
               </div>
            </div>
         </div>
      </footer>
   );
}

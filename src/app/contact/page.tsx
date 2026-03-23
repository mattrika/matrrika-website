import { Metadata } from 'next';
import { baseKeywords } from '@/utils/seo-metadata';
import ContactForm from "@/components/shared/ContactForm";
import PageSectionTitle from "@/components/shared/PageSectionTitle";
import * as motion from "framer-motion/client";
import { Suspense } from 'react';
import ErrorBoundary from '@/components/shared/ErrorBoundary';
import LoadingFallback from '@/components/shared/LoadingFallback';

export const metadata: Metadata = {
   title: "Contact Us",
   description: "Get in touch with Mattrika. Let's discuss your next software project, custom web application, or digital transformation journey.",
   keywords: [...baseKeywords, "Hire Software Agency", "Project Inquiry", "Mattrika Contact", "Development Consultation"]
};

export default function ContactPage() {
   const contactInfo = [
      { label: "Email", value: "hello@mattrika.com", href: "mailto:hello@mattrika.com" },
      { label: "Phone", value: "+1 (555) 000-0000", href: "tel:+15550000000" },
      { label: "Location", value: "18 Macalister Drive Northborough, MA 01532, USA", href: "#" },
   ];

   return (
      <main className="min-h-screen bg-(--brand-parchment) overflow-x-hidden">
         <div className="pt-20 md:pt-36 pb-40 px-4 md:px-8 main-container">

            {/* Header Section */}
            <ErrorBoundary>
               <Suspense fallback={<LoadingFallback size="sm" className="mb-24" />}>
                  <PageSectionTitle
                     title="Contact"
                     description="Send us a message and we'll get back to you shortly."
                     level={1}
                     titleAlign="left"
                     descriptionAlign="right"
                     className="mb-24 md:mb-32 pb-16 "
                  />
               </Suspense>
            </ErrorBoundary>


            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
               {/* Left Column: Info */}
               <div className="lg:col-span-4 flex flex-col gap-12 h-full sm:pt-14">
                  <ErrorBoundary>
                     <Suspense fallback={<LoadingFallback />}>
                        {contactInfo.map((info, idx) => (
                           <motion.div
                              key={info.label}
                              initial={{ y: 20, opacity: 0 }}
                              whileInView={{ y: 0, opacity: 1 }}
                              transition={{ delay: idx * 0.1 }}
                              viewport={{ once: true }}
                              className="flex flex-col gap-2"
                           >
                              <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-black/40">
                                 / {info.label}
                              </span>
                              <a
                                 href={info.href}
                                 className="text-xl md:text-2xl font-semibold text-black hover:text-(--brand-primary) transition-colors break-all md:break-normal"
                              >
                                 {info.value}
                              </a>
                           </motion.div>
                        ))}
                     </Suspense>
                  </ErrorBoundary>
               </div>

               {/* Right Column: Form */}
               <ErrorBoundary>
                  <Suspense fallback={<LoadingFallback className="lg:col-span-8" />}>
                     <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-8 bg-white/40 p-6 md:p-12 rounded-3xl backdrop-blur-md border border-black/5"
                     >
                        <ContactForm />
                     </motion.div>
                  </Suspense>
               </ErrorBoundary>
            </div>
         </div>
      </main>
   );
}
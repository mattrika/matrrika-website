

import ProjectGrid from "@/lib/features/projects/ProjectGrid";
import BigTextCta from "@/lib/features/BigTextCta/BigTextCta";
import PageSectionTitle from "@/components/shared/PageSectionTitle";
import { Suspense } from 'react';
import ErrorBoundary from '@/components/shared/ErrorBoundary';
import LoadingFallback from '@/components/shared/LoadingFallback';
import { Metadata } from 'next';
import { baseKeywords } from '@/utils/seo-metadata';

export const metadata: Metadata = {
   title: "Our Engineering Projects | Mattrika Portfolio",
   description: "Explore our portfolio of successfully delivered software solutions, custom web applications, and digital products.",
   keywords: [...baseKeywords, "Portfolio", "Software Projects", "Case Studies", "Case Studies", "mattrika projects"]
};

export default function ProjectsPage() {
   return (
      <main className="min-h-screen">
         <div className="pt-20 md:pt-28 pb-10 px-4 md:px-8">
            <div className="main-container">
               <ErrorBoundary>
                  <Suspense fallback={<LoadingFallback className="pb-16" />}>
                     <PageSectionTitle
                        title="Our Projects"
                        description="A portfolio of the digital solutions We've successfully delivered"
                        level={1}
                        titleAlign="left"
                        descriptionAlign="right"
                        className="mb-24 md:mb-32 pb-16 "
                     />
                  </Suspense>
               </ErrorBoundary>

               <ErrorBoundary>
                  <Suspense fallback={<LoadingFallback />}>
                     <ProjectGrid />
                  </Suspense>
               </ErrorBoundary>
            </div>
         </div>

         <ErrorBoundary>
            <Suspense fallback={<LoadingFallback />}>
               <BigTextCta
                  text="Building Smarter Digital Systems"
                  des="Architecting the Digital Future."
                  button="/contact"
               />
            </Suspense>
         </ErrorBoundary>
      </main>
   );
}

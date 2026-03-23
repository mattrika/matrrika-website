import HeroAnimated from '@/lib/features/Home/HeroAnimated';
import LogoBar from '@/lib/features/Home/LogoBar';
import Services from '@/lib/features/Home/Services';
import InhouseProduct from '@/lib/features/Home/InhouseProduct';
import Projects from '@/lib/features/Home/ProjectsWithScroll';

import Contact from '@/lib/features/Home/Contact';
import { Metadata } from 'next';
import { baseKeywords } from '@/utils/seo-metadata';
import { TextLogo } from '@/components/shared/TextLogo';
import { Suspense } from 'react';
import ErrorBoundary from '@/components/shared/ErrorBoundary';
import LoadingFallback from '@/components/shared/LoadingFallback';
import { Testimonial } from '@/lib/features/testimonial/testimonial';
import ProjectsHome from '@/lib/features/Home/ProjectsHome';


export const metadata: Metadata = {
  title: 'Mattrika Technologies | Custom Software & Web Development Agency',
  description: 'Mattrika Technologies is a leading software development agency building high-performance web applications and scalable digital products.',
  keywords: [...baseKeywords, 'Portfolio', 'Case Studies', 'Software Showcase', 'Web Development Agency'],
};

export default function Home() {
  return (
    <>
      {/* Hero section is usually the first thing bots see */}
      <section id="hero">
        <ErrorBoundary>
          <Suspense fallback={<LoadingFallback className="py-20" />}>
            <HeroAnimated />
          </Suspense>
        </ErrorBoundary>
      </section>

      <LogoBar />

      <section id="services" className="py-12">
        <ErrorBoundary>
          <Suspense fallback={<LoadingFallback className="py-20" />}>
            <Services />
          </Suspense>
        </ErrorBoundary>
      </section>

      <section id="products" className="py-12">
        <ErrorBoundary>
          <Suspense fallback={<LoadingFallback className="py-20" />}>
            <InhouseProduct />
          </Suspense>
        </ErrorBoundary>
      </section>

      <section id="projects" className="py-12">
        <ErrorBoundary>
          <Suspense fallback={<LoadingFallback className="py-20" />}>
            {/* <Projects /> */}
            <ProjectsHome />
          </Suspense>
        </ErrorBoundary>
      </section>

      <section id="testimonials" className="py-26">
        <ErrorBoundary>
          <Suspense fallback={<LoadingFallback className="py-20" />}>
            <Testimonial />
          </Suspense>
        </ErrorBoundary>
      </section>

      <section id="contact-us">
        <ErrorBoundary>
          <Suspense fallback={<LoadingFallback className="py-20" />}>
            <Contact />
          </Suspense>
        </ErrorBoundary>
        <TextLogo />
      </section>
    </>
  );
}
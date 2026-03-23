import { Metadata } from 'next';
import Link from 'next/link';
import * as motion from 'framer-motion/client';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Mattrika Technologies',
  description: "The page you are looking for doesn't exist. Explore Mattrika Technologies for top-tier web design and development services.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center pt-24 px-4 overflow-hidden bg-(--brand-parchment)">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-(--brand-primary) rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-(--brand-forest-green) rounded-full blur-[120px]" />
      </motion.div>

      <div className="relative z-10 text-center max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[12rem] md:text-[18rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-(--brand-primary) to-(--brand-forest-green) select-none"
        >
          404
        </motion.h1>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold  mt-[-2rem] md:mt-[-4rem] mb-6 text-[var(--brand-primary)]"
        >
          Lost in Space?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-(--brand-text-muted) mb-10 max-w-md mx-auto leading-relaxed"
        >
          The page you&apos;re looking for has vanished into the digital void. Let&apos;s get you back on track.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            href="/"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-(--brand-primary) text-white font-semibold rounded-full overflow-hidden transition-all hover:bg-(--brand-primary-hover) hover:shadow-xl active:scale-95"
          >
            <span>Back to Home</span>
            <div className="absolute inset-0 bg-white/10 translate-y-full transition-transform group-hover:translate-y-0" />
          </Link>
        </motion.div>
      </div>
      {[
        { left: '10%', top: '20%', delay: 0 },
        { left: '85%', top: '15%', delay: 0.5 },
        { left: '15%', top: '80%', delay: 1 },
        { left: '90%', top: '75%', delay: 1.5 },
        { left: '50%', top: '10%', delay: 2 },
        { left: '45%', top: '85%', delay: 2.5 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute hidden md:block w-3 h-3 bg-(--brand-primary) opacity-20 rounded-full"
          initial={{ opacity: 0 }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: pos.delay
          }}
          style={{
            left: pos.left,
            top: pos.top,
          }}
        />
      ))}
    </div>
  );
}

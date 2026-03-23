"use client";

import React from "react";
import { motion } from "framer-motion";

interface LoadingFallbackProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  fullPage?: boolean;
}

const LoadingFallback = ({ 
  className = "", 
  size = 'md',
  fullPage = false
}: LoadingFallbackProps) => {
  const sizeClasses = {
    sm: "w-6 h-6 border-2",
    md: "w-10 h-10 border-3",
    lg: "w-16 h-16 border-4"
  };

  const content = (
    <div className={`flex flex-col items-center justify-center gap-4 ${className} ${fullPage ? 'min-h-[400px]' : ''}`}>
      <motion.div
        className={`${sizeClasses[size]} border-(--brand-primary) border-t-transparent rounded-full`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-[10px] font-mono uppercase tracking-[0.3em] text-(--brand-text-muted)"
      >
        Loading...
      </motion.span>
    </div>
  );

  if (fullPage) {
    return (
      <div className="flex-1 w-full flex items-center justify-center min-h-[60vh] bg-(--brand-parchment)">
        {content}
      </div>
    );
  }

  return content;
};

export default LoadingFallback;

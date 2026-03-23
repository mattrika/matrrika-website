"use client";

import React from "react";
import { motion } from "framer-motion";

type PageSectionTitleProps = {
  title: string;
  subtitle?: string;
  description?: string;
  titleAlign?: "left" | "center" | "right";
  descriptionAlign?: "left" | "center" | "right";
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
};

const PageSectionTitle: React.FC<PageSectionTitleProps> = ({
  title,
  subtitle,
  description,
  titleAlign = "left",
  descriptionAlign = "left",
  level = 2,
  className = "",
}) => {
  const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  const headerAlignmentClasses = {
    left: "md:items-start md:justify-start",
    center: "md:items-center md:justify-center text-center",
    right: "md:items-end md:justify-end text-right",
  };

  // Determine if we should use flex-row justify-between for split layout
  const isSplitLayout = titleAlign !== descriptionAlign && description;
  const containerClasses = isSplitLayout
    ? `flex flex-col md:flex-row md:justify-between md:items-start gap-8 ${className}`
    : `flex flex-col gap-8 ${headerAlignmentClasses[titleAlign]} ${className}`;

  // Default styling for page titles (level 1) vs section titles (level 2+)
  const titleStyles = level === 1
    ? "text-6xl md:text-7xl lg:text-8xl font-bold text-[var(--brand-primary)] tracking-tighter uppercase break-words"
    : "text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--brand-primary)] tracking-tighter uppercase";

  const descriptionStyles = level === 1
    ? "text-2xl md:text-4xl lg:text-4xl font-medium text-[var(--brand-text-main)] tracking-tight leading-tight max-w-lg"
    : "text-lg md:text-xl font-medium text-black/60 max-w-2xl";

  const getTextAlignClass = (align: "left" | "center" | "right") => {
    if (align === "center") return "text-center";
    if (align === "right") return "md:text-right";
    return "text-left";
  };

  const titleMotionProps = {
    initial: { x: titleAlign === "left" ? -30 : titleAlign === "right" ? 30 : 0, y: titleAlign === "center" ? 20 : 0, opacity: 0 },
    whileInView: { x: 0, y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const descriptionMotionProps = {
    initial: { x: descriptionAlign === "left" ? -30 : descriptionAlign === "right" ? 30 : 0, y: descriptionAlign === "center" ? 20 : 0, opacity: 0 },
    whileInView: { x: 0, y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8, delay: 0.1 }
  };

  return (
    <div className={containerClasses}>
      <motion.div {...titleMotionProps} className={`flex flex-col ${getTextAlignClass(titleAlign)}`}>
        {subtitle && (
          <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.3em] uppercase text-black/40 mb-4 block">
            / {subtitle}
          </span>
        )}
        <Tag className={titleStyles}>
          {title}
        </Tag>
      </motion.div>

      {description && (
        <motion.p
          {...descriptionMotionProps}
          className={`${descriptionStyles} ${getTextAlignClass(descriptionAlign)}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default PageSectionTitle;

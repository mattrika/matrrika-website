"use client";

import React from "react";

type SectionTitleProps = {
  subtitle?: string;
  title: string;
  centered?: boolean;
};

const SectionTitle: React.FC<SectionTitleProps> = ({
  subtitle,
  title,
  centered = true,
}) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : "text-left"}`}>
      {subtitle && (
        <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-[#475569]">
          {subtitle}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-[#1e293b] leading-[1.1]">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;

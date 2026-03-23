"use client";

import React from "react";
import { Lock, Globe } from "lucide-react";

const SharedAuthFeature = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 items-center mb-40">
      <div className="flex flex-col justify-between h-full py-10">
        <h3 className="text-xs font-mono tracking-[0.4em] text-(--brand-primary) uppercase mb-6 flex items-center gap-4">Shared Auth Identity</h3>
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-(--brand-text-main) leading-tight mb-20 ">
          Redefining trust for digital groups
        </h2>

        <div>
          <p className="text-lg text-(--brand-text-muted) max-w-sm mb-8 leading-relaxed">
            Shared Auth protocol enables secure, cross-platform identity management with granular permissions.
          </p>
          <button className="bg-(--brand-primary) hover:bg-[#00362f] text-white px-8 py-3.5 rounded-full text-base font-medium transition-colors uppercase tracking-widest">
            Integrate Auth
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-[2fr_1fr] gap-4 h-[600px]">
        <div className="  rounded-3xl overflow-hidden relative h-full group">
          <div className="bg-white absolute inset-0 "></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Lock className="w-24 h-24 text-(--brand-primary)  group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" strokeWidth={1} />
          </div>
        </div>

        <div className="flex flex-col gap-4 h-full">
          <div className="flex-1 bg-white rounded-3xl p-6 border border-gray-100 flex flex-col justify-center hover:border-(--brand-primary)/20 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-px bg-gray-300"></div>
              <span className="text-base font-medium text-(--brand-text-main)">Global Reach</span>
            </div>
            <p className="text-base text-(--brand-text-muted) pl-6">Authentication coverage across 120+ regions worldwide.</p>
          </div>

          <div className="flex-1 bg-white rounded-3xl p-6 border border-gray-100 flex flex-col justify-center  hover:border-(--brand-primary)/20 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-px bg-gray-300"></div>
              <span className="text-base font-medium text-(--brand-text-main)">Compliance</span>
            </div>
            <p className="text-base text-(--brand-text-muted) pl-6">Automated GDPR and SOC2 compliance auditing.</p>
          </div>

          <div className="h-1/3 bg-white rounded-3xl overflow-hidden relative group">
            <div className="absolute inset-0"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Globe className="text-(--brand-primary) opacity-30 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharedAuthFeature;

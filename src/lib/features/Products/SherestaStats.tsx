"use client";

import React from "react";

const SherestaStats = () => {
  return (
    <div className="mt-40 mb-48">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <div className="text-xs font-mono tracking-[0.4em] text-(--brand-primary) uppercase mb-6 flex items-center gap-4">
            <div className="w-8 h-px bg-(--brand-primary)" />
            Digital Law Infrastructure
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-(--brand-text-main) leading-tight mb-6 uppercase">
            Sheresta streamlines legal access, boosts security
          </h2>
          <p className="text-lg text-(--brand-text-muted) mb-8 max-w-md">
            The EGLD network for law firms. Sheresta is a distributed network for high-precision legal applications, decentralized via professional nodes.
          </p>
          <button className="bg-(--brand-primary) hover:bg-(--brand-primary-hover) text-white px-8 py-3.5 rounded-full text-base font-medium transition-colors shadow-sm uppercase tracking-widest">
            Deploy Sheresta
          </button>
        </div>

        <div className="relative pt-10 h-full flex flex-col justify-center">
          <div className="hidden md:block absolute top-[40%] left-0 w-full h-px bg-gray-200 -rotate-6 transform origin-left"></div>

          <div className="grid grid-cols-2 gap-y-16 gap-x-8 relative z-10">
            <div className="flex flex-col items-center md:items-start md:translate-y-8">
              <div className="w-3 h-3 rounded-full bg-(--brand-primary) mb-4 border-2 border-(--brand-parchment) shadow-[0_0_0_2px_var(--brand-primary)]"></div>
              <div className="text-5xl font-semibold tracking-tight text-(--brand-text-main) mb-1">650M</div>
              <div className="text-base text-(--brand-text-muted)">Cases Analyzed</div>
            </div>

            <div className="flex flex-col items-center md:items-start md:-translate-y-8">
              <div className="w-3 h-3 rounded-full border-2 border-(--brand-primary) bg-white mb-4"></div>
              <div className="text-5xl font-semibold tracking-tight text-(--brand-text-main) mb-1">~$0.04</div>
              <div className="text-base text-(--brand-text-muted)">Query Cost</div>
            </div>

            <div className="flex flex-col items-center md:items-start md:translate-y-4">
              <div className="w-3 h-3 rounded-full border-2 border-(--brand-primary) bg-white mb-4"></div>
              <div className="text-5xl font-semibold tracking-tight text-(--brand-text-main) mb-1">3.67M</div>
              <div className="text-base text-(--brand-text-muted)">Active Vaults</div>
            </div>

            <div className="flex flex-col items-center md:items-start md:-translate-y-12">
              <div className="w-3 h-3 rounded-full border-2 border-(--brand-primary) bg-white mb-4"></div>
              <div className="text-5xl font-semibold tracking-tight text-(--brand-text-main) mb-1">24ms</div>
              <div className="text-base text-(--brand-text-muted)">Consensus Speed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SherestaStats;

"use client";

import React from "react";
import { Database } from "lucide-react";

const FutureProof = () => {
  return (
    <div className="mb-48">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-(--brand-primary) mb-6  ">Future-Proof in Every Way</h2>
        <p className="text-lg text-(--brand-text-muted) max-w-xl mx-auto">
          Mattrika leads the way toward a more sustainable and responsible infrastructure for high-performance digital things.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-3xl p-8 flex flex-col border border-gray-100 h-full min-h-[400px]">
          <p className="text-base text-(--brand-text-main) font-medium mb-12">
            Sheresta & Shared Auth are at the forefront of creating a more secure digital footprint.
          </p>

          <div className="w-32 h-32 bg-gray-100 rounded-2xl mb-8 overflow-hidden relative flex items-center justify-center">
            <Database className="text-gray-300 w-16 h-16" />
          </div>

          <div className="mt-auto flex justify-between items-end">
            <p className="text-base text-(--brand-text-muted) max-w-[150px]">Mattrika leads the way in precision.</p>
            <div className="text-right">
              <div className="text-4xl font-semibold tracking-tight text-(--brand-text-main)">821k</div>
              <div className="text-base text-(--brand-text-muted)">Active Nodes</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-3xl p-8 border border-gray-100  flex-1 flex flex-col justify-center">
            <p className="text-base text-(--brand-text-muted) leading-relaxed">
              Transforming the digital landscape to be more sustainable and user-friendly with professional-grade infrastructure.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-gray-100  flex-1 flex flex-col justify-center">
            <div className="text-5xl font-semibold tracking-tight text-(--brand-text-main) mb-2">230M</div>
            <div className="text-base text-(--brand-text-muted)">Operations Daily</div>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-gray-100  flex-1 flex items-end">
            <h3 className="text-3xl font-semibold tracking-tight text-(--brand-text-main) leading-tight">Forefront of Innovation</h3>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-3xl p-8 border border-gray-100  flex-1 flex flex-col justify-center">
            <div className="text-5xl font-semibold tracking-tight text-(--brand-text-main) mb-2">99.9%</div>
            <div className="text-base text-(--brand-text-muted)">Verified Uptime</div>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-gray-100  flex-1 flex flex-col justify-center">
            <div className="text-5xl font-semibold tracking-tight text-(--brand-text-main) mb-2">Instant</div>
            <div className="text-base text-(--brand-text-muted)">Finality Speed</div>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-gray-100  flex-1 flex flex-col justify-center group">
            <div className="text-5xl font-semibold tracking-tight text-(--brand-text-main) mb-2 group-hover:text-(--brand-primary) transition-colors">Global</div>
            <div className="text-base text-(--brand-text-muted)">Distributed Network</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureProof;

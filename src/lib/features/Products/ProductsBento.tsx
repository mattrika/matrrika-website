"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

export interface BentoCardData {
  title: string;
  description: string;
  icon: LucideIcon;
  variant: 'top-title' | 'bottom-title';
}

interface ProductsBentoProps {
  tagline: string;
  title: React.ReactNode;
  description: string;
  buttonText: string;
  cards: BentoCardData[];
  onButtonClick?: () => void;
}

const ProductsBento = ({
  tagline,
  title,
  description,
  buttonText,
  cards,
  onButtonClick
}: ProductsBentoProps) => {
  return (
    <div className="mb-48">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-xl">
          <div className="text-xs font-mono tracking-[0.4em] text-(--brand-primary) uppercase mb-6 flex items-center gap-4">
            <div className="w-8 h-px bg-(--brand-primary)" />
            {tagline}
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-(--brand-text-main) leading-tight">
            {title}
          </h2>
        </div>
        <div className="flex flex-col items-end gap-4 max-w-sm text-right">
          <p className="text-base text-(--brand-text-muted)">
            {description}
          </p>
          <button
            onClick={onButtonClick}
            className="button-filled"
          >
            {buttonText}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => {
          const Icon = card.icon;

          if (card.variant === 'top-title') {
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 flex flex-col justify-between aspect-square lg:aspect-auto min-h-[300px] border border-gray-100  group hover:border-(--brand-primary)/30 transition-colors"
              >
                <h3 className="text-2xl font-semibold tracking-tight text-(--brand-text-main)">{card.title}</h3>
                <div className="w-12 h-12 rounded-xl bg-(--brand-primary)/5 flex items-center justify-center my-4">
                  <Icon className="text-(--brand-primary) w-6 h-6" />
                </div>
                <p className="text-base text-(--brand-text-muted)">{card.description}</p>
              </div>
            );
          } else {
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 flex flex-col border border-gray-100  min-h-[300px] group hover:border-(--brand-primary)/30 transition-colors"
              >
                <p className="text-base text-(--brand-text-muted) mb-8">{card.description}</p>
                <div className="mt-auto">
                  <h3 className="text-4xl font-semibold tracking-tight text-(--brand-text-main)">{card.title}</h3>
                  <Icon className="text-(--brand-primary) mt-4 w-8 h-8 opacity-20 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ProductsBento;

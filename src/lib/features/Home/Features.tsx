"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Lightbulb, TrendingUp, ShieldCheck, Globe, Zap } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";

const features = [
   {
      icon: <Users className="text-[#00473e]" size={24} />,
      title: "Community collaboration",
      description: "Connect with like-minded individuals and experts to share ideas and work on projects together."
   },
   {
      icon: <Lightbulb className="text-[#00473e]" size={24} />,
      title: "Expert-led workshops",
      description: "Learn from the best in the industry through interactive sessions and hands-on workshops."
   },
   {
      icon: <TrendingUp className="text-[#00473e]" size={24} />,
      title: "Access to resources",
      description: "Unlock exclusive tools, datasets, and guides to help you build and scale your AI projects."
   },
   {
      icon: <ShieldCheck className="text-[#00473e]" size={24} />,
      title: "Mentorship programs",
      description: "Get personalized guidance and support from experienced professionals to navigate your journey."
   },
   {
      icon: <Globe className="text-[#00473e]" size={24} />,
      title: "Global network",
      description: "Expand your reach and connect with AI enthusiasts and pioneers from all around the world."
   },
   {
      icon: <Zap className="text-[#00473e]" size={24} />,
      title: "Cutting-edge insights",
      description: "Stay ahead of the curve with the latest trends, news, and breakthroughs in the AI space."
   }
];

const Features: React.FC = () => {
   return (
      <section className="py-24 px-6 bg-[#fbf8f3]">
         <div className="main-container">
            <SectionTitle
               subtitle="Why Become a Member?"
               title="Empowering AI innovators to build and collaborate"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
               {features.map((feature, i) => (
                  <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="p-8 rounded-4xl bg-white border border-[#00473e]/5 hover:border-[#00473e]/20 transition-all hover:shadow-xl group"
                  >
                     <div className="w-14 h-14 rounded-2xl bg-[#00473e]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        {feature.icon}
                     </div>
                     <h3 className="text-xl font-black text-[#00473e] mb-4 tracking-tight">
                        {feature.title}
                     </h3>
                     <p className="text-[#475569] leading-relaxed">
                        {feature.description}
                     </p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Features;

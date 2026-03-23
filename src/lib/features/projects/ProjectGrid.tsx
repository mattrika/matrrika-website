"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { PROJECTS_DATA } from "@/data/projectsData";

export default function ProjectGrid() {
   const [expandedId, setExpandedId] = useState<string | null>(null);

   const toggleExpand = (id: string) => {
      setExpandedId(expandedId === id ? null : id);
   };

   return (
      <div className="flex flex-col border-t border-dashed border-black/10">
         {PROJECTS_DATA.map((project, index) => (
            <ProjectCard
               key={project.id}
               project={project}
               index={index}
               isExpanded={expandedId === project.id}
               onToggle={() => toggleExpand(project.id)}
            />
         ))}
      </div>
   );
}

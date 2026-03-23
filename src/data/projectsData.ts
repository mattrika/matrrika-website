import { StaticImageData } from "next/image"

export interface Project {
   id: string;
   title: string;
   subTitle: string;
   description: string;
   image: string | StaticImageData;
   tags: string[];
   projectLink: string;
   category: string;
   services: string[];
   tech: string[];

}

import sherestaImg from "@/assets/images/projects/sheresta.png"
import quizzaroImg from "@/assets/images/projects/quizzaro.png"
import libslingsmodeImg from "@/assets/images/projects/libslingsmode.png"
import contenterpImg from "@/assets/images/projects/contenterp.png"
import pdfairImg from "@/assets/images/projects/pdfair.png"


export const PROJECTS_DATA: Project[] = [
   {
      id: "S/001",
      title: "Sheresta",
      subTitle: ' Smart Legal Case Management Platform',
      description: "A modern legal case management platform that helps law firms organize case documents, track real-time updates, manage court schedules, and access daily cause lists. It also includes a client portal where clients can securely follow case progress and stay updated on hearings, tasks, and important developments.",
      image: sherestaImg,
      tags: ["Legal Tech", "Management Platform", "Web"],
      projectLink: "https://sheresta.com",
      category: "Legal Platform",
      services: ["LEGAL MANAGEMENT", "CASE TRACKING", "DIGITAL DIARY"],
      tech: ["ANGULAR", "TYPESCRIPT", "POSTGRESQL", "HONOJS", "DRIZZLE"]
   },
   {
      id: "S/002",
      title: "Quizzaro",
      subTitle: 'Play, Learn & Win Quiz Platform',
      description: "An interactive quiz platform where users can test their knowledge, compete with others, and win real cash prizes. Designed for both desktop and mobile, Quizzaro combines education, entertainment, and fast-paced gameplay to create an exciting and rewarding quiz experience.",
      image: quizzaroImg,
      tags: ["Entertainment", "Gaming", "Mobile"],
      projectLink: "https://quizzaro.com",
      category: "Entertainment",
      services: ["GAME DESIGN", "REAL-TIME LOGIC", "SCOREBOARD"],
      tech: ["ANGULAR", "NODE.JS", "SOCKET.IO"]
   },
   {
      id: "S/003",
      title: "Lieblings Mode",
      subTitle: 'Custom Fashion Design & E-Commerce Platform',
      description: "An online fashion platform offering stylish and affordable clothing for men, women, and children. It features an interactive design canvas that allows customers to customize and create their own T-shirts and dresses by adding designs, text, and graphics before ordering.",
      image: libslingsmodeImg,
      tags: ["Ecommerce", "Fashion", "Web"],
      projectLink: "https://libslingsmode.com",
      category: "Ecommerce",
      services: ["E-COMMERCE FLOW", "PAYMENT INTEGRATION", "UI/UX DESIGN"],
      tech: ["ANGULAR", "STRIPE", "TAILWIND CSS", "PRISMA"]
   },
   {
      id: "S/004",
      title: "ContentERP",
      subTitle: 'Smart Content Workflow Platform',
      description: "An all-in-one content management and workflow platform designed to streamline the entire content creation process—from idea generation to publishing—while enabling team collaboration, task automation, analytics, and seamless integrations in a single centralized system",
      image: contenterpImg,
      tags: ["ERP", "Content Management", "Web"],
      projectLink: "https://contenterp.com",
      category: "Enterprise",
      services: ["CONTENT WORKFLOW", "ANALYTICS DASHBOARD", "SEO TOOLS"],
      tech: ["Angular", "Node.js", "PostgreSQL", "PRISMA"]
   },
   {
      id: "S/005",
      title: "PdfAir",
      subTitle: 'Manage and Sync Your PDF Library Across Devices',
      description: "You have Always wanted to read the books in your collection. You see interesting artictes online and want to save it as PDF to read it later. But you dont have enough time. Also, you forget where you stored them.",
      image: pdfairImg,
      tags: ["Tools", "PDF", "Web"],
      projectLink: "https://pdfair.com/",
      category: "Tools",
      services: ["PDF TOOLS", "PDF EDITING", "PDF CONVERSION"],
      tech: ["Angular", "HONOJS", "DRIZZLE", "POSTGRESQL"]
   }
];

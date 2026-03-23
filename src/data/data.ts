import { NavLink, WebsiteDetails } from "@/types/data.types";

export const navLinks: NavLink[] = [
   { name: "Our Product", href: "/products" },
   { name: "Projects", href: "/projects" },
   { name: "Contact Us", href: "/contact" },
];

export const websitedetails: WebsiteDetails = {
   name: "Mattrika Technologies",
   tagline: "Build smarter. Launch faster. Grow bigger.",
   description: "Mattrika Technologies is a full-service web design and development agency specializing in creating custom, high-performing websites tailored to meet diverse business needs.",
   cta: "Book a call",
   ctaLink: "/contact",
}
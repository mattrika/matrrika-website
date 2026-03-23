import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products | Innovative Digital Solutions",
  description: "Explore our cutting-edge products including PdfAir for seamless PDF management and Shared Auth for secure identity.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

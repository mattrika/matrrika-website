"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-4 bg-(--brand-parchment) text-center">
      <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-8">
        <AlertCircle className="w-10 h-10 text-red-500" />
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-(--brand-primary) mb-4 tracking-tighter">
        Something went wrong!
      </h1>
      
      <p className="text-lg text-(--brand-text-muted) mb-12 max-w-md mx-auto">
        An unexpected error occurred while processing your request. Our team has been notified.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          onClick={() => reset()}
          className="bg-(--brand-primary) hover:bg-(--brand-primary)/90 text-white px-8 py-6 rounded-full text-lg font-semibold h-auto"
        >
          Try again
        </Button>
        
        <Button
          variant="outline"
          className="border-(--brand-forest-green)/20 text-(--brand-forest-green) px-8 py-6 rounded-full text-lg font-semibold h-auto"
          onClick={() => window.location.href = "/"}
        >
          Go back home
        </Button>
      </div>
    </div>
  );
}

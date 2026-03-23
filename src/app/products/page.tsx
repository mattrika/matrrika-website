"use client";

import PageSectionTitle from "@/components/shared/PageSectionTitle";
import ProductsBento from "@/lib/features/Products/ProductsBento";
import SharedAuthFeature from "@/lib/features/Products/SharedAuthFeature";
import FutureProof from "@/lib/features/Products/FutureProof";
import { Fingerprint, Activity, Shield, Cpu, Lock, Network, FileCheck } from "lucide-react";
import { Suspense } from 'react';
import ErrorBoundary from '@/components/shared/ErrorBoundary';
import LoadingFallback from '@/components/shared/LoadingFallback';
export default function ProductsPage() {
    const sharedAuthCards = [
        {
            title: "Biometric Logic",
            description: "Integrate secure biometric factors with decentralized trust anchors.",
            icon: Fingerprint,
            variant: "top-title" as const
        },
        {
            title: "Robust",
            description: "Handling over 43 Billion aggregate authentication events.",
            icon: Activity,
            variant: "bottom-title" as const
        },
        {
            title: "Secure ZK-Proof",
            description: "Provable security guarantees without exposing sensitive user data.",
            icon: Shield,
            variant: "top-title" as const
        },
        {
            title: "Scalable VM",
            description: "WASM-based logic ensures maximum throughput and cross-chain compatibility.",
            icon: Cpu,
            variant: "bottom-title" as const
        }
    ];

    const pdfairCards = [
        {
            title: "Cloud Workspace",
            description: "A centralized hub for all your PDF books, tutorials, and articles in one secure location.",
            icon: Network,
            variant: "top-title" as const
        },
        {
            title: "Progress Sync",
            description: "Automatically tracks and syncs reading status across all your devices seamlessly.",
            icon: Activity,
            variant: "bottom-title" as const
        },
        {
            title: "Secure Library",
            description: "High-performance cloud storage ensuring your digital collection is safe and accessible.",
            icon: Lock,
            variant: "top-title" as const
        },
        {
            title: "Smart Discovery",
            description: "Quickly locate any document with integrated search, tags, and advanced filters.",
            icon: FileCheck,
            variant: "bottom-title" as const
        }
    ];

    return (
        <main className="relative pt-32 pb-24 overflow-hidden bg-(--brand-parchment) main-container">
            <ErrorBoundary>
                <Suspense fallback={<LoadingFallback className="pb-16" />}>
                    <PageSectionTitle
                        title="Our Products"
                        level={1}
                        titleAlign="left"
                        descriptionAlign="right"
                        className="mb-24 md:mb-32 pb-16"
                        description="Modern software solutions built to streamline business operations"
                    />
                </Suspense>
            </ErrorBoundary>

            <div className="max-w-7xl mx-auto px-6 relative">
                {/* <SherestaStats /> */}

                {/* PdfAir Bento */}
                <ErrorBoundary>
                    <Suspense fallback={<LoadingFallback className="mb-48" />}>
                        <ProductsBento
                            tagline="PdfAir"
                            title={<>Manage and Sync Your <br /> PDF Library Across Devices</>}
                            description="PdfAir helps you aggregate and sync your PDF books, tutorials, and articles in one secure location. It automatically tracks your reading progress across all devices, ensuring you never lose your place."
                            buttonText="Try PdfAir Now"
                            cards={pdfairCards}
                        />
                    </Suspense>
                </ErrorBoundary>

                {/* Shared Auth Bento */}
                <ErrorBoundary>
                    <Suspense fallback={<LoadingFallback className="mb-48" />}>
                        <ProductsBento
                            tagline="Shared-auth"
                            title="Shared Auth: Identity redefined for all things digital"
                            description="Zero-knowledge proof authentication and decentralized group management at internet scale."
                            buttonText="Start Building"
                            cards={sharedAuthCards}
                        />
                    </Suspense>
                </ErrorBoundary>

                <ErrorBoundary>
                    <Suspense fallback={<LoadingFallback />}>
                        <SharedAuthFeature />
                    </Suspense>
                </ErrorBoundary>

                <ErrorBoundary>
                    <Suspense fallback={<LoadingFallback />}>
                        <FutureProof />
                    </Suspense>
                </ErrorBoundary>
            </div>
        </main>
    );
}

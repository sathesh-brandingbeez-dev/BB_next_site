"use client";

import { useEffect } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { AppToastProvider } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PerformanceOptimizer } from "@/components/performance-optimizer";
import { CriticalPathOptimizer } from "@/components/critical-path-optimizer";
import { CookieConsent } from "@/components/cookie-consent";
import { SecurityHeadersProvider } from "@/components/security-headers";
import { ThankYouProvider } from "@/context/thank-you-context";
import { queryClient } from "@/lib/queryClient";

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const gclid = params.get("gclid");

    if (gclid && !sessionStorage.getItem("bb_gclid")) {
      sessionStorage.setItem("bb_gclid", gclid);
    }
  }, []);

  useEffect(() => {
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error("Unhandled promise rejection:", event.reason);
    };

    const handleError = (event: ErrorEvent) => {
      console.error("Global error caught:", event.error);
    };

    window.addEventListener("unhandledrejection", handleUnhandledRejection);
    window.addEventListener("error", handleError);

    return () => {
      window.removeEventListener("unhandledrejection", handleUnhandledRejection);
      window.removeEventListener("error", handleError);
    };
  }, []);

  return (
    <SecurityHeadersProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <AppToastProvider>
            <ThankYouProvider>
              <CriticalPathOptimizer />
              <PerformanceOptimizer />
              {children}
              <CookieConsent />
            </ThankYouProvider>
          </AppToastProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </SecurityHeadersProvider>
  );
}

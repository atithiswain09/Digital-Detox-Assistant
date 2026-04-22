import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { NotFoundError } from "@/features/errors/not-found-error";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import React from "react";
import { Suspense } from "react";
import { ErrorBoundary } from "@/components/shared/ErrorBoundary";
import { SEO } from "@/components/shared/SEO";
import Footer from "@/pages/home/Footer";

const Navbar = React.lazy(() => import("@/components/layout/navbar"));
const GridBackground = React.lazy(
  () => import("@/components/shared/GridBackground"),
);

export const Route = createRootRoute({
  component: RootComponent,
  errorComponent: ErrorBoundary,
  notFoundComponent: NotFoundError,
});

function RootComponent() {
  return (
    <React.Fragment>
      <TooltipProvider>
        <ThemeProvider>
          <SEO
            title="Digital Detox Assistant"
            description="Your personal assistant for digital wellness and healthy tech habits."
            keywords="digital detox, tech balance, wellness, focus, productivity"
          />
          <Outlet />
        </ThemeProvider>
      </TooltipProvider>
      {import.meta.env.MODE === "development" && (
        <TanStackRouterDevtools position="bottom-right" />
      )}
    </React.Fragment>
  );
}

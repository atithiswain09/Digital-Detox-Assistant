import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { NotFoundError } from "@/features/errors/not-found-error";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import React from "react";
import { Suspense } from "react";

const Navbar = React.lazy(() => import("@/components/layout/navbar"));
const GridBackground = React.lazy(
  () => import("@/components/shared/GridBackground"),
);

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundError,
});

function RootComponent() {
  return (
    <React.Fragment>
      <TooltipProvider>
        <ThemeProvider>
          <div className="h-screen w-full flex flex-col">
            <Suspense fallback={null}>
              <Navbar />
            </Suspense>
            <main className="flex-1">
              <Outlet />
            </main>
          </div>
        </ThemeProvider>
      </TooltipProvider>
      {import.meta.env.MODE === "development" && (
        <TanStackRouterDevtools position="bottom-right" />
      )}
    </React.Fragment>
  );
}

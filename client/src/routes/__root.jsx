import Navbar from "@/components/layout/navbar";
import { GridBackground } from "@/components/shared/GridBackground";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { NotFoundError } from "@/features/errors/not-found-error";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import React from "react";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundError,
});

function RootComponent() {
  return (
    <React.Fragment>
      <TooltipProvider>
        <ThemeProvider>
          <GridBackground className="pointer-events-none" />
          <div className="h-screen w-full flex flex-col">
            <Navbar />
            <main className="px-4 flex-1">
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

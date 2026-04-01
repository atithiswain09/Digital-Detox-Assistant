import Navbar from "@/components/layout/navbar";
import { GridBackground } from "@/components/shared/GridBackground";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { TooltipProvider } from "@/components/ui/tooltip";
import { NotFoundError } from "@/features/errors/not-found-error";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ChevronDown, Menu, Shield } from "lucide-react";
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

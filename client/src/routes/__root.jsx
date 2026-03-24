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
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/features", label: "Features", dropdown: true },
    { to: "/pricing", label: "Pricing" },
    { to: "/resources", label: "Resources", dropdown: true },
  ];

  return (
    <React.Fragment>
      <TooltipProvider>
        <ThemeProvider>
          <div className="h-screen w-full flex flex-col">
            <header className="fixed w-full">
              <div className="p-4 absolute left-1/2 -translate-x-1/2 w-full">
                <nav className="p-2 w-full backdrop-blur-xs bg-white/30 dark:bg-gray-900/30 md:w-4/5 lg:w-2/3 mx-auto flex justify-between border rounded-lg">
                  <div className="flex gap-6">
                    <Shield className="h-8 w-8 p-1" />
                    <div className="hidden md:flex gap-2">
                      {navLinks.map(({ to, label, dropdown }) => (
                        <Button key={to} asChild variant="link">
                          <Link to={to} className="flex gap-1 items-center">
                            {label} {dropdown && <ChevronDown />}
                          </Link>
                        </Button>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <ThemeToggle className="hidden sm:flex" />
                    <Menu className="block md:hidden h-8 w-8 p-1" />
                  </div>
                </nav>
              </div>
            </header>
            <div className="w-full m-10"></div>
            <main className="p-4 flex-1">
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

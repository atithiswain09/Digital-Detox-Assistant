import * as React from "react";
import Hero from "@/pages/home/Hero";
import { createLazyFileRoute } from "@tanstack/react-router";
import Gap from "@/components/gap";
import Features from "@/pages/home/Features";

const GridBackground = React.lazy(
  () => import("@/components/shared/GridBackground"),
);

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <GridBackground />
      <Hero />
      <Gap className="h-0 md:h-20 lg:h-40" />
      <Features />
    </>
  );
}

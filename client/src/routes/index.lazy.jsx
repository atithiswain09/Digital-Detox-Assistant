import * as React from "react";
import Hero from "@/pages/home/Hero";
import { createLazyFileRoute } from "@tanstack/react-router";
import Features from "@/pages/home/Features";
import AboutUs from "@/pages/home/About";
import FooterCTA from "@/pages/home/FooterCTA";
import { SEO } from "@/components/shared/SEO";

const GridBackground = React.lazy(
  () => import("@/components/shared/GridBackground"),
);

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <SEO
        title="Home"
        description="Welcome to Digital Detox Assistant - Your partner in digital wellness and productivity."
        keywords="digital detox, wellness, productivity, focus, digital health"
      />
      <GridBackground />
      <Hero />
      <Features />
      <AboutUs />
      <FooterCTA />
    </>
  );
}

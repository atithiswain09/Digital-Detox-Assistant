import * as React from "react";
import Hero from "@/pages/home/Hero";
import { createFileRoute } from "@tanstack/react-router";
import Features from "@/pages/home/Features";
import AboutUs from "@/pages/home/About";
import { SEO } from "@/components/shared/SEO";
// import FooterCTA from "@/pages/home/FooterCTA";

const GridBackground = React.lazy(
  () => import("@/components/shared/GridBackground"),
);

export const Route = createFileRoute("/(info)/")({
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
      {/* <FooterCTA /> */}
      <AboutUs />
    </>
  );
}

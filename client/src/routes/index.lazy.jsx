import { Hero } from "@/pages/home/Hero";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="h-screen pt-20">
      <Hero />
    </div>
  );
}

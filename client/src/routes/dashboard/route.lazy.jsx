import { Outlet, createLazyFileRoute } from "@tanstack/react-router";
import { SEO } from "@/components/shared/SEO";

export const Route = createLazyFileRoute("/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex gap-1">
      <SEO
        title="Dashboard"
        description="Your Digital Detox Dashboard"
        keywords="dashboard, stats, detox"
      />
      Hello <Outlet />
    </div>
  );
}

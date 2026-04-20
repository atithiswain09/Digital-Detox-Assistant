import { createFileRoute } from "@tanstack/react-router";
import { SEO } from "@/components/shared/SEO";

export const Route = createFileRoute("/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <SEO
        title="Dashboard"
        description="Access your digital detox dashboard to track your usage, set goals, and monitor your progress."
        keywords="dashboard, statistics, usage tracking, goals, digital detox"
      />
      <div>Dashboard Page</div>
    </>
  );
}

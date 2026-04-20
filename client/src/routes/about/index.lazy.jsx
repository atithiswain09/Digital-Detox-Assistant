import { createLazyFileRoute } from "@tanstack/react-router";
import { SEO } from "@/components/shared/SEO";

export const Route = createLazyFileRoute("/about/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <SEO 
        title="About Us" 
        description="Learn more about Digital Detox Assistant and our mission to help you achieve a healthier relationship with technology." 
        keywords="about us, mission, digital wellness, tech balance"
      />
      <div>About Page</div>
    </>
  );
}

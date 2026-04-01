import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="text-center">
      {Array.from({ length: 200 }).map((_, idx) => (
        <p key={idx}>Hello Home Page, it's a test of look</p>
      ))}
    </div>
  );
}

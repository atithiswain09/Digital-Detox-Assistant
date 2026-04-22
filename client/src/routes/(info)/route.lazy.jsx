import Navbar from "@/components/layout/navbar";
import Footer from "@/pages/home/Footer";
import { createLazyFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/(info)")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="h-screen w-full flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { SEO } from "@/components/shared/SEO";
import AboutUs from "@/pages/home/About";
import Features from "@/pages/home/Features";
import Hero from "@/pages/home/Hero";

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

import React from "react";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { ShieldX, ClockIcon, ChartBarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import { DotPattern } from "@/components/ui/dot-pattern";
import { AnimatedGradientBadge } from "@/components/ui/animated-gradient-badge";

const features = [
  {
    Icon: ShieldX,
    name: "Block Distracting Websites",
    description:
      "Easily block distracting websites, either permanently or on a schedule.",
    className: "col-span-3 sm:col-span-1",
    href: "#",
    cta: "Learn More",
    background: (
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
          "size-full inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
    ),
  },
  {
    Icon: ClockIcon,
    name: "Track Your Screen Time",
    description: "Get insights into your daily screen time and usage habits.",
    className: "col-span-3 sm:col-span-1",
    href: "#",
    cta: "Learn More",
    background: (
      <DotPattern
        glow={true}
        className={cn(
          "size-full mask-[radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
    ),
  },
  {
    Icon: ChartBarIcon,
    name: "Visualize Your Habits",
    description:
      "Understand your patterns with clear, actionable data visualizations.",
    className: "col-span-3 sm:col-span-2 sm:col-start-1 lg:col-span-1",
    href: "#",
    cta: "Learn More",
    background: (
      <StripedPattern className="size-full opacity-30 stroke-[0.3] [stroke-dasharray:8,4]" />
    ),
  },
];

function CoreFeaturesGrid() {
  return (
    <BentoGrid
      className={cn(
        "py-8",
        "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        "gap-6",
      )}
    >
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}

const Features = () => {
  return (
    <section className="container mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <div className="flex w-full flex-col items-center justify-center text-center">
        <AnimatedGradientBadge className="text-xl mb-4">
          Features
        </AnimatedGradientBadge>
        <h2 className="mt-6 font-heading text-3xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Why Choose Digital Detox Assistant?
        </h2>
        <p className="mt-4 max-w-2xl text-lg tracking-tight text-muted-foreground text-balance">
          Discover tools designed to help you regain your focus and build
          healthier tech habits.
        </p>
      </div>
      <div className="mt-12 md:mt-16">
        <CoreFeaturesGrid />
      </div>
    </section>
  );
};

export default Features;

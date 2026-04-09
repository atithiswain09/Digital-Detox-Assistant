import React from "react";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { ShieldX, ClockIcon, ChartBarIcon } from "lucide-react";

const features = [
  {
    Icon: ShieldX,
    name: "Block Distracting Websites",
    description:
      "Easily block distracting websites, either permanently or on a schedule.",
    className: "col-span-3 sm:col-span-1",
  },
  {
    Icon: ClockIcon,
    name: "Track Your Screen Time",
    description: "Get insights into your daily screen time and usage habits.",
    className: "col-span-3 sm:col-span-1",
  },
  {
    Icon: ChartBarIcon,
    name: "Visualize Your Habits",
    description:
      "Understand your patterns with clear, actionable data visualizations.",
    className: "col-span-3 sm:col-span-1",
  },
];

function CoreFeaturesGrid() {
  return (
    <BentoGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={6} autorows="200px" className="py-8">
      {features.map((feature, idx) => (
        <BentoCard
          key={idx}
          Icon={feature.Icon}
          name={feature.name}
          description={feature.description}
          className={feature.className}
          background={null} // optional: you can add subtle background animations later
        />
      ))}
    </BentoGrid>
  );
}

const Features = () => {
  return (
    <section className="mx-auto w-full max-w-full md:max-w-7xl px-4 md:px-12 lg:px-20 pt-10">
      <div className="opacity-100 transform-none will-change-[opacity]">
        <div className="flex flex-col w-full items-center lg:items-center justify-center py-8">
          <div className="relative inline-flex h-8 overflow-hidden rounded-full p-[1.5px] focus:outline-none select-none">
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#6d28d9_0%,#d8b4fe_50%,#6d28d9_100%)]"></span>
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Features
            </span>
          </div>
          <h2 className="text-center lg:text-center text-3xl md:text-5xl leading-[1.1]! font-medium font-heading text-foreground mt-6">
            Why Choose Digital Detox Assistant?
          </h2>
          <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            ipsum quod recusandae vitae.
          </p>
        </div>
      </div>
      <div className="opacity-100 transform-none will-change-[opacity]">
        <CoreFeaturesGrid />
      </div>
    </section>
  );
};

export default Features;

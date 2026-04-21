import { AnimatedGradientBadge } from "@/components/ui/animated-gradient-badge";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="container mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <div className="flex w-full flex-col items-center justify-center text-center">
        <AnimatedGradientBadge className="text-xl mb-4">
          Our belief
        </AnimatedGradientBadge>

        <h2 className="mt-6 font-heading text-3xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Why We Exist
        </h2>

        <Card className="mt-12 max-w-4xl text-center md:mt-16">
          <CardContent className="flex justify-between space-x-2 p-6 md:space-x-4 md:p-12">
            <span className="flex w-6 shrink-0 text-muted-foreground/40 md:w-10">
              <Quote className="h-6 w-6 rotate-180 md:h-8 md:w-8" />
            </span>
            <p className="text-balance text-base tracking-wide text-foreground sm:text-lg md:text-xl/relaxed">
              We help you take back your time from endless scrolling.{" "}
              <span className="hidden md:inline">
                By tracking your screen habits, blocking distractions, and
                showing exactly where your attention goes, Digital Detox
                Assistant turns awareness into action—so you can focus on what
                actually matters.
              </span>
            </p>
            <span className="flex w-6 shrink-0 items-end justify-end text-muted-foreground/40 md:w-10">
              <Quote className="h-6 w-6 md:h-8 md:w-8" />
            </span>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutUs;

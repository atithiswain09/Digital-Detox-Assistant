import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="container mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <div className="flex w-full flex-col items-center justify-center text-center">
        <div className="relative inline-flex h-8 select-none overflow-hidden rounded-full p-[1.5px] focus:outline-none">
          <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#6d28d9_0%,#d8b4fe_50%,#6d28d9_100%)]"></span>
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-4 py-1 text-sm font-medium text-foreground backdrop-blur-3xl">
            Our belief
          </span>
        </div>
        <h2 className="mt-6 font-heading text-3xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Why We Exist
        </h2>

        <Card className="mt-12 text-center max-w-3xl md:mt-16">
          <CardContent className="flex justify-between space-x-4 p-8 md:p-12">
            <span className="flex w-8 text-muted-foreground/40 md:w-10">
              <Quote className="rotate-180" size="32" />
            </span>
            <p className="text-balance text-lg tracking-wide text-foreground md:text-xl/relaxed">
              We help you take back your time from endless scrolling.
              <span className="hidden md:inline">
                {" "}
                By tracking your screen habits, blocking distractions, and
                showing exactly where your attention goes, Digital Detox
                Assistant turns awareness into action—so you can focus on what
                actually matters.
              </span>
            </p>
            <span className="flex w-8 items-end justify-end text-muted-foreground/40 md:w-10">
              <Quote size="32" />
            </span>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutUs;

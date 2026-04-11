import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="mx-auto w-full max-w-full md:max-w-7xl px-4 md:py-12 lg:py-20 pt-10">
      <div className="opacity-100 transform-none will-change-[opacity]">
        <div className="flex flex-col w-full items-center lg:items-center justify-center py-8">
          <div className="relative inline-flex h-8 overflow-hidden rounded-full p-[1.5px] focus:outline-none select-none">
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#6d28d9_0%,#d8b4fe_50%,#6d28d9_100%)]"></span>
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-4 py-1 text-sm font-medium text-foreground backdrop-blur-3xl">
              Our belief
            </span>
          </div>
          <h2 className="text-center lg:text-center text-3xl md:text-5xl leading-[1.1]! font-medium font-heading text-foreground mt-6">
            Why We Exist
          </h2>

          <Card className="mt-6 text-center max-w-3xl">
            <CardContent className="flex justify-between space-x-2">
              <span className="flex w-6">
                <Quote className="rotate-180" size="24" />
              </span>
              <p className="text-base/normal tracking-wide py-4">
                We help you take back your time from endless scrolling.
                <span className="hidden md:inline">{" "}
                  By tracking your screen habits, blocking distractions, and showing exactly where your attention goes, Digital Detox Assistant turns awareness into action—so you can focus on what actually matters.
                </span>
              </p>
              <span className="flex w-6 items-end">
                <Quote size="24" />
              </span>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

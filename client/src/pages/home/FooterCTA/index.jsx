import AmbientGradientGlow from "@/components/ui/ambient-gradient-glow";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

const FooterCTA = () => {
  return (
    <section className="container mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24 overflow-clip">
      <div className="relative flex min-h-[80vh] w-full flex-col items-center justify-center overflow-x-clip rounded-3xl z-0">
        <AmbientGradientGlow />
        <div className="relative z-50 flex -translate-y-48 flex-col items-center px-4 md:-translate-y-64">
          <div className="relative flex w-full flex-col items-center justify-center text-center">
            <h2 className="mt-8 bg-linear-to-b from-neutral-200 to-neutral-500 bg-clip-text py-4 font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
              Don’t let another hour <br className="hidden md:inline" /> slip
              away
            </h2>
            <p className="mt-6 mx-auto max-w-lg text-balance text-lg tracking-tight text-muted-foreground">
              Regain focus, cut the noise, and make this time count—starting
              right now
            </p>
            <div className="mt-10">
              <Link to="/auth/signup">
                <Button
                  size="lg"
                  className="h-12 px-8 text-base font-medium rounded-sm cursor-pointer"
                >
                  Start Now <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;

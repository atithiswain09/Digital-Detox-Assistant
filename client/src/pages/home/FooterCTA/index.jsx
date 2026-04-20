import AmbientGradientGlow from "@/components/ui/ambient-gradient-glow";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

const FooterCTA = () => {
  return (
    <section className="mx-auto w-full md:max-w-7xl px-4 md:px-12 lg:px-20 mt-20 max-w-[100vw]">
      <div className="opacity-100 transform-none will-change-[opacity]">
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden w-full rounded-md z-0">
          <AmbientGradientGlow />
          <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
            <div className="flex flex-col items-center justify-center relative w-full text-center">
              <h2 className="bg-linear-to-b from-neutral-200 to-neutral-400 py-4 bg-clip-text text-center text-4xl md:text-7xl leading-[1.15]! font-medium font-heading tracking-tight text-transparent mt-8">
                Don’t let another hour <br className="hidden md:inline" /> slip
                away
              </h2>
              <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                Regain focus, cut the noise, and make this time count—starting
                right now
              </p>
              <div className="mt-6">
                <Link to="/get-started">
                  <Button className="w-fit px-10 py-4 font-medium rounded-sm cursor-pointer">
                    Start Now <ArrowRight />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;

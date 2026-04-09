import { RainbowButton } from "@/components/ui/rainbow-button";
import Rising from "@/components/ui/rising";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen w-full sm:pt-20 flex justify-center items-center">
      <div className="size-full relative flex justify-center items-center flex-col">
        <div className="flex justify-center text-center flex-col">
          <h1 className="w-full text-center py-6 font-heading font-semibold bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent text-balance tracking-tight leading-[1.1] text-4xl sm:text-6xl md:text-7xl lg:text-8xl lg:px-40">
            Take Control of Your Digital{" "}
            <span className="inline-block bg-linear-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              Health
            </span>
          </h1>
          <p className="mb-12 text-lg tracking-tight text-muted-foreground md:text-xl text-balance">
            Manage screen time and reduce distractions for better focus.
          </p>
          <Link className="mx-auto" to="/auth/signup">
            <RainbowButton className="w-fit px-10">
              Start Now <ArrowRight />
            </RainbowButton>
          </Link>
        </div>
        <Rising className="absolute overflow-clip pt-0 top-30/25" />
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import Rising from "@/components/ui/rising";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] w-full items-center justify-center py-16 md:py-24 lg:py-32 overflow-x-clip">
      <div className="container relative flex h-full w-full max-w-7xl flex-col items-center justify-center px-4 md:px-8">
        <div className="flex flex-col items-center justify-center text-center z-10">
          <h1 className="w-full max-w-5xl py-6 font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-transparent bg-clip-text bg-linear-to-r from-foreground to-muted-foreground text-balance sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Take Control of Your Digital{" "}
            <span className="inline-block bg-linear-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              Health
            </span>
          </h1>
          <p className="mb-10 max-w-2xl text-lg tracking-tight text-muted-foreground md:text-xl text-balance">
            Manage screen time and reduce distractions for better focus.
          </p>
          <Link className="mx-auto" to="/auth/signup">
            <Button
              size="lg"
              className="h-12 px-8 text-base font-medium rounded-sm cursor-pointer"
            >
              Start Now <ArrowRight className="ml-2 size-4" />
            </Button>
          </Link>
        </div>
        <Rising className="absolute min-w-screen overflow-clip pt-0 top-30/25" />
      </div>
    </section>
  );
}

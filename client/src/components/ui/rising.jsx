import { cn } from "@/lib/utils";

/**
 * @param {Object} props
 * @param {string} [props.className] - Optional additional className to customize styling.
 * @returns {JSX.Element}
 */
const Rising = ({ className }) => {
  return (
    <div className={cn("pointer-events-none w-full pt-12", className)}>
      <div
        data-slot="rising-small-illustration"
        className="relative w-full pt-[20%] overflow-x-clip bg-linear-to-b from-transparent from-20% to-background -z-10"
      >
        <div className="dark:border-brand bg-background/50 border-brand-foreground/80 absolute top-0 -left-[50%] z-10 w-[200%] overflow-hidden rounded-[100%] border-t-4 pt-[100%]">
          <div className="animate-pulse-hover bg-brand-foreground/50 absolute top-0 -left-[50%] h-[200%] w-[200%] rounded-[100%] mask-[radial-gradient(140%_95%,transparent_0%,transparent_35%,black_55%)]"></div>
          <div className="animate-pulse-hover bg-brand/50 absolute top-0 -left-[50%] h-[200%] w-[200%] rounded-[100%] mask-[radial-gradient(140%_110%,transparent_0%,transparent_35%,black_55%)]"></div>
          <div className="animate-pulse-hover bg-white absolute -top-[5%] -left-[50%] h-[200%] w-[200%] rounded-[100%] dark:bg-brand-foreground mask-[radial-gradient(140%_120%,transparent_0%,transparent_38%,black_43%)]"></div>
        </div>
        <div data-slot="glow" className="absolute w-full top-[50%]">
          <div className="from-brand-foreground/50 to-brand-foreground/0 absolute left-1/2 h-64 w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-128 dark:opacity-100 -translate-y-1/2"></div>
          <div className="from-brand/30 to-brand-foreground/0 absolute left-1/2 h-32 w-[40%] -translate-x-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-64 dark:opacity-100 -translate-y-1/2 mask-[linear-gradient(to_bottom,var(--brand-foreground),transparent)]"></div>
        </div>
      </div>
    </div>
  );
};

export default Rising;

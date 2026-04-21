import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * AnimatedGradientBadge component
 * A reusable Shadcn-style component with a spinning conic-gradient border.
 */
const AnimatedGradientBadge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative inline-flex h-8 select-none overflow-hidden rounded-full p-[1.5px] focus:outline-none",
        className
      )}
      {...props}
    >
      {/* Spinning gradient background */}
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--color-primary)_0%,#d8b4fe_50%,var(--color-primary)_100%)]" />
      
      {/* Inner content area */}
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-4 py-1 text-sm font-medium text-foreground backdrop-blur-3xl">
        {children}
      </span>
    </div>
  );
});

AnimatedGradientBadge.displayName = "AnimatedGradientBadge";

export { AnimatedGradientBadge }; 

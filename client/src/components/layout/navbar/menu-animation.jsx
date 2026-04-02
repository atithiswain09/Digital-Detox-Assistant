import { useScrollLock } from "@/hooks/use-scroll-lock";
import { Suspense, useMemo, memo } from "react";
import { lazy } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence } from "motion/react";

const MotionWrapper = lazy(() => import("./motion-wrapper"));

function MotionMenu({ isMenuOpen }) {
  useScrollLock(isMenuOpen);

  const navLinks = useMemo(
    () => [
      { to: "/", label: "Home" },
      { to: "/features", label: "Features" },
      { to: "/pricing", label: "Pricing" },
      { to: "/resources", label: "Resources" },
    ],
    [],
  );

  return (
    <Suspense fallback={null}>
      <AnimatePresence>
        {isMenuOpen && <MotionWrapper navLinks={navLinks} />}
      </AnimatePresence>
    </Suspense>
  );
}

export default memo(MotionMenu);

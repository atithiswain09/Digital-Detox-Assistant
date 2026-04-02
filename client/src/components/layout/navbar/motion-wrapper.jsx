import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { memo } from "react";

const MotionDiv = motion.div;

function MotionWrapper({ navLinks }) {
  return (
    <MotionDiv
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="overflow-hidden w-full max-h-96 py-4 md:hidden"
    >
      {navLinks.map((link) => (
        <div className="px-4 py-2" key={link.to}>
          <Link to={link.to}>{link.label}</Link>
        </div>
      ))}
    </MotionDiv>
  );
}

export default memo(MotionWrapper);

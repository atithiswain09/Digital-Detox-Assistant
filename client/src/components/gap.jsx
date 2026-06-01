import React from "react";
import { cn } from "@/lib/utils";

/**
 * @param {Object} props
 * @param {string} [props.className] - Optional additional className to customize styling.
 * @returns {JSX.Element}
 */
const Gap = ({ className }) => {
	return <div className={cn("w-full", className)}></div>;
};

export default Gap;

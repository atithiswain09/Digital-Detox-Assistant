import React from "react";

const AmbientGradientGlow = () => {
  return (
    <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
      <div className="absolute opacity-100 will-change-[opacity] inset-auto right-1/2 h-56 overflow-visible w-120 bg-gradient-conic from-slate-blue-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top] bg-conic-[from_70deg_at_center_top]">
        <div className="absolute w-full left-0 bg-background h-40 bottom-0 z-20 mask-[linear-gradient(to_top,white,transparent)]"></div>
        <div className="absolute w-40 h-full left-0 bg-background bottom-0 z-20 mask-[linear-gradient(to_right,white,transparent)]"></div>
      </div>
      <div className="absolute opacity-100 will-change-[opacity] inset-auto left-1/2 h-56 w-120 bg-gradient-conic from-transparent via-transparent to-slate-blue-500 text-white [--conic-position:from_290deg_at_center_top] bg-conic-[from_290deg_at_center_top]">
        <div className="absolute w-40 h-full right-0 bg-background bottom-0 z-20 mask-[linear-gradient(to_left,white,transparent)]"></div>
        <div className="absolute w-full right-0 bg-background h-40 bottom-0 z-20 mask-[linear-gradient(to_top,white,transparent)]"></div>
      </div>
      <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-background blur-[8rem]"></div>
      <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
      <div className="absolute inset-auto z-30 h-36 w-64 -translate-y-24 rounded-full bg-slate-blue-400 blur-2xl will-change-auto"></div>
      <div className="absolute inset-auto z-50 h-0.5 w-120 -translate-y-28 bg-slate-blue-400 will-change-auto"></div>
      <div className="absolute inset-auto z-40 h-44 w-full -translate-y-50 bg-background"></div>
    </div>
  );
};

export default AmbientGradientGlow;

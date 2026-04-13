import type { ReactNode } from "react";

export type SpotlightProps = {
  children?: ReactNode;
  className?: string;
};

export default function Spotlight({ children, className }: SpotlightProps) {
  return (
    <div
      className={
        className ??
        "relative overflow-hidden bg-background"
      }
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.35),transparent_60%)] blur-2xl" />
        <div className="absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.25),transparent_60%)] blur-2xl" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

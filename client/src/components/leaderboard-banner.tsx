"use client";

import Link from "next/link";
import { ArrowRight, Crown, Trophy } from "lucide-react";

/** Yellow, interactive "View Leaderboard" card for the sidebar footer. */
export function LeaderboardBanner() {
  return (
    <Link
      href="/leaderboard"
      className="group/lb relative flex h-full flex-col overflow-hidden rounded-lg border border-amber-200 bg-gradient-to-br from-white via-amber-50 to-yellow-200 px-3 py-4 text-black shadow-2xs transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-300/40 active:translate-y-0"
    >
      {/* shimmer sweep on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/70 opacity-0 blur-sm transition-all duration-700 group-hover/lb:left-[120%] group-hover/lb:opacity-100"
      />

      {/* clean vector decoration: rings, podium bars, sparkles */}
      <svg
        aria-hidden="true"
        viewBox="0 0 160 120"
        className="pointer-events-none absolute -right-3 -bottom-3 h-28 w-36 text-amber-500/20 transition-transform duration-500 group-hover/lb:scale-110 group-hover/lb:-rotate-3"
      >
        <circle
          cx="120"
          cy="40"
          r="34"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="120"
          cy="40"
          r="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect x="70" y="84" width="22" height="36" rx="3" fill="currentColor" />
        <rect x="96" y="66" width="22" height="54" rx="3" fill="currentColor" />
        <rect
          x="122"
          y="92"
          width="22"
          height="28"
          rx="3"
          fill="currentColor"
        />
        <path d="M30 24l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill="currentColor" />
        <path d="M52 70l2 4 4 2-4 2-2 4-2-4-4-2 4-2z" fill="currentColor" />
      </svg>

      <div className="relative z-10 flex flex-col">
        <div className="mb-1 flex items-center gap-1.5 text-black">
          <Trophy className="size-3.5 transition-transform duration-300 group-hover/lb:-rotate-12 group-hover/lb:scale-125" />
          <span className="text-sm font-semibold tracking-tight">
            Leaderboard
          </span>
          <Crown className="size-3 text-black opacity-0 transition-all duration-300 group-hover/lb:-translate-y-0.5 group-hover/lb:opacity-100" />
        </div>
        <p className="mb-3 text-[12px] leading-snug text-black">
          See the top performing agents this week.
        </p>
        <span className="mx-auto flex w-fit items-center justify-center gap-1.5 rounded-lg bg-black px-4 py-1.5 text-[10px] font-medium text-white shadow-xs transition-all">
          View Leaderboard
          <ArrowRight className="size-3 transition-transform group-hover/lb:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

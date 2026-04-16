"use client";

import { motion } from "framer-motion";
import { fadeUp, hoverLift } from "../motionPresets";

export type SalesStructureCardProps = {
  label: string;
  title: string;
  sub: string;
  visual: React.ReactNode;
};

export default function SalesStructureCard({ label, title, sub, visual }: SalesStructureCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      {...hoverLift}
      className="card-ring p-5 h-full overflow-hidden"
    >
      <div className="relative space-y-3">
        <div className="flex items-center justify-between gap-3">
          <span className="text-[11px] font-semibold tracking-widest text-emerald-200/90 uppercase">
            {label}
          </span>
          <span className="text-[11px] text-neutral-500 rounded-full border border-white/10 bg-white/5 px-2 py-1">
            모듈
          </span>
        </div>
        <div className="text-lg font-semibold leading-snug">{title}</div>

        <div className="rounded-2xl border border-white/10 bg-black/20 overflow-hidden">
          {visual}
        </div>

        <div className="text-sm text-neutral-400 leading-snug">{sub}</div>
      </div>
    </motion.article>
  );
}


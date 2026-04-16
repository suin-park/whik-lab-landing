"use client";

import { motion } from "framer-motion";
import {
  Box,
  FileText,
  Megaphone,
  MessageCircle,
  Sparkles,
  Video,
} from "lucide-react";
import { fadeUp, hoverLift } from "../motionPresets";

type IconKey = "box" | "page" | "test" | "video" | "contact" | "small";

const iconMap: Record<IconKey, React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>> = {
  box: Box,
  page: FileText,
  test: Megaphone,
  video: Video,
  contact: MessageCircle,
  small: Sparkles,
};

export type SalesAudienceCardProps = {
  icon: IconKey;
  title: string;
  sub: string;
};

export default function SalesAudienceCard({ icon, title, sub }: SalesAudienceCardProps) {
  const Icon = iconMap[icon] ?? Box;
  return (
    <motion.article
      variants={fadeUp}
      {...hoverLift}
      className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-5
                 hover:border-white/15 hover:bg-white/[0.06] transition-all duration-300 h-full"
    >
      <div className="flex items-start gap-3">
        <span className="grid place-items-center w-10 h-10 rounded-xl bg-white/10 border border-emerald-400/20">
          <Icon className="w-5 h-5 text-emerald-200" aria-hidden />
        </span>
        <div className="min-w-0">
          <div className="text-base font-semibold text-white leading-snug">{title}</div>
          <div className="mt-1 text-sm text-neutral-400 leading-snug">{sub}</div>
        </div>
      </div>
    </motion.article>
  );
}


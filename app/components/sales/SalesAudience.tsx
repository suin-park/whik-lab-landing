"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "../motionPresets";
import { salesAudience } from "../../data/salesPageContent";
import SalesAudienceCard from "./SalesAudienceCard";

export default function SalesAudience() {
  return (
    <motion.section
      id="audience"
      variants={staggerContainer(0.05, 0.07)}
      initial="show"
      animate="show"
      className="section"
    >
      <motion.h2 variants={fadeUp} className="h2">
        {salesAudience.title}
      </motion.h2>
      <motion.p variants={fadeUp} className="sub mt-2 text-sm">
        {salesAudience.sub}
      </motion.p>

      <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {salesAudience.cards.map((c) => (
          <SalesAudienceCard key={c.title} icon={c.icon} title={c.title} sub={c.sub} />
        ))}
      </div>
    </motion.section>
  );
}

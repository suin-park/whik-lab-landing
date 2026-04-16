"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "../motionPresets";
import { salesServices } from "../../data/salesPageContent";
import SalesStructureCard from "./SalesStructureCard";
import { LaunchMock, PageMock, VideoMock, VisualMock } from "./SalesStructureVisuals";

export default function SalesServices() {
  const visuals = [<PageMock key="page" />, <VideoMock key="video" />, <VisualMock key="visual" />, <LaunchMock key="launch" />];
  return (
    <motion.section
      id="sales-services"
      variants={staggerContainer(0.05, 0.06)}
      initial="show"
      animate="show"
      className="section"
    >
      <motion.h2 variants={fadeUp} className="h2">
        {salesServices.title}
      </motion.h2>
      <motion.p variants={fadeUp} className="sub mt-2 text-sm">
        {salesServices.sub}
      </motion.p>

      <div className="mt-7 grid sm:grid-cols-2 gap-5">
        {salesServices.modules.map((m, i) => (
          <SalesStructureCard key={m.label} label={m.label} title={m.title} sub={m.sub} visual={visuals[i]} />
        ))}
      </div>
    </motion.section>
  );
}

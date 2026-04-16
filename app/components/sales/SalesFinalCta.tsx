"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, fadeUpSlow } from "../motionPresets";
import { salesFinalCta } from "../../data/salesPageContent";

function scrollToContact() {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

type Props = {
  onOpenChat: () => void;
};

export default function SalesFinalCta({ onOpenChat }: Props) {
  return (
    <motion.section
      variants={staggerContainer(0.05, 0.07)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className="section pb-20 md:pb-28"
    >
      <motion.div variants={fadeUp} className="card p-8 md:p-10 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold leading-snug">{salesFinalCta.title}</h2>
        <motion.p variants={fadeUpSlow} className="sub mt-4 text-base leading-relaxed">
          {salesFinalCta.body}
        </motion.p>
        <motion.div variants={fadeUpSlow} className="mt-8 flex flex-wrap gap-3 justify-center">
          <button type="button" onClick={scrollToContact} className="btn-primary">
            {salesFinalCta.primary}
          </button>
          <button type="button" onClick={onOpenChat} className="btn-ghost">
            {salesFinalCta.secondary}
          </button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "../motionPresets";
import { salesServices } from "../../data/salesPageContent";

export default function SalesServices() {
  return (
    <motion.section
      id="sales-services"
      variants={staggerContainer(0.05, 0.06)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="section"
    >
      <motion.h2 variants={fadeUp} className="h2">
        {salesServices.title}
      </motion.h2>
      <motion.p variants={fadeUp} className="sub mt-3 max-w-3xl leading-relaxed">
        {salesServices.intro}
      </motion.p>

      <div className="mt-8 grid sm:grid-cols-2 gap-5">
        {salesServices.cards.map((card, index) => (
          <motion.article key={card.title} variants={fadeUp} className="card-ring p-5 h-full">
            <div className="flex items-start gap-3">
              <span className="step-badge text-sm shrink-0">{index + 1}</span>
              <div>
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="sub text-sm mt-2 leading-relaxed">{card.desc}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

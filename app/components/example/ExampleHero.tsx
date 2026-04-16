"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeUpSlow, staggerContainer } from "../motionPresets";
import type { ExampleProduct } from "../../data/exampleProduct";
import ExampleGallery from "./ExampleGallery";
import ExamplePurchasePanel from "./ExamplePurchasePanel";

type Props = {
  product: ExampleProduct;
  onAddToCart: () => void;
  onBuyNow: () => void;
  onRequestPage: () => void;
};

export default function ExampleHero({ product, onAddToCart, onBuyNow, onRequestPage }: Props) {
  return (
    <motion.section
      variants={staggerContainer(0.05, 0.07)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="section pt-1 md:pt-3 pb-8 md:pb-10"
      aria-label="제품 요약"
    >
      <motion.div variants={fadeUp} className="grid lg:grid-cols-2 gap-7 lg:gap-10 items-start">
        <ExampleGallery brand={product.brand} name={product.name} />
        <ExamplePurchasePanel
          product={product}
          onAddToCart={onAddToCart}
          onBuyNow={onBuyNow}
          onRequestPage={onRequestPage}
        />
      </motion.div>

      <motion.div variants={fadeUpSlow} className="mt-6 text-xs text-neutral-600">
        이 페이지는 실제 결제 기능이 없는 데모입니다.
      </motion.div>
    </motion.section>
  );
}


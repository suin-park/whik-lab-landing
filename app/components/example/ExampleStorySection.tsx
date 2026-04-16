"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, staggerContainer } from "../motionPresets";
import type { ExampleProduct } from "../../data/exampleProduct";

function StoryImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full min-h-[260px] md:min-h-[320px] rounded-3xl overflow-hidden border border-neutral-200 bg-white shadow-sm">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover object-center"
        priority={false}
      />
    </div>
  );
}

export default function ExampleStorySection({ blocks }: { blocks: ExampleProduct["story"] }) {
  return (
    <motion.section
      variants={staggerContainer(0.05, 0.07)}
      initial="show"
      animate="show"
      className="section"
      aria-label="상세 소개 배너"
    >
      <div className="space-y-10 md:space-y-14">
        {blocks.map((b) => (
          <motion.div key={b.title} variants={fadeUp} className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
            <StoryImage src={b.imageUrl} alt={`${b.title} ${b.copy}`} />
            <div className="space-y-2 md:space-y-3">
              <div className="text-[11px] tracking-widest text-neutral-500 uppercase">Detail</div>
              <div className="text-2xl md:text-3xl font-semibold leading-snug text-neutral-900">
                {b.title}
                <br />
                <span className="text-neutral-700">{b.copy}</span>
              </div>
              <div className="text-sm text-neutral-600">
                실제 제품 상세페이지처럼 큰 비주얼과 짧은 카피로 흐름을 만들 수 있습니다.
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}


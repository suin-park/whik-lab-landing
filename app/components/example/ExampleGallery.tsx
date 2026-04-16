"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  brand: string;
  name: string;
};

const MAIN_IMAGE_URL =
  "https://bszzdeyquwfgmruvopfe.supabase.co/storage/v1/object/public/package-thumbnails/keycut_01.png";

const THUMB_02_URL =
  "https://bszzdeyquwfgmruvopfe.supabase.co/storage/v1/object/public/package-thumbnails/keycut_02.png";
const THUMB_03_URL =
  "https://bszzdeyquwfgmruvopfe.supabase.co/storage/v1/object/public/package-thumbnails/keycut_03.png";
const THUMB_04_URL =
  "https://bszzdeyquwfgmruvopfe.supabase.co/storage/v1/object/public/package-thumbnails/keycut_04.png";

function ProductImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full aspect-square rounded-3xl overflow-hidden border border-neutral-200 bg-white shadow-sm">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover object-center"
      />
    </div>
  );
}

export default function ExampleGallery({ brand, name }: Props) {
  const originalMain = MAIN_IMAGE_URL;
  const others = useMemo(() => [THUMB_02_URL, THUMB_03_URL, THUMB_04_URL] as const, []);
  const allImages = useMemo(() => [originalMain, ...others], [originalMain, others]);

  const [activeSrc, setActiveSrc] = useState<string>(originalMain);

  // 썸네일 순서는 고정(클릭해도 순서 변화 없음): 02,03,04,01
  const thumbOrder = useMemo(() => [...others, originalMain], [others, originalMain]);

  function prev() {
    const i = allImages.indexOf(activeSrc);
    setActiveSrc(allImages[(i - 1 + allImages.length) % allImages.length]);
  }
  function next() {
    const i = allImages.indexOf(activeSrc);
    setActiveSrc(allImages[(i + 1) % allImages.length]);
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="text-xs text-neutral-600">
          <span className="text-neutral-900 font-semibold">{brand}</span> | {name}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            className="h-9 w-9 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 grid place-items-center shadow-sm"
            aria-label="이전 이미지"
          >
            <ChevronLeft className="w-4 h-4 text-neutral-700" aria-hidden />
          </button>
          <button
            type="button"
            onClick={next}
            className="h-9 w-9 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 grid place-items-center shadow-sm"
            aria-label="다음 이미지"
          >
            <ChevronRight className="w-4 h-4 text-neutral-700" aria-hidden />
          </button>
        </div>
      </div>

      <ProductImage src={activeSrc} alt={`${brand} ${name}`} />

      <div className="grid grid-cols-4 gap-2.5">
        {thumbOrder.map((src, idx) => {
          const active = activeSrc === src;
          return (
          <button
            key={src}
            type="button"
            onClick={() => setActiveSrc(src)}
            className={`rounded-xl overflow-hidden border bg-white transition shadow-sm ${
              active ? "border-neutral-900 ring-2 ring-neutral-900/10" : "border-neutral-200 hover:bg-neutral-50"
            }`}
            aria-label={`썸네일 ${idx + 1}`}
          >
            <div className="p-1">
              <div className="relative aspect-square rounded-lg overflow-hidden border border-neutral-200 bg-neutral-100">
                <Image src={src} alt="" fill sizes="96px" className="object-cover object-center" />
              </div>
            </div>
          </button>
        );
        })}
      </div>

      <div className="text-[11px] text-neutral-500">데모용 예시 이미지입니다.</div>

    </div>
  );
}


"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Check, ShoppingCart, Star } from "lucide-react";
import type { ExampleProduct } from "../../data/exampleProduct";

type Props = {
  product: ExampleProduct;
  onAddToCart: () => void;
  onBuyNow: () => void;
  onRequestPage: () => void;
};

function OptionPills({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { label: string; value: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="space-y-2">
      <div className="text-xs font-medium text-neutral-700">{label}</div>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = value === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange(opt.value)}
              className={`px-3.5 py-2.5 rounded-xl border text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-neutral-900/10 ${
                active
                  ? "border-neutral-900 bg-neutral-900 text-white"
                  : "border-neutral-300 bg-white text-neutral-800 hover:bg-neutral-50"
              }`}
              aria-pressed={active}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function ExamplePurchasePanel({ product, onAddToCart, onBuyNow, onRequestPage }: Props) {
  const [volume, setVolume] = useState(product.options.volume[0]?.value ?? "30");
  const [type, setType] = useState(product.options.type[0]?.value ?? "single");

  const price = useMemo(() => product.price, [product.price]);

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <div className="text-xs tracking-widest text-neutral-500 uppercase">{product.category}</div>
        <div className="text-2xl md:text-3xl font-semibold leading-snug text-neutral-900">
          <span className="text-neutral-900">{product.brand}</span> {product.name}
        </div>
        <div className="text-sm text-neutral-600">{product.subtitle}</div>
      </div>

      <div className="flex items-center gap-3 flex-wrap">
        <span className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-900">
          <Star className="w-4 h-4 text-amber-500" aria-hidden />
          {product.rating.score.toFixed(1)}
        </span>
        <span className="text-sm text-neutral-600">리뷰 {product.rating.reviews.toLocaleString()}개</span>
        {price.discountLabel && (
          <span className="text-xs font-semibold text-emerald-800 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5">
            {price.discountLabel}
          </span>
        )}
      </div>

      {/* Price card (핵심 정보) */}
      <div className="rounded-2xl border border-neutral-300 bg-white p-5 shadow-sm">
        <div className="flex items-end justify-between gap-3 flex-wrap">
          <div className="text-3xl font-semibold tracking-tight text-neutral-900">{price.current}</div>
          {price.original && <div className="text-sm text-neutral-500 line-through">{price.original}</div>}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {product.tags.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2.5 py-1.5 rounded-full border border-neutral-200 bg-neutral-50 text-neutral-700"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Options grouping */}
      <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
        <div className="text-sm font-semibold text-neutral-900">옵션 선택</div>
        <div className="mt-4 grid gap-5">
          <OptionPills label="용량" options={product.options.volume} value={volume} onChange={setVolume} />
          <OptionPills label="구성" options={product.options.type} value={type} onChange={setType} />
        </div>
      </div>

      {/* CTA (쇼핑몰 문법) */}
      <div className="space-y-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {/* mobile: buy first */}
          <button
            type="button"
            onClick={onBuyNow}
            className="sm:order-2 order-1 w-full inline-flex items-center justify-center rounded-xl px-5 py-3 bg-neutral-900 text-white font-semibold hover:bg-neutral-800 transition shadow-sm"
          >
            바로 구매하기
          </button>
          <button
            type="button"
            onClick={onAddToCart}
            className="sm:order-1 order-2 w-full inline-flex items-center justify-center rounded-xl px-5 py-3 bg-white border border-neutral-300 text-neutral-900 font-semibold hover:bg-neutral-50 transition"
          >
            <span className="inline-flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" aria-hidden />
              장바구니 담기
            </span>
          </button>
        </div>

        <button
          type="button"
          onClick={onRequestPage}
          className="w-fit text-sm text-neutral-600 hover:text-neutral-900 inline-flex items-center gap-1.5"
        >
          이런 제품 페이지 제작 문의
          <ArrowRight className="w-4 h-4" aria-hidden />
        </button>
      </div>

      {/* Perks (보조 신뢰 영역) */}
      <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
        <div className="text-[11px] font-semibold tracking-widest text-neutral-500 uppercase">Highlights</div>
        <ul className="mt-3 space-y-2">
          {product.perks.slice(0, 3).map((p) => (
            <li key={p} className="flex items-center gap-2 text-sm text-neutral-800">
              <span className="grid place-items-center w-5 h-5 rounded-lg bg-emerald-50 border border-emerald-200">
                <Check className="w-3.5 h-3.5 text-emerald-700" aria-hidden />
              </span>
              <span className="leading-snug">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


"use client";

import { useState } from "react";
import { Images, Play, Rocket, RotateCw, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function PageMock() {
  return (
    <div className="relative aspect-[16/10] overflow-hidden">
      <Link
        href="/example"
        className="absolute inset-0 block group"
        aria-label="제품 상세 예시 페이지 보기"
      >
        <Image
          src="https://bszzdeyquwfgmruvopfe.supabase.co/storage/v1/object/public/package-thumbnails/page_preview_fin.png"
          alt="제품 소개 페이지 예시"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          priority={false}
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
      </Link>
    </div>
  );
}

export function VideoMock() {
  const [playing, setPlaying] = useState(false);
  const poster =
    "https://customer-iuwbj3wbvz24ltu5.cloudflarestream.com/8375092710a68b01150e4e296553cf5e/thumbnails/thumbnail.jpg?time=&height=600";
  const iframeSrc =
    "https://customer-iuwbj3wbvz24ltu5.cloudflarestream.com/8375092710a68b01150e4e296553cf5e/iframe?poster=" +
    encodeURIComponent(poster) +
    "&autoplay=true";

  return (
    <div className="p-4">
      <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-black/20">
        {!playing ? (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="absolute inset-0 group"
            aria-label="영상 재생"
          >
            <img src={poster} alt="홍보 영상 썸네일" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="w-14 h-14 rounded-full bg-white/15 border border-white/20 grid place-items-center backdrop-blur-sm transition group-hover:bg-white/20">
                <Play className="w-6 h-6 text-white ml-0.5" aria-hidden />
              </div>
            </div>
            <div className="absolute bottom-2 right-2 text-[11px] text-neutral-200/70">Play</div>
          </button>
        ) : (
          <iframe
            src={iframeSrc}
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            title="홍보 모션 그래픽 영상"
          />
        )}
      </div>
    </div>
  );
}

export function ContactMock() {
  return (
    <div className="p-4 space-y-2">
      <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2">
        <div className="inline-flex items-center gap-2 text-xs text-neutral-300">
          <Images className="w-4 h-4 text-emerald-200" aria-hidden />
          카카오톡 문의
        </div>
        <div className="text-[11px] text-neutral-500">1-click</div>
      </div>
      <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
        <div className="text-[11px] text-neutral-500">문의 폼</div>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <div className="h-8 rounded-lg bg-black/20 border border-white/10" />
          <div className="h-8 rounded-lg bg-black/20 border border-white/10" />
        </div>
        <div className="mt-2 h-8 rounded-lg bg-white text-black text-xs font-semibold grid place-items-center">
          보내기
        </div>
      </div>
    </div>
  );
}

export function VisualMock() {
  const main =
    "https://bszzdeyquwfgmruvopfe.supabase.co/storage/v1/object/public/package-thumbnails/shoes_01.png";
  const viewer =
    "https://bszzdeyquwfgmruvopfe.supabase.co/storage/v1/object/public/package-thumbnails/3d_viewer.png";
  const thumbs = [
    "https://bszzdeyquwfgmruvopfe.supabase.co/storage/v1/object/public/package-thumbnails/shoes_01.png",
    "https://bszzdeyquwfgmruvopfe.supabase.co/storage/v1/object/public/package-thumbnails/shoes_02.png",
    "https://bszzdeyquwfgmruvopfe.supabase.co/storage/v1/object/public/package-thumbnails/shoes_03.png",
  ];

  return (
    <a
      href="https://www.3d-locker.com/assets/cmjbgdlxy0001jm040imzcgna"
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 group"
      aria-label="3D Locker에서 제품 비주얼 예시 보기"
    >
      <div className="grid grid-cols-12 gap-3 items-stretch">
        <div className="col-span-7 relative overflow-hidden rounded-xl border border-white/10 bg-black/20 aspect-[4/5]">
          <Image
            src={main}
            alt="제품 상세컷 예시"
            fill
            sizes="(max-width: 768px) 60vw, 30vw"
            className="object-cover object-center"
          />
          <div className="absolute left-2 top-2 text-[11px] px-2 py-1 rounded-full border border-white/10 bg-black/30 text-neutral-200 inline-flex items-center gap-1">
            <Images className="w-3.5 h-3.5" aria-hidden />
            상세컷
          </div>
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-90" />
        </div>

        <div className="col-span-5 flex flex-col gap-3">
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/20 aspect-square">
            <Image
              src={viewer}
              alt="3D 뷰어 예시"
              fill
              sizes="(max-width: 768px) 45vw, 22vw"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute left-2 top-2 text-[11px] px-2 py-1 rounded-full border border-emerald-400/20 bg-emerald-400/10 text-emerald-100 inline-flex items-center gap-1">
              <RotateCw className="w-3.5 h-3.5" aria-hidden />
              3D 뷰어
            </div>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-90" />
          </div>

          <div className="grid grid-cols-3 gap-2">
            {thumbs.map((src, idx) => (
              <div
                key={`${src}-${idx}`}
                className="relative overflow-hidden rounded-lg border border-white/10 bg-black/20 aspect-square"
              >
                <Image src={src} alt="제품 이미지 썸네일" fill sizes="80px" className="object-cover object-center" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {["상세컷", "제품 이미지", "3D 뷰어", "회전 보기", "visual asset"].map((t) => (
          <span key={t} className="text-[11px] px-2 py-1 rounded-full border border-white/10 bg-white/5 text-neutral-200">
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}

export function LaunchMock() {
  return (
    <Link href="/analysis" className="block p-4 group" aria-label="판매 운영 대시보드 예시 보기">
      <div className="flex items-center gap-2">
        <span className="grid place-items-center w-10 h-10 rounded-xl bg-emerald-400/10 border border-emerald-400/20">
          <Rocket className="w-5 h-5 text-emerald-200" aria-hidden />
        </span>
        <div className="min-w-0">
          <div className="text-sm font-semibold text-emerald-100">판매 운영 대시보드</div>
          <div className="text-xs text-neutral-400">문의/반응 흐름을 한눈에</div>
        </div>
      </div>

      <div className="mt-3 relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-black/20">
        <Image
          src="https://bszzdeyquwfgmruvopfe.supabase.co/storage/v1/object/public/package-thumbnails/analysis.png"
          alt="판매 운영 데이터 예시 화면"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {["KPI", "퍼널", "AI 인사이트"].map((t) => (
          <span
            key={t}
            className="text-[11px] px-2 py-1 rounded-full border border-white/10 bg-white/5 text-neutral-200"
          >
            {t}
          </span>
        ))}
        <span className="text-[11px] px-2 py-1 rounded-full border border-emerald-400/20 bg-emerald-400/10 text-emerald-100 inline-flex items-center gap-1 group-hover:bg-emerald-400/15">
          <Sparkles className="w-3.5 h-3.5" aria-hidden />
          보기
        </span>
      </div>
    </Link>
  );
}


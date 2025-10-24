"use client";
import { useEffect } from "react";

type Props = { open: boolean; onClose: () => void; videoId: string };

export default function VideoModal({ open, onClose, videoId }: Props) {
  // ESC로 닫기 + 스크롤 잠금
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.classList.toggle("overflow-hidden", open);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("overflow-hidden");
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      aria-modal="true"
      role="dialog"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => e.currentTarget === e.target && onClose()}
    >
      {/* Close 버튼 */}
      <button
        aria-label="닫기"
        onClick={onClose}
        className="absolute top-4 right-4 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-sm text-white hover:bg-white/20"
      >
        닫기
      </button>

      {/* 영상 컨테이너 */}
      <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-[0_0_50px_rgba(0,0,0,.5)]">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1`}
          title="Whik Case Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}


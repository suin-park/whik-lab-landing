"use client";
import { useEffect, useRef, useState } from "react";

type Variant = "ai" | "sales";

type Props = { open: boolean; onClose: () => void; variant?: Variant };
type ChatMsg = { role: "user" | "ai"; text: string };

const AI_FIRST_MESSAGE =
  "안녕하세요, Whik AI Lab입니다.\n" +
  "핵심 기능부터 빠르게 MVP로 만들어 먼저 검증할 수 있어요.\n" +
  "무엇을 만들고 싶은지 한 줄로 알려주세요.\n" +
  "예) 상담 챗봇, 운영 자동화, 3D 시제품(3D Locker), 콘텐츠 제작";

const AI_SECOND_PROMPT =
  "좋아요. 아래 3가지만 알려주시면 됩니다.\n" +
  "1) 목적: 어떤 결과를 원하시나요?\n" +
  "2) 대상: 주요 사용자/고객은 누구인가요?\n" +
  "3) 핵심 기능(2~3개): 꼭 필요한 기능을 적어주세요.\n" +
  "답변 예시)\n" +
  "목적: 온라인 상담 자동화 / 대상: 병원 방문 환자 / 핵심 기능: 증상 입력 챗봇, 의사 연결, 기록 대시보드";

const SALES_FIRST_MESSAGE =
  "안녕하세요, Whik 판매 지원 상담입니다.\n" +
  "랜딩페이지, 홍보 모션 그래픽 영상, 문의 전환 구조를 빠르게 정리해 드립니다.\n" +
  "판매하시는 제품과 지금 막힌 지점을 한 줄로 알려주세요.\n" +
  "예) 스마트스토어만 있고 소개 페이지가 없음 / 쇼츠용 영상이 필요함";

const SALES_SECOND_PROMPT =
  "조금만 더 구체적으로 알려주시면 됩니다.\n" +
  "1) 제품: 무엇을 파시나요?\n" +
  "2) 채널: 지금 쓰는 판매·홍보 채널은 무엇인가요?\n" +
  "3) 우선 필요한 것: 랜딩 / 영상 / 문의 연결 중 어디부터인가요?\n" +
  "답변 예시)\n" +
  "제품: 수제 캔들 / 채널: 인스타·카톡 / 우선: 한 페이지로 정리하고 카톡 문의 연결";

function isTooShort(text: string) {
  const t = (text || "").trim();
  const words = t.split(/\s+/).filter(Boolean);
  return t.length < 20 || words.length < 4;
}

function firstMessageFor(variant: Variant) {
  return variant === "sales" ? SALES_FIRST_MESSAGE : AI_FIRST_MESSAGE;
}

function secondPromptFor(variant: Variant) {
  return variant === "sales" ? SALES_SECOND_PROMPT : AI_SECOND_PROMPT;
}

export default function QuoteChatModal({ open, onClose, variant = "ai" }: Props) {
  const [messages, setMessages] = useState<ChatMsg[]>([{ role: "ai", text: firstMessageFor(variant) }]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  useEffect(() => {
    if (open) {
      setMessages([{ role: "ai", text: firstMessageFor(variant) }]);
      setInput("");
    }
  }, [open, variant]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages]);

  if (!open) return null;

  const title = variant === "sales" ? "판매 상담 문의" : "AI 견적 상담";
  const placeholder =
    variant === "sales"
      ? "제품 종류, 판매 채널, 필요한 페이지·영상을 알려주세요…"
      : "원하시는 결과와 핵심 기능을 알려주세요…";

  async function send(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;

    const userInput = input.trim();
    setInput("");

    const isFirstUserReply = messages.length === 1;

    if (isFirstUserReply && isTooShort(userInput)) {
      setMessages((prev) => [
        ...prev,
        { role: "user", text: userInput },
        { role: "ai", text: secondPromptFor(variant) },
      ]);
      return;
    }

    const thread = [...messages, { role: "user" as const, text: userInput }];
    setMessages(thread);

    const res = await fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: thread,
      }),
    });
    const data = await res.json();

    setMessages((prev) => [...prev, { role: "ai", text: data.reply }]);
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={(e) => e.currentTarget === e.target && onClose()}
    >
      <div className="card w-full max-w-2xl p-0 overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <div className="font-semibold">{title}</div>
          <button type="button" onClick={onClose} className="btn-ghost px-3 py-1">
            닫기
          </button>
        </div>

        <div ref={scrollRef} className="px-4 py-3 h-80 overflow-y-auto space-y-2">
          {messages.map((m, i) => (
            <div
              key={i}
              className={
                m.role === "ai" ? "text-sky-300 whitespace-pre-wrap" : "text-neutral-100 whitespace-pre-wrap"
              }
            >
              {m.role === "ai" ? "🤖 " : "🙋 "} {m.text}
            </div>
          ))}
        </div>

        <form onSubmit={send} className="flex gap-2 p-3 border-t border-white/10">
          <input
            className="flex-1 rounded-xl px-3 py-2 bg-white/10 border border-white/10"
            placeholder={placeholder}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="btn-primary px-4">
            보내기
          </button>
        </form>

        <div className="px-4 pb-3 text-xs text-neutral-400">
          괜찮다면{" "}
          <a href="#contact" className="underline" onClick={onClose}>
            문의 폼
          </a>
          으로 이어서 제출해 주세요.
        </div>
      </div>
    </div>
  );
}

"use client";
import { useEffect, useRef, useState } from "react";

type Props = { open: boolean; onClose: () => void };
type ChatMsg = { role: "user" | "ai"; text: string };

export default function QuoteChatModal({ open, onClose }: Props) {
  const [messages, setMessages] = useState<ChatMsg[]>([
    { role: "ai", text: "안녕하세요 👋 Whik AI Lab 견적 상담 도우미입니다.\n프로젝트 목적을 알려주세요. (예: 내부 업무 자동화 / 3D 콘텐츠 / 챗봇 등)" }
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages]);

  if (!open) return null;

  async function send(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    
    // 사용자 메시지 추가
    setMessages(prev => [...prev, { role: "user" as const, text: input.trim() }]);
    const userInput = input.trim();
    setInput("");
    
    // API 호출
    const res = await fetch("https://whik.co.kr/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        messages: [...messages, { role: "user", text: userInput }]
      }),
    });
    const data = await res.json();
    
    // AI 응답 추가
    setMessages(prev => [...prev, { role: "ai" as const, text: data.reply }]);
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
          <div className="font-semibold">AI 견적 상담</div>
          <button onClick={onClose} className="btn-ghost px-3 py-1">닫기</button>
        </div>

        <div ref={scrollRef} className="px-4 py-3 h-80 overflow-y-auto space-y-2">
          {messages.map((m, i) => (
            <div key={i} className={m.role === "ai" ? "text-sky-300 whitespace-pre-wrap" : "text-neutral-100 whitespace-pre-wrap"}>
              {m.role === "ai" ? "🤖 " : "🙋 "} {m.text}
            </div>
          ))}
        </div>

        <form onSubmit={send} className="flex gap-2 p-3 border-t border-white/10">
          <input
            className="flex-1 rounded-xl px-3 py-2 bg-white/10 border border-white/10"
            placeholder="원하시는 결과/기간/예산 대략을 알려주세요…"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
          />
          <button className="btn-primary px-4">보내기</button>
        </form>

        <div className="px-4 pb-3 text-xs text-neutral-400">
          결과가 마음에 드시면 <a href="#contact" className="underline">문의 폼</a>으로 바로 이어서 제출해 주세요.
        </div>
      </div>
    </div>
  );
}

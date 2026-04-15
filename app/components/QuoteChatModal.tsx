"use client";
import { useEffect, useRef, useState } from "react";

type Props = { open: boolean; onClose: () => void };
type ChatMsg = { role: "user" | "ai"; text: string };

// --- Chatbot copy: first message & follow-ups ---
const FIRST_MESSAGE =
  "안녕하세요, Whik AI Lab입니다.\n" +
  "핵심 기능부터 빠르게 MVP로 만들어 먼저 검증할 수 있어요.\n" +
  "무엇을 만들고 싶은지 한 줄로 알려주세요.\n" +
  "예) 상담 챗봇, 운영 자동화, 3D 시제품(3D Locker), 콘텐츠 제작";

const SECOND_PROMPT_PURPOSE_AUDIENCE_FEATURES =
  "좋아요. 아래 3가지만 알려주시면 됩니다.\n" +
  "1) 목적: 어떤 결과를 원하시나요?\n" +
  "2) 대상: 주요 사용자/고객은 누구인가요?\n" +
  "3) 핵심 기능(2~3개): 꼭 필요한 기능을 적어주세요.\n" +
  "답변 예시)\n" +
  "목적: 온라인 상담 자동화 / 대상: 병원 방문 환자 / 핵심 기능: 증상 입력 챗봇, 의사 연결, 기록 대시보드";

// 안전한 길이 체크 유틸
function isTooShort(text: string) {
  const t = (text || "").trim();
  const words = t.split(/\s+/).filter(Boolean);
  return t.length < 20 || words.length < 4; // 기준은 필요시 조정
}

export default function QuoteChatModal({ open, onClose }: Props) {
  const [messages, setMessages] = useState<ChatMsg[]>([
    { role: "ai", text: FIRST_MESSAGE }
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
    
    const userInput = input.trim();
    
    // 사용자 메시지 추가
    setMessages(prev => [...prev, { role: "user" as const, text: userInput }]);
    setInput("");
    
    // 첫 사용자 답변인지 확인 (현재 messages는 [AI 첫 메시지]만 있음)
    const isFirstUserReply = messages.length === 1;
    
    // 첫 답변이 너무 짧으면 2번째 프롬프트 제공
    if (isFirstUserReply && isTooShort(userInput)) {
      setMessages(prev => [...prev, { 
        role: "ai" as const, 
        text: SECOND_PROMPT_PURPOSE_AUDIENCE_FEATURES 
      }]);
      return;
    }
    
    // 충분한 답변이거나 후속 질문에 대한 답변인 경우 API 호출
    const res = await fetch("/api/quote", {
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
            placeholder="원하시는 결과와 핵심 기능을 알려주세요…"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
          />
          <button className="btn-primary px-4">보내기</button>
        </form>

        <div className="px-4 pb-3 text-xs text-neutral-400">
          괜찮다면 <a href="#contact" className="underline">문의 폼</a>으로 이어서 제출해 주세요.
        </div>
      </div>
    </div>
  );
}

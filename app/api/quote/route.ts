import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  const { messages } = await req.json();

  // 간단한 시스템 프롬프트: 예산/기간/범위를 유도하고 마지막에 범위 제시
  const system = [
    "너는 B2B AI PoC 견적 상담 도우미야.",
    "대화는 4~6 턴 안에서 끝내고,",
    "1) 목표, 2) 기간(2주/4주/8주), 3) 예산대(200~1000만원), 4) 기술 요소를 물어봐.",
    "마지막 답변엔 '예상 범위'를 숫자 구간으로 제시하고,",
    "상담 연결을 위한 다음 단계(문의 폼/미팅 예약)를 한 줄로 안내해."
  ].join(" ");

  const history = (messages as {role:string; text:string}[]).map(m => ({
    role: m.role === "ai" ? "assistant" : "user",
    content: m.text,
  }));

  const rsp = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "system", content: system }, ...history],
    temperature: 0.5,
  });

  const reply = rsp.choices[0]?.message?.content ?? "잠시 후 다시 시도해 주세요.";
  return NextResponse.json({ reply });
}

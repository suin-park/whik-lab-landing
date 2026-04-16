"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, fadeUpSlow, hoverLift } from "./components/motionPresets";
import FAQ from "./components/FAQ";
import VideoModal from "./components/VideoModal";
import QuoteChatModal from "./components/QuoteChatModal";
import ImageCarouselModal from "./components/ImageCarouselModal";
import ContactConsultSection from "./components/ContactConsultSection";

export default function Page() {
  const [open, setOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [videoId, setVideoId] = useState<string | null>(null);
  const [galleryOpen, setGalleryOpen] = useState(false);

  const worksImages = [
    { src: "/case/work_1.png", alt: "Whik Works 1" },
    { src: "/case/work_2.png", alt: "Whik Works 2" },
    { src: "/case/work_3.png", alt: "Whik Works 3" },
    { src: "/case/work_4.png", alt: "Whik Works 4" },
    { src: "/case/work_5.png", alt: "Whik Works 5" },
  ];
  
  // 카드 타입 선언: disabled, videoId, gallery 모두 선택(optional)
  type CaseCard = {
    t: string;              // 타이틀
    s: string;              // 서브텍스트
    img: string;            // 썸네일 경로
    videoId?: string;       // 비디오 모달용
    gallery?: "works";      // 갤러리 모달용
    href?: string;          // 외부 링크
    disabled?: boolean;     // 비활성 카드
  };

  // cases를 명시적으로 타입 지정
  const cases: CaseCard[] = [
    { t: "제품 사진으로 3D 시제품 제작", s: "3D Locker처럼 실제 구현 가능한 사례", href: "https://3d-locker.com", img: "/3d-thumb2.png" },
    { t: "AI로 콘텐츠 제작 흐름 정리", s: "기획·제작 가이드와 프롬프트까지", videoId: "6rCVn3087DM", img: "/case/case-webtoon.png" },
    { t: "반복 업무를 줄이는 운영 자동화", s: "견적·계약·프로젝트 관리 자동화", gallery: "works", img: "/case/case-works.png" },
  ];
  return (
    <main className="space-y-24 md:space-y-32 pt-6">
      {/* Header */}
      <header className="section pt-6">
        {/* 글래스 박스 */}
        <div className="h-16 md:h-18 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl
                        shadow-[0_0_0_1px_rgba(255,255,255,0.04)] px-4 md:px-6
                        flex items-center justify-between">
          {/* 좌측 로고 */}
          <Link href="/" className="flex items-center pl-2 md:pl-4">
            <Image
              src="/logo.svg?v=4"
              alt="Whik AI Lab Logo"
              width={160}
              height={52}
              priority
              className="object-contain h-16 md:h-18 filter-none"
              style={
                {
                  imageRendering: 'crisp-edges',
                  WebkitImageRendering: 'crisp-edges',
                  msInterpolationMode: 'nearest-neighbor',
                } as React.CSSProperties
              }
            />
          </Link>

          {/* 네비게이션 */}
          <nav className="hidden md:flex items-center gap-2">
            {["사례","서비스","프로세스","문의"].map((t, i) => (
              <a
                key={i}
                href={["#cases","#services","#process","#contact"][i]}
                className="nav-link"
              >
                {t}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a href="#contact" className="btn-primary h-9 px-4 text-sm leading-none">
            무료 컨설팅
          </a>
        </div>
      </header>

      {/* Hero */}
      <motion.section
        variants={staggerContainer(0.05, 0.08)}
        initial="show"
        animate="show"
        className="section pt-2 md:pt-20 pb-14 md:pb-20 grid md:grid-cols-2 gap-10 items-center"
      >
        <div className="space-y-7">
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-semibold leading-relaxed space-y-1">
            <span className="block">AI 서비스,</span>
            <span className="block">빠르게 검증하고</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-fuchsia-300">
              시작하세요
            </span>
          </motion.h1>

          <motion.p variants={fadeUpSlow} className="sub max-w-xl text-base">
            챗봇, 자동화, 3D, 콘텐츠 제작까지. 필요한 핵심 기능부터 빠르게 구현합니다.
          </motion.p>
          <motion.div variants={fadeUpSlow} className="flex gap-3">
            <a href="#contact" className="btn-primary">
              무료 컨설팅 신청
            </a>
            <button
              type="button"
              onClick={() => setChatOpen(true)}
              className="btn-ghost"
              aria-label="AI 견적 상담 챗봇 열기"
            >
              AI 상담 챗봇
            </button>
          </motion.div>

          <motion.div variants={fadeUpSlow} className="flex items-center gap-3 pt-3 text-xs text-neutral-400">
            <div className="h-px w-10 bg-white/20" /> Made with Whik Lab
          </motion.div>
        </div>

        <motion.a
          href="https://3d-locker.com"
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeUpSlow}
          className="card p-0 overflow-hidden group block cursor-pointer"
          {...hoverLift}
        >
          <div className="relative w-full aspect-[16/9] overflow-hidden">
            <Image
              src="/3d-thumb2.png"
              alt="3D Locker"
              fill
              className="object-cover object-left-top transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="p-6 md:p-8 space-y-4">
            <div className="flex items-center justify-between">
              <div className="relative w-32 h-8 md:w-36 md:h-9">
                <Image
                  src="/logo_white.svg"
                  alt="3D Locker"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-300/10 border border-sky-300/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-300 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-300" />
                </span>
                <span className="text-xs md:text-sm font-medium text-sky-300">공식 오픈</span>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold leading-tight">
                제품 사진 한 장으로 시작하는
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-fuchsia-300">
                  완전한 3D 워크플로우
                </span>
              </h3>
              <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
                3D 생성부터 AR·프린팅까지 한 번에 연결
              </p>
            </div>
          </div>
        </motion.a>
      </motion.section>

      {/* Problems */}
      <motion.section
        variants={staggerContainer(0.05, 0.07)}
        initial="show"
        animate="show"
        className="section"
      >
        <motion.h2 variants={fadeUp} className="h2">많은 기업이 이런 고민을 합니다</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <motion.div
            variants={fadeUp}
            {...hoverLift}
            className="grid place-items-center text-center rounded-xl bg-neutral-900 px-6 py-6 
            text-base md:text-lg text-neutral-200 font-medium
            hover:bg-neutral-800 hover:text-white transition-all duration-300"
          >
            어디서부터 시작해야 할지 모르겠습니다
          </motion.div>
          <motion.div
            variants={fadeUp}
            {...hoverLift}
            className="grid place-items-center text-center rounded-xl bg-neutral-900 px-6 py-6 
            text-base md:text-lg text-neutral-200 font-medium
            hover:bg-neutral-800 hover:text-white transition-all duration-300"
          >
            내부 개발 리소스가 부족합니다
          </motion.div>
          <motion.div
            variants={fadeUp}
            {...hoverLift}
            className="grid place-items-center text-center rounded-xl bg-neutral-900 px-6 py-6 
            text-base md:text-lg text-neutral-200 font-medium
            hover:bg-neutral-800 hover:text-white transition-all duration-300"
          >
            고객에게 보여줄 시제품이 필요합니다
          </motion.div>
        </div>
      </motion.section>

      {/* Solution */}
      <motion.section
        variants={staggerContainer(0.05, 0.06)}
        initial="show"
        animate="show"
        id="services"
        className="section"
      >
        <motion.h2 variants={fadeUp} className="h2">Whik은 이렇게 빠르게 만듭니다</motion.h2>

        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {/* 1) 기획 컨설팅 */}
          <motion.article variants={fadeUp} className="card-ring p-5">
            <div className="flex items-start gap-4">
              <span className="step-badge">1</span>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <div className="step-icon">🧭</div>
                  <h3 className="step-title">기획 정리</h3>
                </div>
                <p className="step-sub mt-2">
                  무엇을 만들지 짧고 명확하게 정리합니다
                </p>
                <ul className="mt-3 text-sm text-neutral-300 list-disc list-inside space-y-1">
                  <li>산출물: 기획 요약, UX 흐름</li>
                  <li>정리: 요구사항·우선순위</li>
                </ul>
              </div>
            </div>
          </motion.article>

          {/* 2) 시제품 제작(PoC) */}
          <motion.article variants={fadeUp} className="card-ring p-5">
            <div className="flex items-start gap-4">
              <span className="step-badge">2</span>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <div className="step-icon">⚙️</div>
                  <h3 className="step-title">시제품 제작</h3>
                </div>
                <p className="step-sub mt-2">
                  핵심 기능이 작동하는 MVP를 빠르게 만듭니다
                </p>
                <ul className="mt-3 text-sm text-neutral-300 list-disc list-inside space-y-1">
                  <li>산출물: 웹/앱 데모, 시연</li>
                  <li>옵션: 샌드박스·목업 연동</li>
                </ul>
              </div>
            </div>
          </motion.article>

          {/* 3) 소개 자료 제작 */}
          <motion.article variants={fadeUp} className="card-ring p-5">
            <div className="flex items-start gap-4">
              <span className="step-badge">3</span>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <div className="step-icon">🗂️</div>
                  <h3 className="step-title">소개 자료 정리</h3>
                </div>
                <p className="step-sub mt-2">
                  고객과 투자자에게 보여줄 자료까지 준비합니다
                </p>
                <ul className="mt-3 text-sm text-neutral-300 list-disc list-inside space-y-1">
                  <li>산출물: 제안서, 요약 자료</li>
                  <li>제공: 썸네일·에셋</li>
                </ul>
              </div>
            </div>
          </motion.article>
        </div>
      </motion.section>

      {/* Case Studies */}
      <motion.section
        variants={staggerContainer(0.05, 0.08)}
        initial="show"
        animate="show"
        id="cases"
        className="section"
      >
        <motion.h2 variants={fadeUp} className="h2">아이디어를 실제 화면으로 보여드립니다</motion.h2>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {cases.map((c) => {
            const disabled = !!c.disabled;

            return (
              <motion.article key={c.t} variants={fadeUp}>
                <motion.button
                  {...(!disabled ? hoverLift : {})}
                  disabled={disabled}
                  onClick={() => {
                    if (disabled) return;
                    if (c.href) {
                      window.open(c.href, "_blank", "noopener,noreferrer");
                      return;
                    }
                    if (c.gallery === "works") {
                      setGalleryOpen(true);
                      return;
                    }
                    if (c.videoId) {
                      setVideoId(c.videoId);
                      setOpen(true);
                    }
                  }}
                  aria-label={
                    disabled
                      ? `${c.t}는 준비 중`
                      : c.gallery === "works"
                        ? "Whik Works 갤러리 보기"
                        : `${c.t} 시연 보기`
                  }
                  className={`relative w-full card overflow-hidden transition ${
                    disabled
                      ? "opacity-60 cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                >
                  <div className="aspect-video relative">
                    <Image
                      src={c.img}
                      alt={c.t}
                      fill
                      className={c.img === "/3d-thumb2.png" || c.img === "/case/case-webtoon.png" ? "object-cover object-left-top" : "object-cover"}
                    />
                    {disabled && (
                      <span className="absolute top-3 right-3 px-2 py-1 text-xs rounded-lg bg-white/15 border border-white/20">
                        Coming soon
                      </span>
                    )}
                  </div>
                  <div className="p-4 text-left">
                    <div className="font-medium">{c.t}</div>
                    <div className="sub text-sm">{c.s}</div>
                  </div>
                </motion.button>
              </motion.article>
            );
          })}
        </div>
      </motion.section>

      {/* Process + Pricing */}
      <motion.section
        variants={staggerContainer(0.05, 0.06)}
        initial="show"
        animate="show"
        id="process"
        className="section"
      >
        <motion.h2 variants={fadeUp} className="h2">프로세스와 진행 방식</motion.h2>

        {/* 타임라인 */}
        <ol className="mt-6 grid md:grid-cols-6 gap-4">
          {[
            "상담 접수",
            "기획 정리",
            "범위 확정",
            "시제품 제작",
            "자료 정리",
            "전달 및 검수",
          ].map((step, i, arr) => (
            <motion.li
              key={step}
              variants={fadeUp}
              className="group relative card p-4 flex flex-col items-center justify-center text-center gap-2
                         hover:translate-y-[-2px]"
            >
              <div className="inline-flex flex-col items-center justify-center gap-2">
                <span className="grid place-items-center w-8 h-8 rounded-full
                                 bg-gradient-to-br from-sky-400/70 to-fuchsia-400/70 text-black font-semibold">
                  {i + 1}
                </span>
                <span className="font-medium">{step}</span>
                <p className="sub text-xs text-neutral-400">
                  {[
                    "상담 내용 확인·일정 조율",
                    "핵심 목표·요구사항 정리",
                    "범위·우선순위 확정",
                    "MVP 형태로 빠르게 구현",
                    "소개 자료·정리본 준비",
                    "전달·피드백 반영",
                  ][i]}
                </p>
              </div>

              {/* 커넥터(마지막 카드 제외) */}
              {i < arr.length - 1 && (
                <span
                  className="hidden md:block absolute top-6 right-[-12px] w-6 h-[2px]
                             bg-gradient-to-r from-white/30 to-white/0"
                />
              )}
            </motion.li>
          ))}
        </ol>

        {/* 비용 피처 콜아웃 */}
        <motion.div
          variants={staggerContainer(0.1, 0.07)}
          initial="show"
          animate="show"
          className="mt-5 grid md:grid-cols-3 gap-4 text-sm"
        >
          {[
            { color: "bg-sky-300/80", title: "착수금 30%", desc: "기획 컨설팅" },
            { color: "bg-emerald-300/80", title: "중도금 40%", desc: "시제품 제작" },
            { color: "bg-fuchsia-300/80", title: "잔금 30%", desc: "소개 자료 제작" },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="card p-4 flex flex-col items-center justify-center text-center gap-2"
            >
              <div className={`w-2 h-2 rounded-full ${item.color}`} />
              <div className="font-medium">{item.title}</div>
              <div className="sub">{item.desc}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* 안내 문구 */}
        <motion.p variants={fadeUpSlow} className="sub text-xs mt-3">
          처음부터 크게 만들지 않고, 핵심 기능부터 단계적으로 제작합니다.
        </motion.p>
      </motion.section>

      <ContactConsultSection
        title="아이디어가 있다면, 먼저 가볍게 상담해보세요"
        subtitle="간단한 내용을 남겨주시면 확인 후 연락드립니다."
        submitLabel="무료 컨설팅 신청"
      />

      {/* FAQ */}
      <FAQ />

      {/* 모달들 */}
      <VideoModal
        open={open}
        onClose={() => setOpen(false)}
        videoId={videoId ?? "03eeHR_qX5E"}
      />
      <QuoteChatModal open={chatOpen} onClose={()=>setChatOpen(false)} />
      <ImageCarouselModal
        open={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        images={worksImages}
        startIndex={0}
      />

      {/* Footer */}
      <footer className="section pt-0 text-sm text-neutral-500">
        <div className="flex flex-wrap items-center gap-4 justify-between border-t border-white/10 pt-6">
          <div>© Whik lnc.</div>
          <div className="flex gap-4">
            <a href="#">http://whik.co.kr</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
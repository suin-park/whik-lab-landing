// C:\projects\whik\apps\lab-landing\app\components\BackgroundFX.tsx
export default function BackgroundFX() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* 메인 라디얼 그라디언트 베이스 */}
      <div className="absolute inset-0 bg-[#0b0c0e]">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_-10%,rgba(80,140,255,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_-10%_0%,rgba(255,120,200,0.15),transparent_55%)]" />
      </div>

      {/* 부드럽게 떠다니는 블랍 3개 */}
      <div className="blob blob-a" />
      <div className="blob blob-b" />
      <div className="blob blob-c" />
    </div>
  );
}



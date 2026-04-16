"use client";

export default function FooterNote() {
  return (
    <section className="section pt-0" aria-label="안내">
      <div className="rounded-3xl border border-[#e7e7e4] bg-neutral-100 p-5 text-sm text-neutral-700">
        <div className="font-semibold text-neutral-900">안내</div>
        <ul className="mt-2 space-y-1.5 list-disc list-inside">
          <li>이 화면은 실제 관리자 기능이 아닌 예시 데모입니다.</li>
          <li>브랜드/상품/운영 방식에 맞춰 맞춤형으로 구성할 수 있습니다.</li>
        </ul>
      </div>
    </section>
  );
}


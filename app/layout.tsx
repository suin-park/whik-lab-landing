import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import BackgroundFX from "./components/BackgroundFX";
import Image from "next/image";
import Link from "next/link";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400","600","700"] });

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://ai.whik.co.kr"),
  title: "Whik AI Lab",
  description: "AI-driven solutions by Whik — Demos, research, and prototypes.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={`${jakarta.className} min-h-dvh antialiased`}>
        <BackgroundFX />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RecordFlow – Record Browser Actions as Automation Scripts",
  description: "Capture user interactions and convert them to Playwright or Selenium scripts instantly. Built for QA engineers and automation testers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="04e0bc07-3e77-4685-9b32-bd87a4913725"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}

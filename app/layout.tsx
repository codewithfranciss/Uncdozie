import type { Metadata } from "next";
import { Lora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Dozie",
  description: "Software Engineer. Builder.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <div className="min-h-screen w-full flex justify-center px-5 sm:px-6 py-12 sm:py-16 md:py-24 selection:bg-stone-700 selection:text-white">
          <div className="w-full max-w-[700px] flex flex-col">
            <SiteHeader />
            <main className="flex-grow">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}

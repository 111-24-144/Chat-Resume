import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HardCodedLife",
  description: "AI Resume & Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-background text-text-primary antialiased min-h-screen flex flex-col`}
      >
        <main className="w-full max-w-screen-md mx-auto flex-1 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Motolomi Feleke | Full Stack Developer & AI Engineer",
  description:
    "Full Stack Developer & AI Engineer specializing in MERN stack, RAG pipelines, and agentic AI workflows. Available for freelance work.",
  keywords: [
    "Full Stack Developer",
    "AI Engineer",
    "React",
    "Node.js",
    "LangChain",
    "RAG",
    "Freelance Developer",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

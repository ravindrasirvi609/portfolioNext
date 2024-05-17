import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ravindra's Portfolio",
  description:
    "Discover the world of software engineering through Ravindra Sirvi's portfolio. As a skilled engineer, I've built a diverse range of projects spanning web, mobile, and cloud technologies. Dive in to explore my creations and let's chat about how we can innovate together!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children} <Analytics />
      </body>
    </html>
  );
}

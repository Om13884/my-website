import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import ClientScripts from "@/components/ClientScripts";
import VantaHeroBackground from "@/components/VantaHeroBackground";
import ScrollTriggerPopup from "@/components/ScrollTriggerPopup";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Omkar Biradar — AI Automation Consultant",
  description:
    "Omkar Biradar — I embed trained AI agents inside your workflow, diagnose where efficiency is breaking, and ship working fixes alongside you.",
  keywords:
    "AI automation consultant, embedded consultant, AI agent development, workflow automation, automation systems",
  openGraph: {
    title: "Omkar Biradar — AI Automation Consultant",
    description: "I build custom AI automation systems embedded directly inside your workflow.",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const isAdmin = headersList.get("x-is-admin") === "true";

  return (
    <html lang="en" className={inter.variable}>
      <body>
        {isAdmin ? (
          children
        ) : (
          <>
            <VantaHeroBackground />
            <ScrollProgress />
            <Navbar />
            <main>{children}</main>
            <Footer />
            <BackToTop />
            <ClientScripts />
            <ScrollTriggerPopup />
          </>
        )}
      </body>
    </html>
  );
}

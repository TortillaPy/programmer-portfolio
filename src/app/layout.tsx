import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marco Antonio Bacchetta Villalba | Backend Developer Portfolio",
  description: "Backend Developer specializing in TypeScript, Node.js, and API Architecture. Transitioned from law, bringing analytical precision and compliance awareness into software engineering.",
  keywords: ["Backend Developer", "Software Engineer", "TypeScript Developer", "Node.js", "Express", "API Architecture", "GDG Asunción", "Paraguay Backend Developer", "Recruiter Fast Pass", "Web Developer Portfolio"],
  authors: [{ name: "Marco Antonio Bacchetta Villalba" }],
  openGraph: {
    title: "Marco Antonio Bacchetta Villalba | Backend Developer Portfolio",
    description: "Interactive portfolio optimized for tech recruiters: download resume, copy Slack pitch, and view projects in one click.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" style={{ colorScheme: "dark" }}>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased selection:bg-brand-500/20 selection:text-brand-200`}
      >
        {children}
      </body>
    </html>
  );
}

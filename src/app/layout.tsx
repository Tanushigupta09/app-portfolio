import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "App Portfolio — Released Applications",
  description:
    "A curated portfolio of applications released on the App Store and Google Play Store.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col grid-bg">
        <header className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
            <a href="/" className="flex items-center gap-2.5">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-neon-purple/20 ring-1 ring-neon-purple/40">
                <svg
                  className="h-4 w-4 text-neon-purple"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
                <div className="absolute inset-0 rounded-lg bg-neon-purple/10 blur-sm" />
              </div>
              <span className="text-lg font-semibold tracking-tight text-foreground">
                App Portfolio
              </span>
            </a>
            <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
              <a
                href="/"
                className="transition-colors hover:text-neon-cyan"
              >
                Apps
              </a>
              <a
                href="/#about"
                className="transition-colors hover:text-neon-cyan"
              >
                About
              </a>
              <a
                href="mailto:guptadeepali1972@gmail.com"
                className="rounded-full border border-neon-pink/40 bg-neon-pink/10 px-4 py-1.5 text-neon-pink transition-all hover:bg-neon-pink/20 hover:shadow-[0_0_15px_rgba(244,114,182,0.2)]"
              >
                Contact
              </a>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-border/50">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
            <p>&copy; {new Date().getFullYear()} App Portfolio. All rights reserved.</p>
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/tanushi/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-neon-purple"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

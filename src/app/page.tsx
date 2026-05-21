import { apps } from "@/data/apps";
import { AppCard } from "@/components/AppCard";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neon-purple/10 via-neon-pink/5 to-transparent" />
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-neon-cyan/5 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-neon-pink/5 blur-[80px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent" />

        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-24 text-center">
          <div className="animate-fade-in-up">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-neon-green/30 bg-neon-green/5 px-4 py-1.5 text-sm text-neon-green">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-green opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-green" />
              </span>
             Open to mobile, frontend & frontend-heavy full-stack roles
            </span>
          </div>

          <h1
            className="animate-fade-in-up mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "100ms" }}
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent">
              Tanushi Gupta
            </span>
          </h1>

          <p
            className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
            style={{ animationDelay: "200ms" }}
          >
            Mobile-first Full-Stack Engineer shipping production apps to the
            App Store and Google Play with React Native, SwiftUI, and Next.js.
          </p>

          {/* Skills */}
          <div
            className="animate-fade-in-up mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2"
            style={{ animationDelay: "250ms" }}
          >
            {[
              "React Native",
              "SwiftUI",
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "NestJS",
              "PostgreSQL",
              "Prisma",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div
            className="animate-fade-in-up mx-auto mt-12 grid max-w-sm grid-cols-2 gap-6"
            style={{ animationDelay: "300ms" }}
          >
            <div className="neon-border rounded-xl border border-border bg-card/60 p-4 backdrop-blur-sm">
              <p className="text-3xl font-bold text-neon-cyan neon-text-cyan">
                {apps.length}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Released Apps
              </p>
            </div>
            <div className="neon-border rounded-xl border border-border bg-card/60 p-4 backdrop-blur-sm">
              <p className="text-3xl font-bold text-neon-pink neon-text-pink">
                2+
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Grid */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="mb-12 flex flex-col gap-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Released Applications
          </h2>
          <p className="text-muted-foreground">
            Tap on an app to see details, features, and store links.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {apps.map((app, i) => (
            <AppCard key={app.id} app={app} index={i} />
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-border/50 bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-neon-cyan">
              About
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Tanushi Gupta
            </h2>
            <div className="mt-6 space-y-4 text-left leading-relaxed text-muted-foreground">
              <p>
                Mobile-first Full-Stack Engineer with 2+ years of experience
                designing and shipping production-ready web and cross-platform
                applications using React Native, SwiftUI, React, Next.js,
                TypeScript, and backend technologies like Node.js and NestJS.
                Proven track record of owning the full feature lifecycle — from
                Figma to scalable backend APIs to production deployment — with
                a focus on reusable component architecture, state-driven UI,
                and performance optimization.
              </p>
              <p>
                Actively advancing iOS expertise through Swift and SwiftUI,
                while complementing a strong foundation in modern full-stack
                development including REST APIs, database design (PostgreSQL,
                Prisma), and cloud deployments. Adept at building scalable,
                maintainable systems that balance clean architecture with
                seamless user experiences. Seeking roles at the intersection of
                mobile, iOS, and full-stack engineering within teams that
                prioritize thoughtful UX, code quality, and continuous growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

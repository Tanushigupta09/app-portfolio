import Link from "next/link";
import type { App } from "@/data/apps";
import { PlatformBadges } from "./PlatformBadges";
import { StarRating } from "./StarRating";

export function AppCard({ app, index }: { app: App; index: number }) {
  if (app.isSecret) {
    return (
      <div
        className="animate-fade-in-up group relative flex flex-col overflow-hidden rounded-2xl border border-dashed border-border bg-card/40 backdrop-blur-sm"
        style={{ animationDelay: `${index * 120}ms` }}
      >
        <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-muted to-background">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(122,120,145,0.03)_10px,rgba(122,120,145,0.03)_20px)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(192,132,252,0.05),transparent_70%)]" />
          <img
            src={app.icon}
            alt="Secret project"
            width={80}
            height={80}
            className="relative z-10 opacity-40"
          />
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-2 p-6 text-center">
          <h3 className="text-lg font-semibold text-muted-foreground">
            {app.name}
          </h3>
          <p className="text-sm text-muted-foreground/60">{app.tagline}</p>
          <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-neon-pink/20 bg-neon-pink/5 px-3 py-1 text-xs font-medium text-neon-pink">
            <svg
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            Under NDA
          </span>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={`/apps/${app.id}`}
      className="animate-fade-in-up group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/60 neon-border transition-all duration-300 hover:-translate-y-1 neon-border-hover backdrop-blur-sm"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div
        className="relative flex h-52 items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${app.color}15, transparent)`,
        }}
      >
        <div
          className="absolute -right-8 -top-8 h-36 w-36 rounded-full blur-xl opacity-[0.06]"
          style={{ backgroundColor: app.color }}
        />
        <div
          className="absolute -left-4 bottom-0 h-24 w-24 rounded-full blur-lg opacity-[0.04]"
          style={{ backgroundColor: app.color }}
        />
        <img
          src={app.icon}
          alt={`${app.name} icon`}
          width={88}
          height={88}
          className="relative z-10 rounded-2xl drop-shadow-[0_0_15px_rgba(192,132,252,0.2)] transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="truncate text-lg font-semibold text-card-foreground">
              {app.name}
            </h3>
            <p className="truncate text-sm text-muted-foreground">
              {app.tagline}
            </p>
          </div>
          <span
            className="shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium"
            style={{
              borderColor: `${app.color}30`,
              backgroundColor: `${app.color}10`,
              color: app.color,
            }}
          >
            {app.category}
          </span>
        </div>

        {app.rating && (
          <div className="flex items-center gap-2">
            <StarRating rating={app.rating} />
            <span className="text-sm font-medium text-muted-foreground">
              {app.rating}
            </span>
          </div>
        )}

        <div className="mt-auto flex items-center justify-between pt-1">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span>{app.downloads} downloads</span>
            {app.size && <span>{app.size}</span>}
          </div>
          <PlatformBadges platforms={app.platforms} />
        </div>

        <div className="flex items-center justify-end text-xs">
          <span className="flex items-center gap-1 font-medium text-neon-cyan opacity-0 transition-opacity group-hover:opacity-100">
            View details
            <svg
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

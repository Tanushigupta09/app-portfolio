import Link from "next/link";
import { notFound } from "next/navigation";
import { apps } from "@/data/apps";
import { StarRating } from "@/components/StarRating";
import { PlatformBadges } from "@/components/PlatformBadges";
import { StoreButton } from "@/components/StoreButton";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return apps.filter((a) => !a.isSecret).map((app) => ({ id: app.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const app = apps.find((a) => a.id === id);
  if (!app) return {};
  return {
    title: `${app.name} — App Portfolio`,
    description: app.tagline,
  };
}

export default async function AppDetailPage({ params }: Props) {
  const { id } = await params;
  const app = apps.find((a) => a.id === id && !a.isSecret);

  if (!app) notFound();

  const otherApps = apps.filter((a) => a.id !== app.id && !a.isSecret);

  return (
    <article className="mx-auto max-w-5xl px-6 py-12">
      {/* Back link */}
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-neon-cyan"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        Back to all apps
      </Link>

      {/* Header */}
      <div className="animate-fade-in-up flex flex-col gap-8 sm:flex-row sm:items-start">
        <div
          className="neon-border flex h-28 w-28 shrink-0 items-center justify-center rounded-3xl border border-border"
          style={{
            background: `linear-gradient(135deg, ${app.color}20, ${app.color}08)`,
          }}
        >
          <img
            src={app.icon}
            alt={`${app.name} icon`}
            width={72}
            height={72}
            className="rounded-2xl drop-shadow-[0_0_20px_rgba(192,132,252,0.25)]"
          />
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {app.name}
            </h1>
            <span
              className="rounded-full border px-3 py-1 text-sm font-medium"
              style={{
                borderColor: `${app.color}30`,
                backgroundColor: `${app.color}10`,
                color: app.color,
              }}
            >
              {app.category}
            </span>
          </div>

          <p className="mt-2 text-lg text-muted-foreground">{app.tagline}</p>

          <div className="mt-4 flex flex-wrap items-center gap-6">
            {app.rating && (
              <div className="flex items-center gap-2">
                <StarRating rating={app.rating} />
                <span className="text-sm font-semibold">{app.rating}</span>
              </div>
            )}
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12M12 16.5V3"
                />
              </svg>
              {app.downloads} downloads
            </div>
            {app.size && (
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75"
                  />
                </svg>
                {app.size}
              </div>
            )}
            <PlatformBadges platforms={app.platforms} />
          </div>
        </div>
      </div>

      {/* Store buttons */}
      <div
        className="animate-fade-in-up mt-10 flex flex-wrap gap-4"
        style={{ animationDelay: "100ms" }}
      >
        {app.appStoreUrl && (
          <StoreButton store="apple" url={app.appStoreUrl} />
        )}
        {app.playStoreUrl && (
          <StoreButton store="google" url={app.playStoreUrl} />
        )}
      </div>

      {/* Screenshots placeholder */}
      {app.screenshots.length > 0 && (
        <div
          className="animate-fade-in-up mt-16"
          style={{ animationDelay: "200ms" }}
        >
          <h2 className="mb-6 text-xl font-semibold">Screenshots</h2>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {app.screenshots.map((screenshot, i) => (
              <div
                key={i}
                className="neon-border flex h-[420px] shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border"
                style={{
                  background: `linear-gradient(160deg, ${app.color}10, transparent)`,
                }}
              >
                <img
                  src={screenshot.url}
                  alt={screenshot.alt}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Description + Features + Tech Stack */}
      <div className="mt-16 grid gap-12 lg:grid-cols-3">
        <div
          className="animate-fade-in-up lg:col-span-2"
          style={{ animationDelay: "300ms" }}
        >
          <h2 className="mb-4 text-xl font-semibold">About</h2>
          <p className="leading-relaxed text-muted-foreground">
            {app.description}
          </p>

          {app.features.length > 0 && (
            <>
              <h2 className="mb-4 mt-10 text-xl font-semibold">
                Key Features
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {app.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-neon-green"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        <div
          className="animate-fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          {app.techStack.length > 0 && (
            <>
              <h2 className="mb-4 text-xl font-semibold">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {app.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-medium font-mono text-neon-cyan"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </>
          )}

          <div className="neon-border mt-8 rounded-xl border border-border bg-card p-5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neon-purple">
              Quick Stats
            </h3>
            <dl className="mt-4 space-y-3">
              {app.rating && (
                <div className="flex justify-between">
                  <dt className="text-sm text-muted-foreground">Rating</dt>
                  <dd className="text-sm font-semibold">
                    {app.rating} / 5.0
                  </dd>
                </div>
              )}
              <div className="flex justify-between">
                <dt className="text-sm text-muted-foreground">Downloads</dt>
                <dd className="text-sm font-semibold">{app.downloads}</dd>
              </div>
              {app.size && (
                <div className="flex justify-between">
                  <dt className="text-sm text-muted-foreground">Size</dt>
                  <dd className="text-sm font-semibold">{app.size}</dd>
                </div>
              )}
              <div className="flex justify-between">
                <dt className="text-sm text-muted-foreground">Platforms</dt>
                <dd className="text-sm font-semibold">
                  {app.platforms
                    .map((p) => (p === "ios" ? "iOS" : "Android"))
                    .join(", ")}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Other apps */}
      {otherApps.length > 0 && (
        <div className="mt-20 border-t border-border/50 pt-12">
          <h2 className="mb-6 text-xl font-semibold">More Apps</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherApps.slice(0, 3).map((other) => (
              <Link
                key={other.id}
                href={`/apps/${other.id}`}
                className="neon-border flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:bg-muted/30 neon-border-hover"
              >
                <img
                  src={other.icon}
                  alt={other.name}
                  width={48}
                  height={48}
                  className="shrink-0 rounded-xl"
                />
                <div className="min-w-0">
                  <p className="truncate font-semibold">{other.name}</p>
                  <p className="truncate text-sm text-muted-foreground">
                    {other.tagline}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

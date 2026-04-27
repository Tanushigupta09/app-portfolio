export interface AppScreenshot {
  url: string;
  alt: string;
}

export interface App {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  category: string;
  platforms: ("ios" | "android")[];
  playStoreUrl?: string;
  appStoreUrl?: string;
  screenshots: AppScreenshot[];
  features: string[];
  techStack: string[];
  rating?: number;
  downloads: string;
  size?: string;
  releaseDate: string;
  color: string;
  isSecret?: boolean;
}

export const apps: App[] = [
  {
    id: "uix-club",
    name: "UIX Club",
    tagline: "Unlock your earning potential with UIX Club",
    description:
      "UIX Club is a members-only professional community app for pre-vetted designers, developers, and tech talent. Sign in, pick your role — Job Seeker, Community Member, or Talent Scout — and access a hub for Stackforce job matching, referrals, lead generation, time logging, curated drops, stories, playbooks, and a searchable member directory. Built with deep linking, push notifications, and OTP-based onboarding with LinkedIn integration.",
    icon: "https://media.licdn.com/dms/image/v2/D560BAQFdBdV4a1aWRw/company-logo_200_200/B56ZdUpdY.HUAI-/0/1749471844834/uix_labs_india_logo?e=2147483647&v=beta&t=Sk0em88ZkdDJReKrg6VDARlB4A2lf3fNK5bz6eEX0SQ",
    category: "Business",
    platforms: ["ios", "android"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.uix",
    appStoreUrl: "https://apps.apple.com/us/app/uix-club/id6740177256",
    screenshots: [
      {
        url: "https://play-lh.googleusercontent.com/pvql5btEu1isMezIe1gYNVWadLqp7o3KpKZw-71ZmAKOMtmGNClOCGVt7-wowRuy4nw=w5120-h2880-rw",
        alt: "UIX Club feature graphic",
      },
      {
        url: "https://play-lh.googleusercontent.com/5HNq7P_Knv2xKJo_2GPT2E0jex0_F1SuEQX9TuOTHup6b0ZmTRLsbQ9wNM88g2NnalXc=w5120-h2880-rw",
        alt: "UIX Club preview",
      },
      {
        url: "https://play-lh.googleusercontent.com/Kru5fxsf9tDT3izNKd6Elo4-hzwSnC89lstkoyg-_omEzm-zmkv8N02F1Zx7GI6B6HI=w5120-h2880-rw",
        alt: "UIX Club preview",
      },
    ],
    features: [
      "Role-based onboarding (Job Seeker, Community, Talent Scout)",
      "Stackforce job matching & wishlisting",
      "Lead generation & referral tracking",
      "Time logging with engagement/retainer settings",
      "Curated drops with category filters",
      "Interactive stories & playbook walkthroughs",
      "Searchable member directory with skill profiles",
      "Socials hub with blogs (podcasts & more coming soon)",
      "Deep linking via uix:// and https://uix.app",
      "Push notifications with Notifee & MoEngage",
    ],
    techStack: [
      "React Native",
      "TypeScript",
      "Apollo GraphQL",
      "Hasura",
      "Redux Toolkit",
      "React Navigation",
      "Reanimated",
      "Sentry",
      "Mixpanel",
      "CodePush",
    ],
    downloads: "100+",
    size: "23 MB",
    releaseDate: "2025-01-01",
    color: "#b8d430",
  },
  {
    id: "stealth-project",
    name: "Coming Soon",
    tagline: "Something exciting is in the works",
    description:
      "This project is currently under wraps. Stay tuned for the reveal — it's going to be worth the wait.",
    icon: "/icons/stealth.svg",
    category: "Undisclosed",
    platforms: ["ios", "android"],
    screenshots: [],
    features: [],
    techStack: [],
    downloads: "—",
    releaseDate: "2025-01-01",
    color: "#94A3B8",
    isSecret: true,
  },
];

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
    name: "Jiffy By Spencer's",
    tagline: "Something exciting is in the works",
    description:
      "Spencer's Retail launched Jiffy as its entry into India’s fast-growing quick commerce market in early 2025. The platform focuses on delivering groceries, FMCG products, personal care items, snacks, home essentials, and electronics within 20–30 minutes. Unlike competitors such as Blinkit, Zepto, and Swiggy Instamart that rely heavily on dark-store infrastructure, Jiffy operates through Spencer’s existing physical stores and third-party delivery fleets. This helps Spencer’s reduce infrastructure costs while entering the quick commerce race",
    icon: "data:image/jpeg;base64,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",
 category: "Business",
    platforms: ["ios", "android"],
    screenshots: [{
      url:"https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/8f/aa/98/8faa9846-5bac-64c6-6242-011969970f75/1242__U00d7_2688_1__U00281_U0029.png/460x996bb.webp",
      alt:"Jiffy by Spencer's Preview"
    },{
      url:"https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/9f/e3/df/9fe3dff0-665e-d996-f533-9c74bcb351b0/1242__U00d7_2688_2__U00281_U0029.png/460x996bb.webp",
      alt:"Jiffy by Spencer's Preview"
    },{
      url:"https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/6f/94/01/6f9401f5-2ba4-6872-f155-d19fc68f3764/1242__U00d7_2688_3__U00281_U0029.png/460x996bb.webp",
       alt:"Jiffy by Spencer's Preview"
    },{
      url:"https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/48/de/5e/48de5e91-0ac5-bab7-cf9d-d6fbf0055104/1242__U00d7_2688_4__U00281_U0029.png/460x996bb.webp",
     alt:"Jiffy by Spencer's Preview"
    },{
      url:"https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/70/29/91/70299158-0586-f893-b0b1-81c16cd8c367/1242__U00d7_2688_5__U00281_U0029.png/460x996bb.webp",
 alt:"Jiffy by Spencer's Preview"
    }],
    features: ["Widget-driven UI architecture","Dynamic homepage rendering via backend configs","Manual checkout & order flow","Real-time cart & inventory handling","Loyalty & rewards membership system","Coupon, cashback & offer integrations","AI chatbot & customer support flow","Migration to scalable new architecture","Performance optimization & app stability improvements","Reusable component-driven development","Play Store & App Store production releases","Analytics, tracking & event instrumentation","Responsive UI for high-volume quick commerce traffic","Category listing & product detail pages"],
    techStack: ["React Native", "Typescript", "React.js", "React Navigation","Reanimated","Sentry",
      "Mixpanel",
      "CodePush","Redux/Toolkit"],
    downloads: "50L+",
    releaseDate: "2025-01-01",
   color: "#b8d430",
    isSecret:false,
    playStoreUrl:"https://play.google.com/store/apps/details?id=com.bsl.spencers.activity&hl=en_IN",
    appStoreUrl:"https://apps.apple.com/in/app/jiffy-by-spencers/id1156464267"
  },
];

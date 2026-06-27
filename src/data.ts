import { Game, Tournament, LeaderboardPlayer, Testimonial, PricingPlan, NewsArticle, FAQItem } from "./types";

export const GAMES_DATA: Game[] = [
  {
    id: "g1",
    title: "Apex Horizon",
    category: "Sci-Fi Shooter",
    rating: 4.9,
    platforms: ["PC", "PS5", "XBOX"],
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
    isTrending: true,
    playersCount: "1.2M Active"
  },
  {
    id: "g2",
    title: "Cyber Rush 2099",
    category: "Action RPG",
    rating: 4.8,
    platforms: ["PC", "PS5"],
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800",
    isTrending: true,
    playersCount: "850K Active"
  },
  {
    id: "g3",
    title: "Shadow Syndicate",
    category: "Stealth Action",
    rating: 4.7,
    platforms: ["PC", "XBOX", "SWITCH"],
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
    isTrending: true,
    playersCount: "420K Active"
  },
  {
    id: "g4",
    title: "Astro Odyssey",
    category: "Space Sandbox",
    rating: 4.6,
    platforms: ["PC", "PS5", "XBOX"],
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=800",
    isTrending: false,
    playersCount: "310K Active"
  },
  {
    id: "g5",
    title: "Chronoshift",
    category: "Tactical Strategy",
    rating: 4.9,
    platforms: ["PC"],
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=800",
    isTrending: false,
    playersCount: "680K Active"
  },
  {
    id: "g6",
    title: "Project Mecha",
    category: "Vehicular Combat",
    rating: 4.5,
    platforms: ["PC", "PS5"],
    image: "https://images.unsplash.com/photo-1612287230202-1bf1d85d1bdf?auto=format&fit=crop&q=80&w=800",
    isTrending: false,
    playersCount: "150K Active"
  }
];

// Calculate future timestamps dynamically so countdown always works!
const now = Date.now();
export const TOURNAMENTS_DATA: Tournament[] = [
  {
    id: "t1",
    gameTitle: "Apex Horizon: Global Masters",
    prizePool: "$250,000",
    date: "June 28, 2026",
    time: "18:00 UTC",
    spotsLeft: 12,
    totalSpots: 128,
    status: "live",
    timestamp: now + (2 * 3600 + 15 * 60) * 1000 // 2h 15m from now
  },
  {
    id: "t2",
    gameTitle: "Cyber Rush: Neon Velocity",
    prizePool: "$100,000",
    date: "June 29, 2026",
    time: "20:00 UTC",
    spotsLeft: 45,
    totalSpots: 64,
    status: "upcoming",
    timestamp: now + (26 * 3600) * 1000 // 26 hours from now
  },
  {
    id: "t3",
    gameTitle: "Chronoshift: Temporal Clash",
    prizePool: "$50,000",
    date: "June 30, 2026",
    time: "15:00 UTC",
    spotsLeft: 8,
    totalSpots: 32,
    status: "upcoming",
    timestamp: now + (48 * 3600 + 30 * 60) * 1000 // 48.5 hours from now
  }
];

export const LEADERBOARD_DATA: LeaderboardPlayer[] = [
  {
    rank: 1,
    username: "ValkyrieX",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    score: 28450,
    winRate: "78.4%",
    tier: "Elite"
  },
  {
    rank: 2,
    username: "NeonSpecter",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    score: 27120,
    winRate: "74.2%",
    tier: "Elite"
  },
  {
    rank: 3,
    username: "Chronos_Dev",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    score: 25980,
    winRate: "71.5%",
    tier: "Master"
  },
  {
    rank: 4,
    username: "GhostInTheShell",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    score: 24510,
    winRate: "69.8%",
    tier: "Master"
  },
  {
    rank: 5,
    username: "VoidWalker",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
    score: 23890,
    winRate: "67.1%",
    tier: "Diamond"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "ts1",
    name: "Sarah Jenkins",
    username: "sarah_j",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
    comment: "NovaPlay completely transformed my casual gaming habit. The zero latency matchmaking and seamless tournament registrations are unbelievable.",
    rating: 5,
    role: "Competitive Player"
  },
  {
    id: "ts2",
    name: "Alex Rivera",
    username: "alexr_v",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150",
    comment: "The Elite membership is worth every single dollar. Early access to alpha betas and premium cloud streaming has completely replaced my physical console.",
    rating: 5,
    role: "Content Creator"
  },
  {
    id: "ts3",
    name: "Elena Rostova",
    username: "elena_r",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150",
    comment: "An incredible community of developers and gamers alike. The discord integration makes teaming up with high rank partners incredibly quick.",
    rating: 4,
    role: "Guild Leader"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Free",
    priceMonthly: 0,
    priceYearly: 0,
    features: [
      "Access to 10 standard games",
      "Standard matchmaking lobby",
      "Public tournament registrations",
      "Ad supported gameplay",
      "Web play only"
    ]
  },
  {
    name: "Pro",
    priceMonthly: 14.99,
    priceYearly: 119.99,
    features: [
      "Access to all 100+ standard games",
      "Priority matchmaking lobby",
      "Exclusive Pro tournament entry",
      "100% ad free experience",
      "Cloud save and cross play",
      "Discount on digital purchases",
      "Full HD 1080p stream quality"
    ],
    isPopular: true,
    badge: "Most Popular"
  },
  {
    name: "Elite",
    priceMonthly: 29.99,
    priceYearly: 239.99,
    features: [
      "Unlimited access to catalog including betas",
      "Instant matchmaking with rank matching",
      "Elite tournament entrance included",
      "Ad free premium streaming setup",
      "Early Alpha testing privileges",
      "Free monthly battle pass keys",
      "Ultra HD 4K 120FPS stream support",
      "Dedicated account concierge"
    ],
    badge: "Hardcore Gaming"
  }
];

export const NEWS_DATA: NewsArticle[] = [
  {
    id: "n1",
    title: "Apex Horizon Season 5: Cataclysmic Shift Live Tonight",
    category: "Game Update",
    date: "June 26, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
    excerpt: "Get ready for a massive terraforming shift as Season 5 completely overhaul the volcanic wastes of Sector-9. Brand new legends, gear, and sandbox rules."
  },
  {
    id: "n2",
    title: "The Rise of Next-Gen Web Assembly Game Engines",
    category: "Technology",
    date: "June 25, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1612287230202-1bf1d85d1bdf?auto=format&fit=crop&q=80&w=800",
    excerpt: "Exploring the bleeding edge software bringing triple-A graphical fidelity straight to the modern web browser. No plugins or native installations needed."
  },
  {
    id: "n3",
    title: "Chronoshift Temporal Clash Championship Announced",
    category: "Esports",
    date: "June 24, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=800",
    excerpt: "Eight international powerhouse clubs prepare to face off in the highest prize tournament of tactical strategy history. Registrations open on NovaPlay."
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq1",
    question: "What hardware do I need to run NovaPlay games?",
    answer: "NovaPlay uses standard web and advanced cloud technology. For cloud streamed titles, any modern web browser on an average PC, tablet, or smartphone with a 15 Mbps connection is sufficient. For locally rendered browser titles, we recommend a machine with a graphics processor supporting WebGL 2."
  },
  {
    id: "faq2",
    question: "Can I play with my friends on Playstation or Xbox?",
    answer: "Absolutely. NovaPlay has a unified backend matching system that supports cross-play and shared progression across PC, PlayStation, Xbox, and Nintendo Switch for compatible titles."
  },
  {
    id: "faq3",
    question: "How do tournament prize distributions work?",
    answer: "Tournament rewards are transferred instantly to your verified digital wallet or bank account within seventy-two hours of the championship final validation. Standard security reviews apply."
  },
  {
    id: "faq4",
    question: "Are there any hidden cancellation fees for premium plans?",
    answer: "Never. You can cancel your subscription, upgrade, or downgrade at any time directly through your dashboard settings. Active cycles will remain accessible until the billing period ends."
  },
  {
    id: "faq5",
    question: "How do I secure early access to Alpha and Beta trials?",
    answer: "Alpha and Beta keys are automatically distributed to Pro and Elite tier members via email notification. Active community contributors also receive promotional codes based on leaderboard activity."
  }
];

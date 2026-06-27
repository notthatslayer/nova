export interface Game {
  id: string;
  title: string;
  category: string;
  rating: number;
  platforms: string[];
  image: string;
  isTrending: boolean;
  playersCount: string;
}

export interface Tournament {
  id: string;
  gameTitle: string;
  prizePool: string;
  date: string;
  time: string;
  spotsLeft: number;
  totalSpots: number;
  status: "live" | "upcoming" | "ended";
  timestamp: number; // For countdown
}

export interface LeaderboardPlayer {
  rank: number;
  username: string;
  avatar: string;
  score: number;
  winRate: string;
  tier: "Elite" | "Master" | "Diamond" | "Platinum";
}

export interface Testimonial {
  id: string;
  name: string;
  username: string;
  avatar: string;
  comment: string;
  rating: number;
  role: string;
}

export interface PricingPlan {
  name: "Free" | "Pro" | "Elite";
  priceMonthly: number;
  priceYearly: number;
  features: string[];
  badge?: string;
  isPopular?: boolean;
}

export interface NewsArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

import { useState } from "react";
import { Users, Disc, Shield, ArrowUpRight, Trophy, Star, MessageSquare, Flame } from "lucide-react";
import { LEADERBOARD_DATA, TESTIMONIALS_DATA } from "../data";

export default function CommunitySection() {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  // Statistics data
  const communityStats = [
    { label: "REGISTERED HEROES", value: "840K+" },
    { label: "DISCORD UNION SQUAD", value: "142K" },
    { label: "LIVE STREAM CLANS", value: "2.4K" },
  ];

  const nextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  return (
    <section id="community" className="py-24 relative overflow-hidden bg-nova-dark/20 border-t border-white/5">
      {/* Visual background lights */}
      <div className="absolute top-[50%] right-[-15%] h-[500px] w-[500px] rounded-full bg-nova-primary/5 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 left-[10%] h-[350px] w-[350px] rounded-full bg-nova-secondary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Block */}
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 text-nova-secondary font-mono text-xs tracking-wider uppercase bg-nova-secondary/10 px-3.5 py-1.5 rounded-full border border-nova-secondary/20">
            <Users size={14} />
            <span>CLAN HUB</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-black text-white tracking-tight">
            Our Elite Alliance
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Synchronize with elite squads and share real time achievements. From regional strategy guilds to premium Discord lobbies, your gaming family awaits.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Discord & Stats - left (Span 7) */}
          <div className="lg:col-span-7 flex flex-col gap-8 justify-between">
            {/* Player statistics banner */}
            <div className="grid grid-cols-3 gap-4">
              {communityStats.map((stat, i) => (
                <div key={i} className="glass-panel p-6 rounded-2xl border border-white/5 text-left relative overflow-hidden group">
                  <div className="absolute -right-2 -bottom-2 opacity-5 text-white">
                    <Users size={80} />
                  </div>
                  <span className="font-mono text-[9px] text-white/40 tracking-wider uppercase">
                    {stat.label}
                  </span>
                  <p className="font-display text-2xl md:text-3xl font-extrabold text-white mt-1.5 tracking-tight group-hover:text-nova-secondary transition-colors duration-300">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Discord Style Community Preview Card */}
            <div className="glass-panel-heavy p-6 rounded-2xl border border-white/10 text-left flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-xl bg-[#5865F2]/20 flex items-center justify-center text-[#5865F2] border border-[#5865F2]/30">
                      <Disc size={20} className="animate-spin-slow" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-white tracking-wide">
                        NovaPlay Guild Server
                      </h3>
                      <p className="font-mono text-[10px] text-nova-secondary/70">
                        OFFICIAL ALLIANCE HUB
                      </p>
                    </div>
                  </div>

                  <a
                    href="https://discord.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1 text-xs text-white/60 hover:text-white transition-colors"
                  >
                    <span>discord.gg/novaplay</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>

                {/* Simulated Channels list */}
                <div className="space-y-3 font-mono text-xs text-white/50 mb-8">
                  <div className="flex items-center justify-between bg-white/3 px-4 py-2.5 rounded-lg border border-white/5">
                    <span className="text-white/80"># announcements</span>
                    <span className="text-[10px] text-nova-secondary font-semibold bg-nova-secondary/15 px-2 py-0.5 rounded border border-nova-secondary/10">
                      UPDATES
                    </span>
                  </div>
                  <div className="flex items-center justify-between bg-white/3 px-4 py-2.5 rounded-lg border border-white/5">
                    <span className="text-white/80"># tactical-lobby</span>
                    <span className="text-[10px] text-nova-primary font-semibold bg-nova-primary/15 px-2 py-0.5 rounded border border-nova-primary/10">
                      34 ACTIVE
                    </span>
                  </div>
                  <div className="flex items-center justify-between bg-white/3 px-4 py-2.5 rounded-lg border border-white/5">
                    <span className="text-white/80"># lfg-looking-for-group</span>
                    <span className="text-[10px] text-nova-pink font-semibold bg-nova-pink/15 px-2 py-0.5 rounded border border-nova-pink/10">
                      9+ QUEUED
                    </span>
                  </div>
                </div>
              </div>

              {/* Server Stats & Join Button */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-white/5">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-xs text-white/60">
                      <strong className="text-white font-bold">24,842</strong> Online
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="font-mono text-xs text-white/60">
                      <strong className="text-white font-bold">142,000</strong> Members
                    </span>
                  </div>
                </div>

                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold py-3 px-6 rounded-xl text-center text-xs tracking-wider uppercase transition-colors duration-300"
                >
                  Join Guild Server
                </a>
              </div>
            </div>
          </div>

          {/* Leaderboard - right (Span 5) */}
          <div className="lg:col-span-5 glass-panel p-6 rounded-2xl border border-white/5 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <Trophy size={18} className="text-nova-secondary" />
                  <h3 className="font-display font-bold text-white text-lg tracking-wide">
                    Global Leaderboard
                  </h3>
                </div>
                <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest bg-white/5 border border-white/5 px-2 py-1 rounded">
                  SEASON 8
                </span>
              </div>

              {/* Players listing */}
              <div className="space-y-4">
                {LEADERBOARD_DATA.map((player) => {
                  const isTopRank = player.rank <= 3;
                  return (
                    <div
                      key={player.rank}
                      className="flex items-center justify-between p-3 rounded-xl bg-white/3 border border-white/5 hover:border-white/10 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-3.5">
                        {/* Rank indicator */}
                        <div
                          className={`w-6 h-6 rounded-md flex items-center justify-center font-mono text-xs font-bold ${
                            player.rank === 1
                              ? "bg-amber-500/10 text-amber-500 border border-amber-500/25"
                              : player.rank === 2
                              ? "bg-slate-300/10 text-slate-300 border border-slate-300/25"
                              : player.rank === 3
                              ? "bg-amber-700/10 text-amber-700 border border-amber-700/25"
                              : "bg-white/5 text-white/40 border border-transparent"
                          }`}
                        >
                          {player.rank}
                        </div>

                        {/* Avatar */}
                        <img
                          src={player.avatar}
                          alt={player.username}
                          className="w-8 h-8 rounded-full border border-white/10 object-cover"
                          loading="lazy"
                        />

                        {/* Name and Tier */}
                        <div>
                          <p className="font-display font-bold text-white text-sm">
                            {player.username}
                          </p>
                          <span className="font-mono text-[9px] text-white/40 uppercase tracking-wider">
                            {player.tier} • {player.winRate} WR
                          </span>
                        </div>
                      </div>

                      {/* Score display */}
                      <div className="text-right">
                        <span className="font-mono text-xs font-bold text-nova-secondary">
                          {player.score.toLocaleString()}
                        </span>
                        <p className="font-mono text-[8px] text-white/30 uppercase tracking-widest mt-0.5">
                          RATING
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* View full link */}
            <button className="w-full text-center text-xs font-bold text-white/50 hover:text-white mt-6 pt-4 border-t border-white/5 cursor-pointer flex items-center justify-center space-x-1">
              <span>EXPLORE EXPANDED ARCHIVES</span>
              <ArrowUpRight size={12} />
            </button>
          </div>
        </div>

        {/* Testimonials Block */}
        <div className="mt-16 glass-panel-heavy p-6 md:p-10 rounded-2xl border border-white/10 text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none text-white">
            <MessageSquare size={160} />
          </div>

          <div className="max-w-3xl mx-auto flex flex-col items-center text-center space-y-6">
            <div className="flex items-center space-x-1">
              {[...Array(TESTIMONIALS_DATA[activeTestimonialIdx].rating)].map((_, i) => (
                <Star key={i} size={16} className="text-nova-secondary fill-nova-secondary" />
              ))}
            </div>

            <p className="font-display text-lg md:text-xl font-medium text-white/90 italic leading-relaxed">
              "{TESTIMONIALS_DATA[activeTestimonialIdx].comment}"
            </p>

            <div className="flex items-center space-x-4 pt-4">
              <img
                src={TESTIMONIALS_DATA[activeTestimonialIdx].avatar}
                alt={TESTIMONIALS_DATA[activeTestimonialIdx].name}
                className="w-12 h-12 rounded-full border border-nova-secondary/30 object-cover"
                loading="lazy"
              />
              <div className="text-left">
                <p className="font-display font-bold text-white text-sm">
                  {TESTIMONIALS_DATA[activeTestimonialIdx].name}
                </p>
                <p className="font-mono text-[10px] text-white/50 uppercase tracking-wider mt-0.5">
                  {TESTIMONIALS_DATA[activeTestimonialIdx].role}
                </p>
              </div>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center space-x-3 pt-6">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <div className="flex space-x-1.5">
                {TESTIMONIALS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonialIdx(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeTestimonialIdx === idx ? "w-6 bg-nova-secondary" : "w-1.5 bg-white/20"
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

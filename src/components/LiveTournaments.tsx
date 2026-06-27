import { useState, useEffect } from "react";
import { Trophy, Clock, Users, ArrowRight, CheckCircle } from "lucide-react";
import { TOURNAMENTS_DATA } from "../data";
import { Tournament } from "../types";

export default function LiveTournaments() {
  const [tournaments, setTournaments] = useState<Tournament[]>(TOURNAMENTS_DATA);
  const [timeLeft, setTimeLeft] = useState<{ [key: string]: string }>({});
  const [registeredIds, setRegisteredIds] = useState<string[]>([]);

  // Update countdown timers dynamically every second
  useEffect(() => {
    const calculateTimeLeft = () => {
      const updatedTime: { [key: string]: string } = {};

      tournaments.forEach((t) => {
        const difference = t.timestamp - Date.now();

        if (difference <= 0) {
          updatedTime[t.id] = t.status === "live" ? "IN PROGRESS" : "ENDED";
        } else {
          const hours = Math.floor(difference / (1000 * 60 * 60));
          const mins = Math.floor((difference / 1000 / 60) % 60);
          const secs = Math.floor((difference / 1000) % 60);

          updatedTime[t.id] = `${hours.toString().padStart(2, "0")}h : ${mins
            .toString()
            .padStart(2, "0")}m : ${secs.toString().padStart(2, "0")}s`;
        }
      });

      setTimeLeft(updatedTime);
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [tournaments]);

  const handleRegister = (id: string) => {
    if (registeredIds.includes(id)) return;

    // Simulate spot filling decrement and registered status change
    setTournaments((prev) =>
      prev.map((t) => {
        if (t.id === id && t.spotsLeft > 0) {
          return { ...t, spotsLeft: t.spotsLeft - 1 };
        }
        return t;
      })
    );
    setRegisteredIds((prev) => [...prev, id]);
  };

  return (
    <section id="tournaments" className="py-24 relative overflow-hidden bg-nova-dark border-t border-white/5">
      {/* Design accents */}
      <div className="absolute top-[30%] left-[5%] h-[400px] w-[400px] rounded-full bg-nova-pink/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Block */}
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 text-nova-pink font-mono text-xs tracking-wider uppercase bg-nova-pink/10 px-3.5 py-1.5 rounded-full border border-nova-pink/20">
            <Trophy size={14} />
            <span>GLOBAL CHAMPIONSHIPS</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-black text-white tracking-tight">
            Live Esports Arenas
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Match up with world-class professional squads. Participate in scheduled open qualifiers, dominate regional brackets, and claim major shares of massive prize budgets.
          </p>
        </div>

        {/* Tournaments List Grid */}
        <div className="space-y-8">
          {tournaments.map((t) => {
            const isRegistered = registeredIds.includes(t.id);
            const isLive = t.status === "live";
            const spotsPercentage = ((t.totalSpots - t.spotsLeft) / t.totalSpots) * 100;

            return (
              <div
                key={t.id}
                className={`relative rounded-2xl glass-panel p-6 md:p-8 flex flex-col lg:flex-row items-stretch lg:items-center gap-8 justify-between hover:border-white/15 hover-glow transition-all duration-300 ${
                  isLive ? "border-l-4 border-l-nova-secondary" : ""
                }`}
              >
                {/* Left block - Status & Meta info */}
                <div className="flex-1 space-y-4 text-left">
                  <div className="flex flex-wrap items-center gap-3">
                    {/* Status badge */}
                    <span
                      className={`font-mono text-[9px] font-bold px-2.5 py-1 rounded-md tracking-wider uppercase ${
                        isLive
                          ? "bg-nova-secondary/15 text-nova-secondary border border-nova-secondary/20"
                          : "bg-nova-primary/15 text-nova-primary border border-nova-primary/20"
                      }`}
                    >
                      {t.status}
                    </span>

                    {/* Date badge */}
                    <span className="font-mono text-xs text-white/40">
                      {t.date} • {t.time}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white tracking-wide">
                    {t.gameTitle}
                  </h3>

                  {/* Fill Bar */}
                  <div className="space-y-1.5 max-w-sm">
                    <div className="flex items-center justify-between text-xs font-mono text-white/50">
                      <span>Registrations Filled</span>
                      <span className="text-white/80 font-semibold">
                        {t.totalSpots - t.spotsLeft} / {t.totalSpots} Players
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-nova-primary to-nova-secondary rounded-full"
                        style={{ width: `${spotsPercentage}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Middle block - Countdown & prize pool */}
                <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-8 min-w-[280px]">
                  {/* Prize pool info */}
                  <div className="bg-white/3 px-6 py-4 rounded-xl border border-white/5 flex-1 text-left sm:text-center lg:text-left xl:text-center">
                    <p className="font-mono text-[10px] text-white/40 tracking-widest uppercase">PRIZE POOL</p>
                    <p className="font-display text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-nova-primary to-nova-secondary mt-1">
                      {t.prizePool}
                    </p>
                  </div>

                  {/* Countdown Timer */}
                  <div className="bg-white/3 px-6 py-4 rounded-xl border border-white/5 flex-1 text-left sm:text-center lg:text-left xl:text-center min-w-[160px]">
                    <p className="font-mono text-[10px] text-white/40 tracking-widest uppercase flex items-center justify-start sm:justify-center lg:justify-start xl:justify-center gap-1.5">
                      <Clock size={11} className="text-nova-pink" />
                      <span>{isLive ? "TIME REMAINING" : "STARTING IN"}</span>
                    </p>
                    <p className="font-mono text-lg font-bold text-white mt-1 tracking-wider">
                      {timeLeft[t.id] || "Calculating..."}
                    </p>
                  </div>
                </div>

                {/* Right block - Register Button */}
                <div className="flex items-center">
                  {isRegistered ? (
                    <div className="w-full lg:w-auto inline-flex items-center justify-center space-x-2 bg-nova-secondary/10 border border-nova-secondary/30 text-nova-secondary py-3.5 px-8 rounded-xl font-bold">
                      <CheckCircle size={16} />
                      <span className="text-sm font-mono tracking-wider">ENTRY CONFIRMED</span>
                    </div>
                  ) : t.spotsLeft === 0 ? (
                    <button
                      disabled
                      className="w-full lg:w-auto bg-white/5 border border-white/10 text-white/40 py-3.5 px-8 rounded-xl font-bold cursor-not-allowed"
                    >
                      BRACKETS FULL
                    </button>
                  ) : (
                    <button
                      onClick={() => handleRegister(t.id)}
                      className="w-full lg:w-auto group flex items-center justify-center space-x-2 bg-white/5 border border-white/10 hover:border-nova-primary hover:bg-nova-primary/15 text-white py-3.5 px-8 rounded-xl font-bold transition-all duration-300 cursor-pointer"
                    >
                      <span className="text-sm">REGISTER SLOT</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, Play, Flame, Search } from "lucide-react";
import { GAMES_DATA } from "../data";

export default function TrendingGames() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activePlayId, setActivePlayId] = useState<string | null>(null);

  // Categories list
  const categories = ["All", "Shooter", "Action", "Strategy", "Space"];

  // Filter games based on search and category
  const filteredGames = GAMES_DATA.filter((game) => {
    const matchesCategory =
      selectedCategory === "All" ||
      game.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handlePlayGame = (id: string) => {
    setActivePlayId(id);
    setTimeout(() => {
      setActivePlayId(null);
    }, 2500); // Reset after play animation triggers
  };

  return (
    <section id="games" className="py-24 relative overflow-hidden bg-nova-dark/40 border-t border-white/5">
      {/* Decorative Blur BG */}
      <div className="absolute top-[20%] right-[-10%] h-[300px] w-[300px] rounded-full bg-nova-secondary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] h-[300px] w-[300px] rounded-full bg-nova-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left space-y-4">
            <div className="inline-flex items-center space-x-2 text-nova-primary font-mono text-xs tracking-wider uppercase">
              <Flame size={14} className="animate-pulse" />
              <span>TRENDING HUB</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black text-white leading-tight">
              Hot Games catalog
            </h2>
            <p className="text-white/60 max-w-xl">
              Discover the most popular immersive titles streamed with sub-millisecond cloud replication. Pick your battlefield and initiate instant browser play.
            </p>
          </div>

          {/* Search bar inside header */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search library..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white text-sm focus:border-nova-primary focus:outline-none focus:ring-1 focus:ring-nova-primary transition-all duration-300"
            />
            <Search className="absolute left-4 top-3.5 text-white/40" size={16} />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer border ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-nova-primary to-nova-secondary text-white border-transparent shadow-md shadow-nova-primary/20"
                  : "bg-white/5 text-white/60 border-white/5 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid display of games */}
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredGames.map((game) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={game.id}
                  className="group relative rounded-2xl overflow-hidden glass-panel border border-white/5 hover-glow hover:border-nova-primary/30 flex flex-col justify-between"
                >
                  {/* Card Media Header */}
                  <div className="relative h-60 w-full overflow-hidden">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Shadow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-nova-dark via-nova-dark/40 to-transparent" />

                    {/* Trending tag */}
                    {game.isTrending && (
                      <span className="absolute top-4 left-4 bg-nova-pink text-white font-mono text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md shadow-lg shadow-nova-pink/30">
                        TRENDING
                      </span>
                    )}

                    {/* Active Players Badge */}
                    <span className="absolute bottom-4 left-4 bg-nova-dark/80 backdrop-blur-md text-nova-secondary border border-nova-secondary/20 font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md">
                      {game.playersCount}
                    </span>

                    {/* Play Overlay Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-nova-dark/50 backdrop-blur-sm">
                      <button
                        onClick={() => handlePlayGame(game.id)}
                        className="h-14 w-14 rounded-full bg-gradient-to-r from-nova-primary to-nova-secondary flex items-center justify-center text-white cursor-pointer shadow-lg shadow-nova-primary/40 transform scale-75 group-hover:scale-100 transition-all duration-300 hover:scale-110 hover:from-nova-pink hover:to-nova-primary"
                        aria-label={`Play ${game.title}`}
                      >
                        <Play size={20} className="fill-white translate-x-[1px]" />
                      </button>
                    </div>
                  </div>

                  {/* Card Details Body */}
                  <div className="p-6 space-y-4 text-left flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-white/50 tracking-wide">
                          {game.category}
                        </span>
                        <div className="flex items-center space-x-1 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                          <Star size={11} className="text-nova-secondary fill-nova-secondary" />
                          <span className="font-mono text-xs font-bold text-white/90">
                            {game.rating}
                          </span>
                        </div>
                      </div>

                      <h3 className="font-display text-xl font-bold text-white mt-2 tracking-wide group-hover:text-nova-secondary transition-colors duration-300">
                        {game.title}
                      </h3>
                    </div>

                    {/* Platform badges and inline Play button */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                      <div className="flex items-center space-x-2">
                        {game.platforms.map((plat) => (
                          <span
                            key={plat}
                            className="bg-white/5 text-white/60 font-mono text-[9px] font-bold px-2 py-1 rounded tracking-wider border border-white/5"
                          >
                            {plat}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => handlePlayGame(game.id)}
                        className="flex items-center space-x-1.5 text-xs font-bold text-nova-secondary hover:text-white transition-colors cursor-pointer group/btn"
                      >
                        <span>PLAY</span>
                        <Play size={10} className="fill-current group-hover/btn:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>

                  {/* Connecting Screen Loader if player clicked play */}
                  {activePlayId === game.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-nova-dark/95 backdrop-blur-md flex flex-col items-center justify-center z-20 p-6 text-center"
                    >
                      <div className="relative flex h-10 w-10 items-center justify-center mb-4">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-nova-secondary" />
                      </div>
                      <h4 className="font-display font-bold text-white text-md">ALLOCATING INSTANCE</h4>
                      <p className="font-mono text-[10px] text-white/40 mt-1.5 tracking-widest">
                        CONNECTING SECURE HYPER_LINK NODE
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/5">
            <p className="text-white/40 font-medium">No games found matching your specifications.</p>
          </div>
        )}
      </div>
    </section>
  );
}

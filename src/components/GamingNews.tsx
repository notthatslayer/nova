import { useState, MouseEvent } from "react";
import { BookOpen, Calendar, Clock, ArrowRight, X, Heart, MessageSquare } from "lucide-react";
import { NEWS_DATA } from "../data";
import { NewsArticle } from "../types";

export default function GamingNews() {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [likedArticles, setLikedArticles] = useState<string[]>([]);

  const handleLike = (id: string, e: MouseEvent) => {
    e.stopPropagation();
    if (likedArticles.includes(id)) {
      setLikedArticles((prev) => prev.filter((item) => item !== id));
    } else {
      setLikedArticles((prev) => [...prev, id]);
    }
  };

  return (
    <section id="news" className="py-24 relative overflow-hidden bg-nova-dark border-t border-white/5">
      {/* Design glows */}
      <div className="absolute bottom-[10%] left-[-10%] h-[300px] w-[300px] rounded-full bg-nova-pink/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Block */}
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 text-nova-pink font-mono text-xs tracking-wider uppercase bg-nova-pink/10 px-3.5 py-1.5 rounded-full border border-nova-pink/20">
            <BookOpen size={14} />
            <span>COMMUNICATION LOGS</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-black text-white tracking-tight">
            Gaming Chronicles
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Stay ahead of the game with breaking esports coverage, developer diaries, engine progress updates, and exclusive community insights.
          </p>
        </div>

        {/* Blog cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS_DATA.map((art) => {
            const isLiked = likedArticles.includes(art.id);
            return (
              <article
                key={art.id}
                onClick={() => setSelectedArticle(art)}
                className="group relative rounded-2xl overflow-hidden glass-panel border border-white/5 hover-glow hover:border-nova-pink/30 flex flex-col justify-between cursor-pointer text-left"
              >
                {/* Media banner cover */}
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Overlay shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-nova-dark via-transparent to-transparent" />

                  {/* Category label */}
                  <span className="absolute top-4 left-4 bg-nova-dark/80 backdrop-blur-md text-nova-pink border border-nova-pink/25 font-mono text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">
                    {art.category}
                  </span>
                </div>

                {/* Details container */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {/* Date / read-time meta */}
                    <div className="flex items-center space-x-4 text-white/40 text-xs font-mono">
                      <span className="flex items-center space-x-1">
                        <Calendar size={11} />
                        <span>{art.date}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock size={11} />
                        <span>{art.readTime}</span>
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-white group-hover:text-nova-secondary transition-colors duration-300 tracking-wide line-clamp-2">
                      {art.title}
                    </h3>

                    <p className="text-white/60 text-sm line-clamp-3">
                      {art.excerpt}
                    </p>
                  </div>

                  {/* Interactive likes / shares row */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                    <button
                      onClick={(e) => handleLike(art.id, e)}
                      className={`flex items-center space-x-1.5 text-xs font-semibold tracking-wide transition-colors ${
                        isLiked ? "text-nova-pink" : "text-white/40 hover:text-white"
                      }`}
                    >
                      <Heart size={14} className={isLiked ? "fill-nova-pink" : ""} />
                      <span>{isLiked ? "SAVED" : "SAVE"}</span>
                    </button>

                    <div className="flex items-center space-x-1.5 text-xs font-bold text-nova-secondary group-hover:translate-x-1.5 transition-transform duration-300">
                      <span>READ MORE</span>
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Expanded Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-nova-dark/90 backdrop-blur-md">
          <div className="relative w-full max-w-2xl glass-panel-heavy rounded-2xl border border-white/15 overflow-hidden flex flex-col max-h-[85vh] text-left">
            {/* Close Button */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-nova-dark/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Scrollable contents */}
            <div className="overflow-y-auto no-scrollbar">
              <div className="relative h-64 w-full">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nova-dark via-nova-dark/40 to-transparent" />
                <span className="absolute bottom-4 left-6 bg-nova-pink text-white border border-nova-pink/30 font-mono text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded">
                  {selectedArticle.category}
                </span>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                <div className="flex items-center space-x-6 text-white/40 text-xs font-mono">
                  <span className="flex items-center space-x-1">
                    <Calendar size={12} />
                    <span>{selectedArticle.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock size={12} />
                    <span>{selectedArticle.readTime}</span>
                  </span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-black text-white leading-tight">
                  {selectedArticle.title}
                </h3>

                <div className="text-white/70 text-sm md:text-base leading-relaxed space-y-4">
                  <p className="font-semibold text-white/90">
                    {selectedArticle.excerpt}
                  </p>
                  <p>
                    This is an early preview look regarding key architectural features within the modern pipeline. Engineers behind NovaPlay are executing a major optimization protocol to double streaming performance.
                  </p>
                  <p>
                    By offloading multi-threaded state computations directly to specialized client WebAssembly kernels, we can entirely eliminate runtime latency jitter and frame-skip anomalies. More technical white papers will be distributed to verified Elite class players shortly.
                  </p>
                  <p>
                    Ensure your account configurations are finalized in anticipation of major regional server launches. Check client dashboards periodically for access indicators.
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 text-white/40 text-xs font-mono">
                      <MessageSquare size={14} />
                      <span>12 COMMENTS</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="py-2.5 px-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer"
                  >
                    CLOSE COMMUNICATION
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

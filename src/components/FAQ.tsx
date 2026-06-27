import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { FAQ_DATA } from "../data";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-nova-dark/20 border-t border-white/5">
      {/* Visual background lights */}
      <div className="absolute top-[20%] right-[-10%] h-[400px] w-[400px] rounded-full bg-nova-secondary/5 blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header Block */}
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 text-nova-secondary font-mono text-xs tracking-wider uppercase bg-nova-secondary/10 px-3.5 py-1.5 rounded-full border border-nova-secondary/20">
            <HelpCircle size={14} />
            <span>INTELLIGENCE ARCHIVES</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-black text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Everything you need to know about the NovaPlay architecture, matchmaking algorithms, and subscription features.
          </p>
        </div>

        {/* Animated Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl glass-panel overflow-hidden border transition-all duration-300 ${
                  isOpen ? "border-nova-secondary/40 bg-nova-dark/60" : "border-white/5 hover:border-white/12"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors duration-200 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-white text-sm md:text-base tracking-wide">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-white/50 transition-transform duration-300 shrink-0 ml-4 ${
                      isOpen ? "rotate-180 text-nova-secondary" : ""
                    }`}
                  />
                </button>

                {/* Animated content expansion */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-60 border-t border-white/5 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 py-5 text-white/70 text-xs md:text-sm leading-relaxed text-left">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

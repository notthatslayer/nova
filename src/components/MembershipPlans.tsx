import { useState } from "react";
import { Check, Shield, Zap, Sparkles } from "lucide-react";
import { PRICING_PLANS } from "../data";

export default function MembershipPlans() {
  const [isYearly, setIsYearly] = useState(false);
  const [activePlanModal, setActivePlanModal] = useState<string | null>(null);

  const handleSelectPlan = (planName: string) => {
    setActivePlanModal(planName);
  };

  const closeModal = () => {
    setActivePlanModal(null);
  };

  return (
    <section id="plans" className="py-24 relative overflow-hidden bg-nova-dark/40 border-t border-white/5">
      {/* Decorative Blob */}
      <div className="absolute top-[40%] right-[-10%] h-[350px] w-[350px] rounded-full bg-nova-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Block */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 text-nova-primary font-mono text-xs tracking-wider uppercase bg-nova-primary/10 px-3.5 py-1.5 rounded-full border border-nova-primary/20">
            <Shield size={14} />
            <span>VIP MEMBERSHIP</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-black text-white tracking-tight">
            Membership Plans
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Choose your deployment layer and unlock unprecedented capabilities. Upgrade, cancel, or switch tier structures instantly.
          </p>

          {/* Toggle Button Container */}
          <div className="pt-6 flex items-center justify-center space-x-4">
            <span className={`text-xs font-mono uppercase tracking-wider transition-colors duration-300 ${!isYearly ? "text-nova-secondary font-bold" : "text-white/40"}`}>
              MONTHLY
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-8 bg-white/5 rounded-full border border-white/10 p-1 flex items-center transition-all duration-300 cursor-pointer"
              aria-label="Toggle annual billing"
            >
              <div
                className={`h-5 w-5 rounded-full bg-gradient-to-r from-nova-primary to-nova-secondary transition-all duration-300 ${
                  isYearly ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <span className={`text-xs font-mono uppercase tracking-wider transition-colors duration-300 ${isYearly ? "text-nova-secondary font-bold" : "text-white/40"}`}>
              YEARLY <span className="text-[9px] text-nova-pink bg-nova-pink/15 border border-nova-pink/20 px-1.5 py-0.5 rounded-md ml-1">SAVE 33%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan) => {
            const price = isYearly ? plan.priceYearly : plan.priceMonthly;
            const periodText = isYearly ? "/ year" : "/ month";
            const isPro = plan.name === "Pro";
            const isElite = plan.name === "Elite";

            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl glass-panel p-8 flex flex-col justify-between text-left hover-glow transition-all duration-300 ${
                  isPro
                    ? "border-2 border-nova-primary/50 bg-nova-dark/60 md:-translate-y-4"
                    : "border-white/5 bg-nova-dark/40"
                }`}
              >
                {/* Pop tag badge */}
                {plan.badge && (
                  <span
                    className={`absolute -top-3.5 left-6 text-[9px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full border shadow-lg ${
                      isPro
                        ? "bg-nova-primary text-white border-transparent shadow-nova-primary/25"
                        : "bg-nova-pink text-white border-transparent shadow-nova-pink/25"
                    }`}
                  >
                    {plan.badge}
                  </span>
                )}

                {/* Plan Metadata */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-display text-2xl font-bold text-white tracking-wide">
                      {plan.name}
                    </h3>
                    {isPro ? (
                      <Zap className="text-nova-primary animate-pulse" size={20} />
                    ) : isElite ? (
                      <Sparkles className="text-nova-pink animate-pulse" size={20} />
                    ) : (
                      <Shield className="text-white/40" size={20} />
                    )}
                  </div>

                  {/* Pricing tag */}
                  <div className="flex items-baseline mb-8">
                    <span className="font-display text-4xl font-black text-white tracking-tight">
                      ${price}
                    </span>
                    <span className="font-mono text-xs text-white/40 ml-2 tracking-wide">
                      {periodText}
                    </span>
                  </div>

                  {/* Divider line */}
                  <div className="h-[1px] bg-white/5 w-full mb-8" />

                  {/* Features list */}
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="h-5 w-5 rounded-full bg-white/5 border border-white/5 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="text-nova-secondary" size={12} />
                        </div>
                        <span className="text-white/75 text-sm font-normal">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Selection button */}
                <div className="pt-10">
                  <button
                    onClick={() => handleSelectPlan(plan.name)}
                    className={`w-full py-4 rounded-xl text-center text-sm font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                      isPro
                        ? "bg-gradient-to-r from-nova-primary to-nova-secondary hover:from-nova-pink hover:to-nova-primary text-white shadow-lg shadow-nova-primary/25 hover:shadow-nova-pink/20"
                        : "bg-white/5 border border-white/10 hover:border-nova-secondary hover:bg-nova-secondary/10 text-white"
                    }`}
                  >
                    Select {plan.name} Tier
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Success Modal Dialogue */}
      {activePlanModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-nova-dark/80 backdrop-blur-md">
          <div className="relative w-full max-w-md glass-panel-heavy p-8 rounded-2xl border border-white/15 text-center space-y-6">
            <div className="mx-auto h-16 w-16 rounded-full bg-nova-secondary/10 border border-nova-secondary/30 flex items-center justify-center text-nova-secondary animate-pulse">
              <Shield size={32} />
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-2xl font-black text-white">
                Initiating Authorization
              </h3>
              <p className="text-white/60 text-sm">
                Confirming secure access allocation for NovaPlay {activePlanModal} account setup. Premium features will bind instantly to your digital gateway.
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={closeModal}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-nova-primary to-nova-secondary text-white font-bold text-xs tracking-wider uppercase"
              >
                CONFIRM DEPLOYMENT
              </button>
              <button
                onClick={closeModal}
                className="w-full py-3 rounded-xl border border-white/10 text-white/50 hover:text-white hover:bg-white/5 text-xs font-bold tracking-wider uppercase transition-colors"
              >
                CANCEL SECURE REQUEST
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

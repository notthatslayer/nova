import { useState, FormEvent } from "react";
import { Mail, Send, CheckCircle } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Email address is required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please provide a valid email format.");
      return;
    }

    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <section className="py-24 relative overflow-hidden bg-nova-dark border-t border-white/5">
      {/* Aurora glow underneath */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[500px] rounded-full bg-gradient-to-r from-nova-primary/10 to-nova-secondary/10 blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="glass-panel-heavy p-8 md:p-14 rounded-3xl border border-white/10 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="mx-auto h-12 w-12 rounded-xl bg-nova-secondary/10 border border-nova-secondary/30 flex items-center justify-center text-nova-secondary">
              <Mail size={20} />
            </div>

            <div className="space-y-2">
              <h2 className="font-display text-2xl md:text-4xl font-black text-white tracking-tight">
                Subscribe to Transmission Logs
              </h2>
              <p className="text-white/60 text-sm md:text-base max-w-lg mx-auto">
                Stay updated with major patch logs, tournament announcements, and seasonal catalog additions. No spam, cancel anytime.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-6 bg-nova-secondary/10 border border-nova-secondary/30 rounded-xl max-w-md mx-auto flex flex-col items-center justify-center space-y-3">
                <CheckCircle className="text-nova-secondary animate-bounce" size={28} />
                <div>
                  <h4 className="font-display font-bold text-white text-md">SUBSCRIPTION SYNCHRONIZED</h4>
                  <p className="text-white/50 text-xs mt-1">
                    Your digital address is registered to secure transmission nodes. Watch your terminal inbox.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter terminal email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-12 text-white text-sm focus:border-nova-secondary focus:outline-none focus:ring-1 focus:ring-nova-secondary transition-all duration-300"
                  />
                  <Mail className="absolute left-4 top-4.5 text-white/40" size={16} />
                  
                  <button
                    type="submit"
                    className="absolute right-3 top-2.5 h-9 w-9 rounded-lg bg-gradient-to-r from-nova-primary to-nova-secondary hover:from-nova-pink hover:to-nova-primary text-white flex items-center justify-center cursor-pointer transition-colors duration-300"
                    aria-label="Subscribe"
                  >
                    <Send size={14} />
                  </button>
                </div>
                {error && (
                  <p className="text-nova-pink text-xs text-left pl-2 font-mono">
                    {error}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

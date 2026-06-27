import { motion } from "motion/react";
import { Play, ArrowRight, Gamepad2, ShieldAlert } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Animated Aurora Background Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Neon Purple Blur Blob */}
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -50, 30, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[15%] left-[10%] h-[350px] w-[350px] rounded-full bg-nova-primary/20 blur-[120px]"
        />
        {/* Neon Cyan Blur Blob */}
        <motion.div
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 40, -50, 0],
            scale: [1, 0.9, 1.15, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[20%] right-[15%] h-[400px] w-[400px] rounded-full bg-nova-secondary/15 blur-[130px]"
        />
        {/* Neon Pink Blur Blob */}
        <motion.div
          animate={{
            x: [0, 30, -30, 0],
            y: [0, 30, 30, 0],
            scale: [0.9, 1.1, 0.9, 0.9],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[40%] right-[30%] h-[300px] w-[300px] rounded-full bg-nova-pink/10 blur-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-8 text-left">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 glass-panel px-4 py-2 rounded-full text-xs font-mono tracking-widest text-nova-secondary uppercase border border-nova-secondary/30"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nova-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-nova-secondary"></span>
            </span>
            <span>NEXT GEN WEB STREAMING ENGINE</span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl xl:text-7xl font-black text-white leading-tight tracking-tight"
            >
              Step Into The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nova-primary via-nova-pink to-nova-secondary">
                Next Dimension
              </span>{" "}
              Of Play
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/60 text-lg md:text-xl max-w-xl font-normal leading-relaxed"
            >
              Unleash ultimate gaming performance directly in your browser. Experience zero lag, triple-A visuals, global tournaments, and an elite community without high-end hardware constraints.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            {/* Primary Button */}
            <button
              onClick={() => scrollToSection("games")}
              className="group relative flex items-center justify-center space-x-3 bg-gradient-to-r from-nova-primary to-nova-secondary hover:from-nova-pink hover:to-nova-primary text-white font-bold py-4 px-8 rounded-xl overflow-hidden shadow-lg shadow-nova-primary/25 cursor-pointer hover:shadow-nova-pink/20 transition-all duration-300"
            >
              <Gamepad2 className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>Explore Games</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            {/* Secondary Button */}
            <button
              onClick={() => scrollToSection("tournaments")}
              className="group flex items-center justify-center space-x-3 glass-panel hover:bg-white/10 text-white font-bold py-4 px-8 rounded-xl border border-white/10 transition-all duration-300 cursor-pointer"
            >
              <Play className="w-5 h-5 fill-white text-white group-hover:scale-110 transition-transform duration-300" />
              <span>Watch Live Tournaments</span>
            </button>
          </motion.div>

          {/* Quick Metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-3 gap-6 pt-6 border-t border-white/5 w-full max-w-lg"
          >
            <div>
              <p className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight">1.2M+</p>
              <p className="font-mono text-xxs text-white/40 tracking-wider uppercase mt-1">Active Players</p>
            </div>
            <div>
              <p className="font-display text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-nova-primary to-nova-pink tracking-tight">
                99.9%
              </p>
              <p className="font-mono text-xxs text-white/40 tracking-wider uppercase mt-1">Uptime SLA</p>
            </div>
            <div>
              <p className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight">$500K+</p>
              <p className="font-mono text-xxs text-white/40 tracking-wider uppercase mt-1">Monthly Prizes</p>
            </div>
          </motion.div>
        </div>

        {/* Cinematic Illustration Panel (CSS/SVG Animated Controller) */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          {/* Glow circle background */}
          <div className="absolute h-96 w-96 rounded-full bg-gradient-to-tr from-nova-primary/30 to-nova-secondary/30 blur-3xl animate-pulse-glow" />

          {/* Interactive Cinematic Controller Illustration */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative glass-panel-heavy p-8 rounded-3xl border border-white/15 w-full max-w-md animate-float flex flex-col items-center justify-center hover:border-nova-primary/30 transition-colors"
          >
            {/* Ambient controller decorative screen grids */}
            <div className="absolute top-4 left-4 font-mono text-[9px] text-white/20">SYS_V2.0.99</div>
            <div className="absolute top-4 right-4 font-mono text-[9px] text-nova-secondary/40">SYS_ONLINE</div>

            {/* SVG Controller Illustration */}
            <svg
              viewBox="0 0 200 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto max-w-[320px] filter drop-shadow-[0_15px_15px_rgba(139,92,246,0.3)]"
            >
              {/* Outer controller shadow overlay */}
              <defs>
                <linearGradient id="controllerGlow" x1="0" y1="0" x2="200" y2="120" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="50%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
                <radialGradient id="thumbstickGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#30304a" />
                  <stop offset="100%" stopColor="#12121e" />
                </radialGradient>
              </defs>

              {/* Controller Main Body */}
              <path
                d="M30,30 C30,20 60,15 100,15 C140,15 170,20 170,30 C170,40 185,90 175,105 C165,120 145,115 125,100 C110,90 90,90 75,100 C55,115 35,120 25,105 C15,90 30,40 30,30 Z"
                fill="#0c0c16"
                stroke="url(#controllerGlow)"
                strokeWidth="2"
              />

              {/* Internal Accent lines */}
              <path d="M50,35 Q100,45 150,35" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1.5" />
              <path d="M70,92 Q100,82 130,92" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />

              {/* D-Pad (Left hand) */}
              <g transform="translate(50, 48)">
                <path d="M-6,-18 H6 V-6 H18 V6 H6 V18 H-6 V6 H-18 V-6 H-6 Z" fill="#181829" stroke="#8b5cf6" strokeWidth="1" />
                {/* Arrow marks */}
                <path d="M0,-14 L-3,-10 H3 Z" fill="#8b5cf6" />
                <path d="M14,0 L10,3 V-3 Z" fill="#8b5cf6" />
                <path d="M0,14 L-3,10 H3 Z" fill="#8b5cf6" />
                <path d="M-14,0 L-10,3 V-3 Z" fill="#8b5cf6" />
              </g>

              {/* Action Buttons (Right hand) */}
              <g transform="translate(150, 48)">
                {/* Y button */}
                <circle cx="0" cy="-14" r="5.5" fill="#181829" stroke="#ec4899" strokeWidth="1" />
                <text x="0" y="-10.5" fill="#ec4899" fontSize="9" fontFamily="var(--font-display)" fontWeight="bold" textAnchor="middle">Y</text>

                {/* B button */}
                <circle cx="14" cy="0" r="5.5" fill="#181829" stroke="#ec4899" strokeWidth="1" />
                <text x="14" y="3.5" fill="#ec4899" fontSize="9" fontFamily="var(--font-display)" fontWeight="bold" textAnchor="middle">B</text>

                {/* A button */}
                <circle cx="0" cy="14" r="5.5" fill="#181829" stroke="#ec4899" strokeWidth="1" />
                <text x="0" y="17.5" fill="#ec4899" fontSize="9" fontFamily="var(--font-display)" fontWeight="bold" textAnchor="middle">A</text>

                {/* X button */}
                <circle cx="-14" cy="0" r="5.5" fill="#181829" stroke="#ec4899" strokeWidth="1" />
                <text x="-14" y="3.5" fill="#ec4899" fontSize="9" fontFamily="var(--font-display)" fontWeight="bold" textAnchor="middle">X</text>
              </g>

              {/* Analog Sticks */}
              {/* Left Stick */}
              <g transform="translate(80, 72)">
                <circle cx="0" cy="0" r="14" fill="url(#thumbstickGrad)" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
                <motion.circle
                  cx="-1"
                  cy="-2"
                  r="9"
                  fill="#1b1b2f"
                  stroke="#06b6d4"
                  strokeWidth="1"
                  animate={{
                    cx: [-1, 2, -3, 1, -1],
                    cy: [-2, 1, -1, -3, -2],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </g>

              {/* Right Stick */}
              <g transform="translate(120, 72)">
                <circle cx="0" cy="0" r="14" fill="url(#thumbstickGrad)" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
                <motion.circle
                  cx="1"
                  cy="2"
                  r="9"
                  fill="#1b1b2f"
                  stroke="#06b6d4"
                  strokeWidth="1"
                  animate={{
                    cx: [1, -2, 2, -1, 1],
                    cy: [2, -2, -1, 2, 2],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </g>

              {/* Center Menu Buttons */}
              <rect x="85" y="42" width="10" height="3" rx="1.5" fill="#30304a" />
              <rect x="105" y="42" width="10" height="3" rx="1.5" fill="#30304a" />

              {/* Center Glowing Logo Icon */}
              <circle cx="100" cy="54" r="7" fill="#0c0c16" stroke="#06b6d4" strokeWidth="1" />
              <path d="M98,52 L102,52 L100,57 Z" fill="#06b6d4" />
            </svg>

            {/* Interface overlays */}
            <div className="mt-6 flex items-center justify-between w-full border-t border-white/5 pt-4">
              <div className="flex items-center space-x-2">
                <span className="flex h-1.5 w-1.5 rounded-full bg-nova-secondary" />
                <span className="font-mono text-[10px] text-white/50">LATENCY 4MS</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-mono text-[10px] text-white/50">MATCH STATUS: QUEUED</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          id="global-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-nova-dark"
        >
          {/* Neon Background Blobs */}
          <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-nova-primary/10 blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-nova-secondary/10 blur-[100px]" />

          <div className="relative flex flex-col items-center">
            {/* Logo Display */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-3 mb-6"
            >
              <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-nova-primary to-nova-secondary p-[1px]">
                <div className="flex h-full w-full items-center justify-center rounded-xl bg-nova-dark">
                  <span className="font-display text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-nova-primary to-nova-secondary">
                    N
                  </span>
                </div>
              </div>
              <span className="font-display text-3xl font-bold tracking-wider text-white">
                NOVA<span className="text-nova-secondary">PLAY</span>
              </span>
            </motion.div>

            {/* Glowing Progress Track */}
            <div className="w-64 h-[3px] bg-white/5 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-nova-primary to-nova-secondary"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
              <div 
                className="absolute top-0 h-full w-8 bg-white/20 blur-sm -translate-x-1/2"
                style={{ left: `${progress}%` }}
              />
            </div>

            {/* Percentage Text */}
            <motion.span
              key={progress}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-xs text-white/40 mt-3 tracking-widest"
            >
              INITIALIZING ENGINE {progress}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

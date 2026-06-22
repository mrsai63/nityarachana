import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function IntroLoader() {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (sessionStorage.getItem("nrc_intro_seen")) { setShow(false); return; }
    const start = Date.now();
    const dur = 4200;
    const id = setInterval(() => {
      const p = Math.min(1, (Date.now() - start) / dur);
      setProgress(p);
      if (p >= 1) {
        clearInterval(id);
        sessionStorage.setItem("nrc_intro_seen", "1");
        setTimeout(() => setShow(false), 350);
      }
    }, 30);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, filter: "blur(6px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-gradient-ink text-white overflow-hidden grid place-items-center"
        >
          {/* grid */}
          <div className="absolute inset-0 grid-bg text-white/20" />
          {/* spark particles */}
          {Array.from({ length: 18 }).map((_, i) => (
            <span
              key={i}
              className="absolute h-1 w-1 rounded-full bg-secondary"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${20 + Math.random() * 60}%`,
                animation: `spark ${1 + Math.random() * 1.4}s ease-out ${Math.random() * 2}s infinite`,
              }}
            />
          ))}
          {/* crane SVG */}
          <div className="relative w-[min(560px,90vw)] aspect-[5/4]">
            <svg viewBox="0 0 500 400" className="absolute inset-0 w-full h-full" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
              {/* mast */}
              <motion.line x1="250" y1="380" x2="250" y2="120" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }} />
              {/* arm */}
              <motion.line x1="120" y1="120" x2="420" y2="120" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.9, delay: 0.6 }} />
              {/* triangle */}
              <motion.path d="M 250 60 L 200 120 L 300 120 Z" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.7, delay: 1.0 }} />
              {/* cable */}
              <motion.line x1="370" y1="120" x2="370" y2="220" stroke="#FF6A00" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 1.4 }} />
              {/* hook block lifting logo */}
              <motion.rect x="350" y="220" width="40" height="20" stroke="#FF6A00" initial={{ y: 320, opacity: 0 }} animate={{ y: 220, opacity: 1 }} transition={{ duration: 1, delay: 1.6 }} />
              {/* blueprint lines bottom */}
              <motion.line x1="60" y1="350" x2="440" y2="350" stroke="#FF6A00" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 1.0 }} />
              <motion.line x1="80" y1="370" x2="420" y2="370" stroke="white" strokeOpacity="0.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 1.3 }} />
            </svg>

            {/* Logo reveal */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 2.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 grid place-items-center"
            >
              <div className="text-center">
                <div className="inline-flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-gradient-accent grid place-items-center shadow-glow">
                    <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" stroke="white" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round">
                      <path d="M4 28 L16 6 L28 28 Z" />
                      <path d="M10 28 V18 H22 V28" />
                    </svg>
                  </div>
                </div>
                <motion.h1
                  initial={{ opacity: 0, letterSpacing: "0.4em" }}
                  animate={{ opacity: 1, letterSpacing: "0.08em" }}
                  transition={{ duration: 1, delay: 2.7 }}
                  className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-wider"
                  style={{ fontFamily: "Sora, sans-serif" }}
                >
                  NITHYA RACHANA
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.0, duration: 0.6 }}
                  className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-white/60 mt-2"
                >
                  Infrastructure &amp; Constructions
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3.4, duration: 0.6 }}
                  className="mt-5 text-sm sm:text-base text-secondary font-medium"
                >
                  Building The Future With Excellence
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* progress bar */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[min(360px,80vw)]">
            <div className="h-[2px] bg-white/15 overflow-hidden rounded-full">
              <div className="h-full bg-gradient-accent transition-all" style={{ width: `${progress * 100}%` }} />
            </div>
            <div className="mt-2 text-[10px] tracking-[0.3em] text-white/50 text-center">
              ASSEMBLING · {Math.round(progress * 100)}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
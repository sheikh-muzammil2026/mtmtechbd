"use client";

// Deterministic particle coordinates for 100% hydration safety & 60fps GPU animation
const STAR_POOL = [
  { top: "6%", left: "12%", size: 3, color: "#FFFFFF", glow: "0 0 6px rgba(255,255,255,0.85)", duration: "3.2s", delay: "0.2s" },
  { top: "9%", left: "34%", size: 2, color: "#22D3EE", glow: "0 0 8px rgba(34,211,238,0.8)", duration: "2.5s", delay: "1.1s" },
  { top: "14%", left: "68%", size: 3, color: "#FBBF24", glow: "0 0 8px rgba(251,191,36,0.8)", duration: "4.1s", delay: "0.5s" },
  { top: "8%", left: "88%", size: 4, color: "#34D399", glow: "0 0 9px rgba(52,211,153,0.85)", duration: "3.7s", delay: "1.8s" },
  { top: "18%", left: "22%", size: 2, color: "#FFFFFF", glow: "0 0 6px rgba(255,255,255,0.85)", duration: "3.4s", delay: "0.9s" },
  { top: "22%", left: "48%", size: 3, color: "#22D3EE", glow: "0 0 8px rgba(34,211,238,0.8)", duration: "2.8s", delay: "2.1s" },
  { top: "16%", left: "80%", size: 2, color: "#FBBF24", glow: "0 0 8px rgba(251,191,36,0.8)", duration: "3.9s", delay: "1.4s" },
  { top: "26%", left: "9%", size: 3, color: "#34D399", glow: "0 0 8px rgba(52,211,153,0.8)", duration: "3.0s", delay: "0.3s" },
  { top: "28%", left: "62%", size: 2, color: "#FFFFFF", glow: "0 0 6px rgba(255,255,255,0.85)", duration: "4.3s", delay: "2.4s" },
  { top: "33%", left: "28%", size: 4, color: "#22D3EE", glow: "0 0 9px rgba(34,211,238,0.85)", duration: "2.4s", delay: "0.7s" },
  { top: "31%", left: "92%", size: 3, color: "#FBBF24", glow: "0 0 8px rgba(251,191,36,0.8)", duration: "3.6s", delay: "1.9s" },
  { top: "38%", left: "4%", size: 2, color: "#FFFFFF", glow: "0 0 6px rgba(255,255,255,0.85)", duration: "3.1s", delay: "1.3s" },
  { top: "42%", left: "44%", size: 3, color: "#34D399", glow: "0 0 8px rgba(52,211,153,0.8)", duration: "4.0s", delay: "0.8s" },
  { top: "40%", left: "74%", size: 2, color: "#22D3EE", glow: "0 0 8px rgba(34,211,238,0.8)", duration: "2.9s", delay: "2.6s" },
  { top: "46%", left: "18%", size: 3, color: "#FBBF24", glow: "0 0 8px rgba(251,191,36,0.8)", duration: "3.5s", delay: "0.4s" },
  { top: "49%", left: "85%", size: 4, color: "#FFFFFF", glow: "0 0 9px rgba(255,255,255,0.9)", duration: "4.4s", delay: "1.6s" },
  { top: "53%", left: "32%", size: 2, color: "#34D399", glow: "0 0 8px rgba(52,211,153,0.8)", duration: "2.7s", delay: "2.2s" },
  { top: "56%", left: "58%", size: 3, color: "#22D3EE", glow: "0 0 8px rgba(34,211,238,0.8)", duration: "3.8s", delay: "0.1s" },
  { top: "52%", left: "96%", size: 2, color: "#FBBF24", glow: "0 0 8px rgba(251,191,36,0.8)", duration: "3.3s", delay: "2.8s" },
  { top: "61%", left: "14%", size: 3, color: "#FFFFFF", glow: "0 0 6px rgba(255,255,255,0.85)", duration: "4.2s", delay: "1.0s" },
  { top: "64%", left: "41%", size: 2, color: "#22D3EE", glow: "0 0 8px rgba(34,211,238,0.8)", duration: "2.6s", delay: "1.7s" },
  { top: "59%", left: "78%", size: 4, color: "#34D399", glow: "0 0 9px rgba(52,211,153,0.85)", duration: "3.6s", delay: "0.6s" },
  { top: "68%", left: "24%", size: 3, color: "#FBBF24", glow: "0 0 8px rgba(251,191,36,0.8)", duration: "4.5s", delay: "2.0s" },
  { top: "66%", left: "89%", size: 2, color: "#FFFFFF", glow: "0 0 6px rgba(255,255,255,0.85)", duration: "3.0s", delay: "0.8s" },
  { top: "72%", left: "6%", size: 3, color: "#22D3EE", glow: "0 0 8px rgba(34,211,238,0.8)", duration: "3.7s", delay: "1.5s" },
  { top: "74%", left: "52%", size: 2, color: "#FFFFFF", glow: "0 0 6px rgba(255,255,255,0.85)", duration: "2.8s", delay: "2.7s" },
  { top: "71%", left: "69%", size: 3, color: "#34D399", glow: "0 0 8px rgba(52,211,153,0.8)", duration: "4.1s", delay: "0.3s" },
  { top: "78%", left: "36%", size: 4, color: "#FBBF24", glow: "0 0 9px rgba(251,191,36,0.85)", duration: "3.3s", delay: "1.2s" },
  { top: "82%", left: "82%", size: 2, color: "#22D3EE", glow: "0 0 8px rgba(34,211,238,0.8)", duration: "2.9s", delay: "2.3s" },
  { top: "79%", left: "16%", size: 3, color: "#FFFFFF", glow: "0 0 6px rgba(255,255,255,0.85)", duration: "4.6s", delay: "0.5s" },
  { top: "85%", left: "64%", size: 2, color: "#34D399", glow: "0 0 8px rgba(52,211,153,0.8)", duration: "3.4s", delay: "1.8s" },
  { top: "88%", left: "27%", size: 3, color: "#FBBF24", glow: "0 0 8px rgba(251,191,36,0.8)", duration: "2.5s", delay: "0.9s" },
  { top: "86%", left: "94%", size: 3, color: "#FFFFFF", glow: "0 0 6px rgba(255,255,255,0.85)", duration: "4.0s", delay: "2.5s" },
  { top: "91%", left: "10%", size: 2, color: "#22D3EE", glow: "0 0 8px rgba(34,211,238,0.8)", duration: "3.2s", delay: "1.4s" },
  { top: "93%", left: "47%", size: 3, color: "#FFFFFF", glow: "0 0 6px rgba(255,255,255,0.85)", duration: "3.8s", delay: "0.4s" },
  { top: "89%", left: "76%", size: 4, color: "#34D399", glow: "0 0 9px rgba(52,211,153,0.85)", duration: "4.3s", delay: "2.1s" },
  { top: "95%", left: "84%", size: 2, color: "#FBBF24", glow: "0 0 8px rgba(251,191,36,0.8)", duration: "2.7s", delay: "1.0s" },
  { top: "11%", left: "54%", size: 2, color: "#FFFFFF", glow: "0 0 6px rgba(255,255,255,0.85)", duration: "3.5s", delay: "1.6s" },
  { top: "24%", left: "72%", size: 3, color: "#22D3EE", glow: "0 0 8px rgba(34,211,238,0.8)", duration: "4.2s", delay: "0.7s" },
  { top: "36%", left: "15%", size: 2, color: "#34D399", glow: "0 0 8px rgba(52,211,153,0.8)", duration: "3.1s", delay: "2.9s" },
  { top: "63%", left: "95%", size: 3, color: "#FBBF24", glow: "0 0 8px rgba(251,191,36,0.8)", duration: "3.6s", delay: "0.2s" },
  { top: "45%", left: "37%", size: 2, color: "#FFFFFF", glow: "0 0 6px rgba(255,255,255,0.85)", duration: "2.9s", delay: "1.9s" },
];

export default function StarfieldBackground({
  variant = "section", // 'hero' | 'section' | 'compact'
  glowPosition = "both", // 'both' | 'left' | 'right' | 'center' | 'none'
  showGrid = true,
  className = "",
}) {
  // Select balanced star density to keep GPU performance light at 60fps
  const starCount =
    variant === "hero" ? 42 : variant === "compact" ? 14 : 22;
  const activeStars = STAR_POOL.slice(0, starCount);

  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Ambient Radial Aurora Glows */}
      {(glowPosition === "right" || glowPosition === "both") && (
        <div className="absolute top-1/4 -right-28 w-[420px] h-[420px] bg-[#0D9488]/15 rounded-full blur-[130px]" />
      )}

      {(glowPosition === "left" || glowPosition === "both") && (
        <div className="absolute top-1/4 -left-28 w-[440px] h-[440px] bg-[#1E3A8A]/20 rounded-full blur-[140px]" />
      )}

      {(glowPosition === "center" || variant === "hero") && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-gradient-to-b from-[#00E5FF]/10 to-transparent blur-[140px] rounded-full" />
      )}

      {/* Subtle Blueprint Architectural Grid with Smooth Mask Fade */}
      {showGrid && (
        <div
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255, 255, 255, 0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.045) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 85% 70% at 50% 30%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 85% 70% at 50% 30%, black 40%, transparent 100%)",
          }}
        />
      )}

      {/* Continuously Twinkling Multi-Color Starfield Dots */}
      {activeStars.map((star, idx) => (
        <span
          key={idx}
          className="absolute rounded-full animate-hero-star"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            boxShadow: star.glow,
            "--twinkle-duration": star.duration,
            "--twinkle-delay": star.delay,
          }}
        />
      ))}
    </div>
  );
}

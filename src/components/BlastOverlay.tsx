import { useEffect, useState } from "react";

interface Props {
  show: boolean;
  onDone: () => void;
}

const BlastOverlay = ({ show, onDone }: Props) => {
  const [phase, setPhase] = useState(0);
  const [cracks, setCracks] = useState<Array<{ x: number; y: number; angle: number; len: number }>>([]);
  const [particles, setParticles] = useState<Array<{ x: number; y: number; vx: number; vy: number; size: number; color: string }>>([]);

  useEffect(() => {
    if (!show) {
      setPhase(0);
      return;
    }
    // Phase 1: Screen shake + flash
    setPhase(1);
    document.body.classList.add("blast-shake");

    // Generate cracks
    const newCracks = Array.from({ length: 20 }, () => ({
      x: 50 + (Math.random() - 0.5) * 40,
      y: 50 + (Math.random() - 0.5) * 40,
      angle: Math.random() * 360,
      len: 30 + Math.random() * 70,
    }));
    setCracks(newCracks);

    // Generate debris particles
    const newParticles = Array.from({ length: 40 }, () => ({
      x: 50 + (Math.random() - 0.5) * 20,
      y: 50 + (Math.random() - 0.5) * 20,
      vx: (Math.random() - 0.5) * 200,
      vy: (Math.random() - 0.5) * 200,
      size: 4 + Math.random() * 20,
      color: ["#ff2d2d", "#ffe600", "#ff6600", "#fff", "#333"][Math.floor(Math.random() * 5)],
    }));
    setParticles(newParticles);

    // Phase 2: Full explosion
    setTimeout(() => setPhase(2), 300);

    // Phase 3: Smoke
    setTimeout(() => setPhase(3), 1200);

    // End
    setTimeout(() => {
      document.body.classList.remove("blast-shake");
      setPhase(0);
      onDone();
    }, 3500);
  }, [show, onDone]);

  if (!show && phase === 0) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden" style={{ background: "rgba(0,0,0,0.95)" }}>
      {/* Flash */}
      {phase === 1 && (
        <div className="absolute inset-0 bg-cyellow opacity-80" style={{ animation: "themeFlash 0.3s ease forwards" }} />
      )}

      {/* Expanding blast circle */}
      <div
        className="absolute rounded-full"
        style={{
          width: 100,
          height: 100,
          background: "radial-gradient(circle, #ffe600 0%, #ff6600 30%, #ff2d2d 60%, transparent 70%)",
          animation: phase >= 1 ? "blastExpand 1.5s ease-out forwards" : undefined,
          left: "calc(50% - 50px)",
          top: "calc(50% - 50px)",
        }}
      />

      {/* Cracks */}
      {phase >= 1 && (
        <svg className="absolute inset-0 w-full h-full" style={{ animation: "crackSpread 0.5s ease-out forwards" }}>
          {cracks.map((c, i) => {
            const rad = (c.angle * Math.PI) / 180;
            const x1 = `${c.x}%`;
            const y1 = `${c.y}%`;
            const x2 = `${c.x + Math.cos(rad) * c.len * 0.3}%`;
            const y2 = `${c.y + Math.sin(rad) * c.len * 0.3}%`;
            return (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#fff" strokeWidth={1 + Math.random() * 2} opacity={0.6} />
            );
          })}
        </svg>
      )}

      {/* Debris particles */}
      {phase >= 2 &&
        particles.map((p, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              background: p.color,
              transform: `translate(${p.vx}px, ${p.vy}px) rotate(${Math.random() * 360}deg)`,
              transition: "transform 1.5s ease-out, opacity 1.5s",
              opacity: phase >= 3 ? 0 : 1,
            }}
          />
        ))}

      {/* Smoke puffs */}
      {phase >= 2 &&
        Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`smoke-${i}`}
            className="absolute rounded-full"
            style={{
              width: 60 + Math.random() * 80,
              height: 60 + Math.random() * 80,
              background: `radial-gradient(circle, rgba(100,100,100,0.4), transparent)`,
              left: `${30 + Math.random() * 40}%`,
              top: `${30 + Math.random() * 40}%`,
              animation: `smokeRise ${2 + Math.random()}s ease-out forwards`,
              animationDelay: `${Math.random() * 0.5}s`,
            }}
          />
        ))}

      {/* Center text */}
      {phase >= 2 && (
        <div className="relative z-10 text-center">
          <div className="text-[8rem] mb-4" style={{ animation: "blastB 0.3s ease-in-out infinite alternate" }}>
            💥
          </div>
          <div className="font-display text-4xl tracking-[4px] text-cred mb-3">
            *DEVAS SSERGORP
          </div>
          <div className="text-[0.65rem] text-muted-foreground tracking-[2px]">
            dearelc ataD llA*
          </div>
          <div className="font-display text-xl text-cyellow tracking-[3px] mt-4" style={{ animation: "warnFlash 0.5s infinite" }}>
            !DEYORTSED ETISBEW
          </div>
        </div>
      )}

      {/* Fire edges */}
      {phase >= 2 && (
        <>
          <div
            className="absolute bottom-0 left-0 right-0 h-32"
            style={{
              background: "linear-gradient(to top, rgba(255,45,45,0.6), rgba(255,102,0,0.3), transparent)",
              animation: "fireFlicker 0.3s ease-in-out infinite",
            }}
          />
          <div
            className="absolute top-0 left-0 right-0 h-32"
            style={{
              background: "linear-gradient(to bottom, rgba(255,45,45,0.4), rgba(255,102,0,0.2), transparent)",
              animation: "fireFlicker 0.4s ease-in-out infinite",
            }}
          />
        </>
      )}
    </div>
  );
};

export default BlastOverlay;

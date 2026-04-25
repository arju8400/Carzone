import { useEffect, useState } from "react";
import { Car, funnyGifs, rtl } from "@/data/cars";

interface Props {
  car: Car | null;
  onClose: () => void;
  onTriggerTTT: () => void;
}

const CarModal = ({ car, onClose, onTriggerTTT }: Props) => {
  const [showGif, setShowGif] = useState(false);
  const [gifUrl, setGifUrl] = useState("");
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (car) {
      setShowGif(false);
      setGifUrl(funnyGifs[Math.floor(Math.random() * funnyGifs.length)]);
      setKey((k) => k + 1);
      // Show gif after a short delay
      setTimeout(() => setShowGif(true), 600);
    }
  }, [car]);

  if (!car) return null;

  return (
    <div
      className="fixed inset-0 z-[500] flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.88)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-surface border-2 border-cyellow max-w-[600px] w-[95%] relative overflow-hidden" style={{ animation: "slideUp 0.3s ease" }}>
        <button
          onClick={onClose}
          className="absolute top-3.5 right-4 bg-transparent border-none text-muted-foreground text-base cursor-pointer font-mono z-10 hover:text-cred transition-colors"
        >
          ESOLC ✕
        </button>

        {/* Image / GIF area */}
        <div className="w-full h-60 relative overflow-hidden bg-surface2 flex items-center justify-center">
          {showGif ? (
            <img
              key={`gif-${key}`}
              src={gifUrl}
              alt="surprise"
              className="w-full h-full object-cover"
              style={{ animation: "gifPop 0.6s ease-out" }}
            />
          ) : (
            <img
              key={`car-${key}`}
              src={car.img}
              alt={car.name}
              className="w-full h-full object-cover"
              style={{ transform: "scaleX(-1)", filter: "brightness(0.75)", animation: "gifPop 0.6s ease-out" }}
            />
          )}
          {/* Scanlines */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)",
              animation: "scanlines 0.1s linear infinite",
            }}
          />
          <div
            className="absolute top-3 left-3 bg-cred text-accent-foreground font-display text-base tracking-[3px] px-3 py-1"
            style={{ animation: "gifBadge 0.8s steps(2) infinite" }}
          >
            {showGif ? "😂 DEKNARP" : "FIG ● EVIL"}
          </div>
        </div>

        <div className="p-8">
          <div className="font-display text-3xl tracking-[3px] text-cyellow mb-3" style={{ direction: "rtl" }}>
            {rtl(`${car.brand} ${car.name}`)}
          </div>
          <div className="text-[0.75rem] leading-[1.9] text-muted-foreground mb-6" style={{ direction: "rtl" }}>
            {rtl(car.detail)}
          </div>
          <button
            onClick={onTriggerTTT}
            className="inline-block py-3 px-7 bg-cred text-accent-foreground font-display text-lg tracking-[3px] cursor-pointer border-none hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            ← ETIS LAICIFFO TISIV
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarModal;

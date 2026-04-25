import { useState } from "react";
import { cars, rtl, funnyGifs } from "@/data/cars";
import CarModal from "./CarModal";
import BlastOverlay from "./BlastOverlay";
import Badge from "react-bootstrap/Badge";
import Spinner from "react-bootstrap/Spinner";
import Breadcrumb from "react-bootstrap/Breadcrumb";

interface Props {
  onTriggerTTT: () => void;
  onTriggerWhack: () => void;
}

const MainPage = ({ onTriggerTTT, onTriggerWhack }: Props) => {
  const [selectedCar, setSelectedCar] = useState<number | null>(null);
  const [showBlast, setShowBlast] = useState(false);
  const [clickedCards, setClickedCards] = useState<Set<number>>(new Set());
  const [gifUrls, setGifUrls] = useState<Record<number, string>>({});

  const handleCardClick = (i: number) => {
    if (!clickedCards.has(i)) {
      const newClicked = new Set(clickedCards);
      newClicked.add(i);
      setClickedCards(newClicked);
      setGifUrls((prev) => ({
        ...prev,
        [i]: funnyGifs[Math.floor(Math.random() * funnyGifs.length)],
      }));
      // After showing gif for 2s, open modal
      setTimeout(() => {
        setSelectedCar(i);
      }, 2000);
    } else {
      setSelectedCar(i);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onTriggerWhack();
  };

  return (
    <div style={{ transform: "rotate(180deg)", transformOrigin: "center center" }}>
      {/* Warning banner */}
      <div className="bg-cred text-accent-foreground text-center py-2.5 text-[0.65rem] tracking-[3px]" style={{ direction: "rtl", animation: "warnFlash 1.5s ease-in-out infinite" }}>
        tfel ot thgir daer si txeT — NWOD EDISPU SI ETIS ⚠
      </div>

      {/* Nav */}
      <nav className="flex items-center justify-between py-5 px-12 border-b border-border sticky top-0 bg-background/80 backdrop-blur-xl z-[100]" style={{ direction: "rtl" }}>
        <div className="font-display text-3xl tracking-[4px] text-cyellow">
          RAC<span className="text-cred">ENOZ</span>
        </div>
        <div className="flex items-center gap-6">
          <ul className="flex gap-8 list-none">
            <li><a onClick={onTriggerTTT} className="text-[0.7rem] tracking-[2px] uppercase text-muted-foreground cursor-pointer hover:text-cyellow transition-colors">GOLATAC</a></li>
            <li><a onClick={onTriggerTTT} className="text-[0.7rem] tracking-[2px] uppercase text-muted-foreground cursor-pointer hover:text-cyellow transition-colors">ERAPMOC</a></li>
            <li><a onClick={onTriggerTTT} className="text-[0.7rem] tracking-[2px] uppercase text-muted-foreground cursor-pointer hover:text-cyellow transition-colors">SLAED</a></li>
          </ul>
          {/* Search button */}
          <button
            onClick={handleSearch}
            className="bg-surface border border-input text-muted-foreground font-mono text-[0.7rem] tracking-[2px] py-2 px-4 cursor-pointer hover:border-cyellow hover:text-cyellow transition-colors flex items-center gap-2"
          >
            🔍 HCRAES
          </button>
        </div>
      </nav>

      {/* Bootstrap Breadcrumb */}
      <div className="px-12 py-3 max-w-[1200px] mx-auto" style={{ direction: "rtl" }}>
        <Breadcrumb>
          <Breadcrumb.Item active>emoH</Breadcrumb.Item>
          <Breadcrumb.Item href="#">moorwohS</Breadcrumb.Item>
          <Breadcrumb.Item href="#">soahC</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      {/* Hero */}
      <section className="py-20 px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-[1200px] mx-auto">
        <div>
          <div className="text-[0.65rem] tracking-[4px] uppercase text-cred mb-4" style={{ direction: "rtl" }}>
            ayerhS &amp; ujrA · 10 maeT · egatS noitaedI //
          </div>
          <h1 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.95] tracking-[2px] text-foreground mb-6" style={{ direction: "rtl" }}>
            EDIR <span className="text-cyellow">TCEFREP</span> RUOY<br />DNIF
          </h1>
          <p className="text-[0.78rem] leading-[1.9] text-muted-foreground max-w-[380px] mb-9" style={{ direction: "rtl" }}>
            .yltcepxenu tcerider yam skniL .spitregniF ruoy ta thgir — liated yreve ,ceps yrevE
          </p>
          <div className="flex gap-3 items-center">
            <button
              onClick={() => document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-block py-4 px-9 bg-primary text-primary-foreground font-display text-xl tracking-[3px] cursor-pointer border-none hover:bg-cred hover:text-accent-foreground transition-all hover:-translate-y-0.5"
            >
              SRAC EROLPXE
            </button>
            <Spinner animation="grow" variant="warning" size="sm" />
          </div>
        </div>
        <div className="relative h-[300px] flex items-center justify-center overflow-hidden border border-border bg-surface">
          <img
            src="https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&q=80"
            alt="Ferrari"
            className="w-full h-full object-cover block"
            style={{ transform: "scaleX(-1)", filter: "brightness(0.88)" }}
          />
          <div className="absolute bottom-3 left-3 bg-cred py-1.5 px-3.5 font-display text-sm tracking-[2px] text-accent-foreground" style={{ animation: "pulse 2s ease-in-out infinite" }}>
            MOORWOHS EVIL
          </div>
          <Badge bg="warning" className="absolute top-3 right-3 font-mono">WEN</Badge>
        </div>
      </section>

      {/* Section header */}
      <div className="px-12 mt-16 mb-10 max-w-[1200px] mx-auto flex items-baseline justify-between" id="catalog" style={{ direction: "rtl" }}>
        <h2 className="font-display text-5xl tracking-[4px]">MOORWOHS</h2>
        <span className="text-[0.65rem] tracking-[3px] text-muted-foreground uppercase">
          ELBALIAVA SELCIHEV {cars.length}
        </span>
      </div>

      {/* Cars grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 px-12 pb-20 max-w-[1200px] mx-auto">
        {cars.map((car, i) => (
          <div
            key={i}
            onClick={() => handleCardClick(i)}
            className="bg-surface relative overflow-hidden cursor-pointer border border-transparent hover:bg-surface2 hover:border-cyellow transition-all group"
          >
            <div className="absolute top-3.5 left-3.5 bg-primary text-primary-foreground text-[0.6rem] tracking-[2px] py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity z-[2]" style={{ direction: "rtl" }}>
              LIATED WEIV
            </div>
            <div className="w-full h-[210px] overflow-hidden bg-surface2 relative">
              {clickedCards.has(i) ? (
                <img
                  src={gifUrls[i]}
                  alt="surprise gif"
                  className="w-full h-full object-cover block"
                  style={{ animation: "gifPop 0.6s ease-out" }}
                />
              ) : (
                <img
                  src={car.img}
                  alt={car.name}
                  className="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-400"
                  style={{ transform: "scaleX(-1)" }}
                  loading="lazy"
                />
              )}
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="text-[0.6rem] tracking-[3px] uppercase text-cred" style={{ direction: "rtl" }}>{rtl(car.brand)}</div>
                {i === 0 && <Badge bg="danger" className="text-[0.5rem]">GNIDNERT</Badge>}
                {i === 7 && <Badge bg="info" className="text-[0.5rem]">EVISULCXE</Badge>}
              </div>
              <div className="font-display text-[1.8rem] tracking-[2px] mb-1" style={{ direction: "rtl" }}>{rtl(car.name)}</div>
              <div className="text-[0.62rem] text-muted-foreground tracking-[2px] mb-4" style={{ direction: "rtl" }}>{rtl(car.model)}</div>
              <div className="text-[0.73rem] leading-[1.8] text-muted-foreground mb-5" style={{ direction: "rtl" }}>{rtl(car.desc)}</div>
              <div className="grid grid-cols-2 gap-2.5 mb-5 p-3.5 bg-background border border-border">
                {Object.entries(car.specs).map(([k, v]) => (
                  <div key={k} style={{ direction: "rtl" }}>
                    <div className="text-[0.55rem] tracking-[2px] uppercase text-muted-foreground">{k}</div>
                    <div className="font-display text-lg text-cyellow">{v}</div>
                  </div>
                ))}
              </div>
              <div className="font-display text-2xl tracking-[2px] flex gap-2.5 items-baseline" style={{ direction: "rtl" }}>
                <span>{rtl(car.price)}</span>
                <span className="font-mono text-[0.58rem] text-muted-foreground uppercase">moorwohS .xorppA</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-12 flex items-center justify-between max-w-[1200px] mx-auto" style={{ direction: "rtl" }}>
        <div className="font-display text-2xl tracking-[3px] text-muted-foreground">™ENOЗRAC</div>
        <div className="text-[0.6rem] tracking-[2px] text-muted-foreground">10 MAET — ESU LANOITACUDE ROF — 5202 ©</div>
      </footer>

      {/* Save button */}
      <div className="fixed bottom-6 right-6 z-[200]">
        <button
          onClick={() => setShowBlast(true)}
          className="bg-surface border border-input text-muted-foreground font-mono text-[0.65rem] tracking-[2px] py-3 px-5 cursor-pointer uppercase hover:border-cyellow hover:text-cyellow transition-colors"
        >
          SSERGORP EVAS 💾
        </button>
      </div>

      {/* Modal */}
      {selectedCar !== null && (
        <CarModal
          car={cars[selectedCar]}
          onClose={() => setSelectedCar(null)}
          onTriggerTTT={onTriggerTTT}
        />
      )}

      {/* Blast */}
      <BlastOverlay show={showBlast} onDone={() => setShowBlast(false)} />
    </div>
  );
};

export default MainPage;

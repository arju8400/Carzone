import { useState, useRef, useCallback } from "react";
import Badge from "react-bootstrap/Badge";
import Alert from "react-bootstrap/Alert";

interface Props {
  onLogin: () => void;
}

const LoginPage = ({ onLogin }: Props) => {
  const [hoverCount, setHoverCount] = useState(0);
  const [btnStyle, setBtnStyle] = useState<React.CSSProperties>({});
  const [showHint, setShowHint] = useState(false);
  const [labelUser, setLabelUser] = useState("liamE / emanresU");
  const [labelPass, setLabelPass] = useState("drowssaP");
  const boxRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleHover = useCallback(() => {
    const newCount = hoverCount + 1;
    setHoverCount(newCount);

    if (newCount <= 3) {
      if (!boxRef.current || !btnRef.current) return;
      const pw = boxRef.current.offsetWidth - btnRef.current.offsetWidth;
      const rx = (Math.random() - 0.5) * pw * 0.9;
      const ry = (Math.random() - 0.5) * 80;
      setBtnStyle({ transform: `translate(${rx}px,${ry}px)`, transition: "transform 0.15s" });
    }
  }, [hoverCount]);

  const handleClick = () => {
    if (hoverCount < 3) return; // must hover at least 3 times
    setBtnStyle({ transform: "translate(0,0)" });
    setLabelUser("drowssaP ← on tiaW ,emanresU");
    setLabelPass("emanresU ← ti saw ro ,drowssaP");
    onLogin();
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{ transform: "rotate(180deg)", transformOrigin: "center center" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--surface)) 1px,transparent 1px),linear-gradient(90deg,hsl(var(--surface)) 1px,transparent 1px)`,
          backgroundSize: "40px 40px",
          animation: "gridShift 8s linear infinite",
        }}
      />

      <div ref={boxRef} className="relative z-10 bg-surface border-2 border-cyellow p-12 w-[420px] max-w-[95vw]">
        <div className="text-center mb-2">
          <Badge bg="warning" className="mb-2 font-mono text-xs tracking-widest">NOISREV SOAHC</Badge>
        </div>
        <h1 className="font-display text-5xl text-cyellow tracking-[4px] mb-2 text-center">ENOZRAC</h1>
        <p className="text-[0.65rem] text-muted-foreground text-center mb-9 tracking-[2px] uppercase">
          10 maeT — noitidE noisufoC lausiV //
        </p>

        <Alert variant="danger" className="text-xs mb-4 font-mono">
          ⚠ .erutaef a s'tahT .yltcepxenu evaheB yam serutaeF
        </Alert>

        <div className="mb-5">
          <label className="block text-[0.7rem] tracking-[2px] uppercase text-muted-foreground mb-2">{labelUser}</label>
          <input
            type="text"
            className="w-full bg-background border border-input text-foreground p-3.5 font-mono text-sm outline-none focus:border-cyellow transition-colors"
            placeholder="moc.liame@retne"
            onFocus={() => setShowHint(true)}
            onBlur={() => setShowHint(false)}
          />
          {showHint && (
            <div className="bg-cred text-accent-foreground text-[0.65rem] p-1.5 px-2.5 mt-1.5" style={{ animation: "shake 0.4s" }}>
              ⚠ .daetsni rebmun enohp ruoy retnE
            </div>
          )}
        </div>

        <div className="mb-5">
          <label className="block text-[0.7rem] tracking-[2px] uppercase text-muted-foreground mb-2">{labelPass}</label>
          <input
            type="password"
            className="w-full bg-background border border-input text-foreground p-3.5 font-mono text-sm outline-none focus:border-cyellow transition-colors"
            placeholder="••••••••"
          />
        </div>

        <button
          ref={btnRef}
          className="w-full p-4 bg-primary text-primary-foreground border-none font-display text-xl tracking-[3px] cursor-pointer hover:bg-cred hover:text-accent-foreground transition-colors block"
          style={btnStyle}
          onMouseOver={handleHover}
          onClick={handleClick}
        >
          {hoverCount < 3 ? "😈 NI GOL" : "NI GOL"}
        </button>

        <p className="mt-5 text-[0.6rem] text-muted-foreground text-center tracking-[1px]">
          .erutaef a s'tahT .yltcepxenu evaheB yam serutaeF *
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

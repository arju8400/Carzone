import { useState, useEffect, useCallback, useRef } from "react";
import Badge from "react-bootstrap/Badge";
import ProgressBar from "react-bootstrap/ProgressBar";

interface Props {
  onComplete: () => void;
}

const MOLES = ["🏎️", "🚗", "🏁", "🔧", "⚡", "💨", "🔥", "🛞", "🚙"];
const GRID_SIZE = 9;
const TARGET_HITS = 5;

const WhackAMole = ({ onComplete }: Props) => {
  const [activeMole, setActiveMole] = useState(-1);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [hitAnim, setHitAnim] = useState(-1);
  const intervalRef = useRef<number | null>(null);

  const spawnMole = useCallback(() => {
    setActiveMole(Math.floor(Math.random() * GRID_SIZE));
  }, []);

  useEffect(() => {
    const moleInterval = setInterval(spawnMole, 800);
    const timerInterval = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(moleInterval);
          clearInterval(timerInterval);
          setTimeout(onComplete, 1000);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    intervalRef.current = moleInterval as unknown as number;
    return () => {
      clearInterval(moleInterval);
      clearInterval(timerInterval);
    };
  }, [spawnMole, onComplete]);

  useEffect(() => {
    if (score >= TARGET_HITS) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setTimeout(onComplete, 800);
    }
  }, [score, onComplete]);

  const handleWhack = (i: number) => {
    if (i === activeMole) {
      setScore((s) => s + 1);
      setHitAnim(i);
      setActiveMole(-1);
      setTimeout(() => setHitAnim(-1), 300);
    }
  };

  const progress = (score / TARGET_HITS) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-4">
      <h2 className="font-display text-3xl text-cred tracking-[4px] text-center">!ELOM A KCAHW</h2>
      <p className="text-[0.65rem] text-muted-foreground tracking-[2px] text-center">
        eunitnoc ot selom {TARGET_HITS} kcahW //
      </p>

      <div className="flex gap-4 items-center">
        <Badge bg="danger" className="font-mono text-sm px-3 py-2">
          ⏱ {timeLeft}s
        </Badge>
        <Badge bg="warning" className="font-mono text-sm px-3 py-2 text-primary-foreground">
          🎯 {score}/{TARGET_HITS}
        </Badge>
      </div>

      <div className="w-[300px]">
        <ProgressBar
          now={progress}
          variant={progress >= 100 ? "success" : "warning"}
          animated
          striped
          label={`${score}/${TARGET_HITS}`}
        />
      </div>

      <div className="grid grid-cols-3 gap-2 w-[300px]">
        {Array.from({ length: GRID_SIZE }).map((_, i) => (
          <div
            key={i}
            onClick={() => handleWhack(i)}
            className={`w-[92px] h-[92px] bg-surface border-2 flex items-center justify-center text-4xl cursor-pointer transition-all ${
              i === activeMole
                ? "border-cyellow bg-surface2 scale-110"
                : "border-input hover:border-muted-foreground"
            }`}
            style={{
              animation:
                i === activeMole
                  ? "whackPop 0.3s ease-out, moleIdle 0.6s ease-in-out infinite 0.3s"
                  : hitAnim === i
                  ? "whackHit 0.3s ease-out forwards"
                  : undefined,
            }}
          >
            {i === activeMole ? MOLES[Math.floor(Math.random() * MOLES.length)] : "🕳️"}
          </div>
        ))}
      </div>

      <button
        onClick={onComplete}
        className="mt-4 bg-transparent border border-input text-muted-foreground font-mono text-[0.7rem] tracking-[2px] py-2.5 px-5 cursor-pointer hover:border-cyellow hover:text-cyellow transition-colors"
      >
        )drawoc( PIKS
      </button>
    </div>
  );
};

export default WhackAMole;

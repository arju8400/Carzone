import { useState, useCallback, useEffect } from "react";

const WINS = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

interface Props {
  onComplete: () => void;
}

const TicTacToe = ({ onComplete }: Props) => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(""));
  const [turn, setTurn] = useState("X");
  const [status, setStatus] = useState("X era uoY — nrut ruoY");
  const [over, setOver] = useState(false);

  const checkWin = useCallback((b: string[]) => {
    for (const [a, c1, c2] of WINS) {
      if (b[a] && b[a] === b[c1] && b[a] === b[c2]) return b[a];
    }
    if (b.every(Boolean)) return "draw";
    return null;
  }, []);

  const handleClick = (i: number) => {
    if (over || board[i] || turn !== "X") return;
    const newBoard = [...board];
    newBoard[i] = "X";
    setBoard(newBoard);
    const result = checkWin(newBoard);
    if (result) {
      setOver(true);
      setStatus(result === "draw" ? ".no gnivoM — warD" : `.deecorp yam uoY !sniw ${result}`);
      setTimeout(onComplete, 1500);
      return;
    }
    setTurn("O");
    setStatus("O :nruT");
  };

  useEffect(() => {
    if (turn !== "O" || over) return;
    const timer = setTimeout(() => {
      const empty = board.map((v, i) => (v ? null : i)).filter((v): v is number => v !== null);
      if (!empty.length) return;
      const newBoard = [...board];
      newBoard[empty[Math.floor(Math.random() * empty.length)]] = "O";
      setBoard(newBoard);
      const result = checkWin(newBoard);
      if (result) {
        setOver(true);
        setStatus(result === "draw" ? ".no gnivoM — warD" : `.deecorp yam uoY !sniw ${result}`);
        setTimeout(onComplete, 1500);
      } else {
        setTurn("X");
        setStatus("X era uoY — nrut ruoY");
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [turn, over, board, checkWin, onComplete]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="font-display text-3xl text-cred tracking-[4px] mb-1.5 text-center">ESAELP TNEMOM ENO</h2>
      <p className="text-[0.65rem] text-muted-foreground tracking-[2px] mb-8 text-center px-5">
        eunitnoc ot emag eht etelpmoc esaelp — knil a dekcilc uoY //
      </p>
      <div className="grid grid-cols-3 gap-1 w-[270px]">
        {board.map((val, i) => (
          <div
            key={i}
            onClick={() => handleClick(i)}
            className={`w-[86px] h-[86px] bg-surface border-2 border-input flex items-center justify-center font-display text-4xl cursor-pointer transition-colors hover:bg-surface2 hover:border-cyellow ${
              val === "X" ? "text-cred" : "text-cyellow"
            }`}
          >
            {val}
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm tracking-[2px] text-muted-foreground min-h-[24px] text-center">{status}</p>
      <button
        onClick={onComplete}
        className="mt-6 bg-transparent border border-input text-muted-foreground font-mono text-[0.7rem] tracking-[2px] py-2.5 px-5 cursor-pointer hover:border-cyellow hover:text-cyellow transition-colors"
      >
        )drawoc( PIKS
      </button>
    </div>
  );
};

export default TicTacToe;

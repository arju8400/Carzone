import { useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "@/components/LoginPage";
import TicTacToe from "@/components/TicTacToe";
import WhackAMole from "@/components/WhackAMole";
import MainPage from "@/components/MainPage";

type Page = "login" | "rtl" | "tictactoe" | "whackmole" | "main";

const Index = () => {
  const [page, setPage] = useState<Page>("login");

  const handleLogin = useCallback(() => {
    setPage("rtl");
    setTimeout(() => setPage("main"), 2000);
  }, []);

  const handleTTT = useCallback(() => setPage("tictactoe"), []);
  const handleWhack = useCallback(() => setPage("whackmole"), []);
  const handleReturnMain = useCallback(() => setPage("main"), []);

  if (page === "login") {
    return <LoginPage onLogin={handleLogin} />;
  }

  if (page === "rtl") {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center gap-4" style={{ background: "rgba(200,20,20,0.97)", zIndex: 8000 }}>
        <div className="font-display text-4xl tracking-[6px] text-center text-accent-foreground">DETAVITCA ← TFEL OT THGIR</div>
        <div className="text-[0.7rem] tracking-[3px] opacity-70 text-accent-foreground">...NWOD EDISPU GNIDAOL ETISBEW</div>
      </div>
    );
  }

  if (page === "tictactoe") {
    return <TicTacToe onComplete={handleReturnMain} />;
  }

  if (page === "whackmole") {
    return <WhackAMole onComplete={handleReturnMain} />;
  }

  return <MainPage onTriggerTTT={handleTTT} onTriggerWhack={handleWhack} />;
};

export default Index;

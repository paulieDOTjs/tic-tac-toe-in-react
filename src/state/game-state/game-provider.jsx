import { useMemo, useState } from "react";
import { initialState } from "./initial-state";
import { GameContext } from "./game-context";
import { PLAYERS } from "../../utils/PLAYERS";

export const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState(initialState.gameState);

  const turn = useMemo(() => {
    return gameState.flat().filter(Boolean).length % 2 ? PLAYERS.O : PLAYERS.X;
  }, [gameState]);

  return (
    <>
      <GameContext.Provider value={{ gameState, setGameState, turn }}>
        {children}
      </GameContext.Provider>
    </>
  );
};

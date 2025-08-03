import { useState, useMemo, useCallback, type JSX } from "react";
import { PLAYERS } from "../../utils/PLAYERS";
import { GameContext, type TurnDispatch } from "./game-context";
import { initialState } from "./initial-state";

export const GameProvider = ({ children }: { children: JSX.Element }) => {
  const [gameState, setTheGameState] = useState(initialState.gameState);

  const turn = useMemo(() => {
    return gameState.flat().filter(Boolean).length % 2 ? PLAYERS.O : PLAYERS.X;
  }, [gameState]);

  const dispatchTurn: TurnDispatch = useCallback(() => {}, []);

  return (
    <>
      <GameContext.Provider value={{ gameState, dispatchTurn, turn }}>
        {children}
      </GameContext.Provider>
    </>
  );
};

import { useState, useCallback, type JSX, useMemo } from "react";
import { PLAYERS, type OnePlayer } from "../../utils/PLAYERS";
import { GameContext, type TurnDispatch } from "./game-context";
import { initialState } from "./initial-state";

export const GameProvider = ({ children }: { children: JSX.Element }) => {
  const [gameState, setGameState] = useState(initialState.gameState);

  const turn =
    gameState.flat().filter(Boolean).length % 2 ? PLAYERS.O : PLAYERS.X;

  const dispatchTurn: TurnDispatch = useCallback(
    ({ row, column }) => {
      const newState = JSON.parse(JSON.stringify(gameState));
      newState[row][column] = turn;
      setGameState(newState);
    },
    [gameState, turn, setGameState]
  );

  const reset = useCallback(() => {
    setGameState(initialState.gameState);
  }, []);

  const winner = useMemo(() => {
    for (let i = 0; i < gameState.length; i++) {
      const thisRowAns: Array<OnePlayer | null> = [];
      const thisColAns: Array<OnePlayer | null> = [];

      for (let j = 0; j < gameState[0].length; j++) {
        thisRowAns.push(gameState[i][j]);
        thisColAns.push(gameState[j][i]);
      }
      if (thisRowAns.every((val) => val && val === thisRowAns[0])) {
        return thisRowAns[0];
      }
      if (thisColAns.every((val) => val && val === thisColAns[0])) {
        return thisColAns[0];
      }
    }

    if (
      gameState[0][0] &&
      gameState[1][1] === gameState[0][0] &&
      gameState[2][2] === gameState[0][0]
    ) {
      return gameState[0][0];
    }
    if (
      gameState[2][0] &&
      gameState[1][1] === gameState[2][0] &&
      gameState[0][2] === gameState[2][0]
    ) {
      return gameState[2][0];
    }

    return null;
  }, [gameState]);

  return (
    <>
      <GameContext.Provider
        value={{ gameState, dispatchTurn, turn, reset, winner }}
      >
        {children}
      </GameContext.Provider>
    </>
  );
};

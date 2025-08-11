import { createContext, useContext } from "react";
import { initialState } from "./initial-state";
import { type OnePlayer } from "../../utils/PLAYERS";

export type GameCellState = OnePlayer | null;
export type GameRow = [GameCellState, GameCellState, GameCellState];
export type TurnDispatch = (args: { row: number; column: number }) => void;

export type GameContextType = {
  // TODO make string because easier
  gameState: [GameRow, GameRow, GameRow];
  dispatchTurn: TurnDispatch;
  turn: OnePlayer;
  reset: () => void;
  winner: OnePlayer | null;
};

export const GameContext = createContext<GameContextType>(initialState);

export const useGameContext = () => useContext(GameContext);

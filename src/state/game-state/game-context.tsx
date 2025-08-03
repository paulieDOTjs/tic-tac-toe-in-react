import { createContext, useContext } from "react";
import { initialState } from "./initial-state";
import { type OnePlayer } from "../../utils/PLAYERS";

export type GameCellState = OnePlayer | null;
export type GameRow = [GameCellState, GameCellState, GameCellState];
export type TurnDispatch = (args: {
  row: number;
  column: number;
  player: OnePlayer;
}) => void;

export type GameContextType = {
  gameState: [GameRow, GameRow, GameRow];
  dispatchTurn: TurnDispatch;
  turn: OnePlayer;
};

export const GameContext = createContext<GameContextType>(initialState);

export const useGameContext = () => useContext(GameContext);

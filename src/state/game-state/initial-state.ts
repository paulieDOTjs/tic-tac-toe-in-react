import { PLAYERS } from "../../utils/PLAYERS";
import type { GameContextType } from "./game-context";

export const initialState: GameContextType = {
  gameState: new Array(3).fill(
    new Array(3).fill(null)
  ) as GameContextType["gameState"],
  dispatchTurn: () => {
    throw new Error("Context not properly used");
  },
  turn: PLAYERS.X,
};

import { PLAYERS } from "../../utils/PLAYERS";

export const initialState = {
  gameState: new Array(3).fill(new Array(3).fill(null)),
  setGameState: () => {
    throw new Error("Context not properly used");
  },
  turn: PLAYERS.X,
};

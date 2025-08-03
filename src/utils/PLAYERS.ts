export type OnePlayer = (typeof PLAYERS)[keyof typeof PLAYERS];

export const PLAYERS = Object.freeze({
  X: "X",
  O: "O",
});

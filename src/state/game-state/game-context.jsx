import React, { createContext, useContext } from "react";
import { initialState } from "./initial-state";

export const GameContext = createContext(initialState);

export const useGameContext = () => useContext(GameContext);

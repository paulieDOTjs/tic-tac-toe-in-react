import { useGameContext } from "../../state/game-state/game-context";
import { Cell } from "../cell/Cell";

export const GameBoard = () => {
  const { gameState, turn } = useGameContext();

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2>It is {turn}'s turn.</h2>
      </div>
      {gameState.map((rowState, row) => (
        <div key={row} className="row">
          {rowState.map((__, column) => (
            <Cell key={row + column} row={row} column={column} />
          ))}
        </div>
      ))}
    </>
  );
};

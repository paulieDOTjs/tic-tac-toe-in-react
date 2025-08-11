import { useCallback } from "react";
import { useGameContext } from "../../state/game-state/game-context";
import { Cell } from "../cell/Cell";

export const GameBoard = () => {
  const { gameState, turn, reset, winner } = useGameContext();

  const handleClick = useCallback(() => {
    reset();
  }, [reset]);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2>{winner ? `${winner} WON!` : `It is ${turn}'s turn.`}</h2>
      </div>
      {gameState.map((rowState, row) => (
        <div key={row} className="row">
          {rowState.map((__, column) => {
            return (
              <Cell
                key={row + column}
                row={row}
                column={column}
                cellValue={gameState[row][column]}
                disabled={winner ? true : undefined}
              />
            );
          })}
        </div>
      ))}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h3>
          <button onClick={handleClick} type="reset">
            Reset
          </button>
        </h3>
      </div>
    </>
  );
};

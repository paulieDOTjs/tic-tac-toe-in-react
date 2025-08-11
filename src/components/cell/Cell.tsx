import "./cell.css";
import { useCallback, type JSX } from "react";
import type { OnePlayer } from "../../utils/PLAYERS";
import { useGameContext } from "../../state/game-state/game-context";

export type CellProps = {
  row: number;
  column: number;
  cellValue: OnePlayer | null;
} & Omit<JSX.IntrinsicElements["button"], "ref" | "children">;

export const Cell: (props: CellProps) => JSX.Element = ({
  row,
  column,
  cellValue,
  disabled,
  ...rest
}) => {
  const { dispatchTurn } = useGameContext();

  const handleClick = useCallback(() => {
    dispatchTurn({ row, column });
  }, [row, column, dispatchTurn]);

  return (
    <button
      className="cell"
      disabled={disabled || !!cellValue}
      onClick={handleClick}
      {...rest}
    >
      {cellValue}
    </button>
  );
};

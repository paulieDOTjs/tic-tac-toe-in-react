import type { JSX } from "react";

export type CellProps = { row: number; column: number } & Omit<
  JSX.IntrinsicElements["div"],
  "ref" | "children"
>;

export const Cell: (props: CellProps) => JSX.Element = ({
  row,
  column,
  ...rest
}) => {
  return (
    <div {...rest}>
      i am cell {row} {column}
    </div>
  );
};

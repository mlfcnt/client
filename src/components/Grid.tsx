import { Grid as GridType } from "../types";
import { times } from "lodash";

type Props = {
  grid: GridType;
};

export const Grid = ({ grid }: Props) => {
  const amountOfRows = grid.height;
  const amountOfColumns = grid.width;
  return (
    <div className="grid">
      {times(amountOfRows, (idx) => (
        <div
          style={{ display: "flex", justifyContent: "space-between" }}
          key={idx}
        >
          {times(amountOfColumns, (idx) => (
            <div className="grid-cell" key={idx}></div>
          ))}
        </div>
      ))}
    </div>
  );
};

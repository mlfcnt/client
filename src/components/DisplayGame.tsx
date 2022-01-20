import { Game } from "../types";
import { Commands } from "./Commands";
import { Grid } from "./Grid";

export const DisplayGame = ({ game }: { game: Game }) => {
  console.log(
    "👽CLG - file: DisplayGame.tsx - line 5 - DisplayGame - game",
    game
  );
  const hunter = game.players.find((x) => x.role === "hunter");
  const haunted = game.players.find((x) => x.role === "haunted");
  return (
    <div>
      <p>
        {hunter?.name} doit attraper {haunted?.name}
      </p>
      <Grid grid={game.grid} />
      <Commands />
    </div>
  );
};

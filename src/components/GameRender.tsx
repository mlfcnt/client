import { Grid as GridType, Player } from "../types";
import { Grid } from "./Grid";

type Props = {
  grid: GridType;
  players: Player[];
};

export const GameRender = ({ grid, players }: Props) => {
  const displayRole = (player: Player) => {
    if (player?.role === "hunter") return "🔪";
  };
  return (
    <div>
      <h5>But du jeu : attraper le méchant</h5>
      <p>
        Joueur 1 : {players[0]?.name} {displayRole(players[0])}
      </p>
      <p>
        Joueur 2 : {players[1]?.name || "En attente du 2eme joueur..."}{" "}
        {displayRole(players[1])}
      </p>
      <Grid grid={grid} />
    </div>
  );
};

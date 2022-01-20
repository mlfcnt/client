import { Game, Player } from "../types";
import { DisplayGame } from "./DisplayGame";
type Props = {
  currentGames: Game[];
  onJoin: (game: Game) => void;
};

export const DisplayCurrentGames = ({ currentGames, onJoin }: Props) => {
  const displayRole = (player: Player) => {
    if (player?.role === "hunter") return "🔪";
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {currentGames.map((game) => (
        <div
          style={{
            margin: "30px",
            padding: "30px",
            backgroundColor: "lightcoral",
          }}
          key={game.id}
        >
          {game.status === "created" ? (
            <>
              <p>
                P1 : {game.creator.name} {displayRole(game.creator)}
              </p>
              <p>P2 : {game.players[1]?.name || "En attente..."}</p>
              {game.players.length < 2 && (
                <button onClick={() => onJoin(game)}>
                  Rejoindre cette partie
                </button>
              )}
            </>
          ) : (
            <DisplayGame game={game} />
          )}
        </div>
      ))}
    </div>
  );
};

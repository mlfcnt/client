import React from "react";
import { Game, Player } from "../types";
type Props = {
  currentGames: Game[];
  onJoin: (game: Game) => void;
};

export const DisplayCurrentGames = ({ currentGames, onJoin }: Props) => {
  const displayRole = (player: Player) => {
    if (player?.role === "hunter") return "🔪";
  };

  return (
    <div>
      {currentGames.map((game) => (
        <div
          style={{
            border: "2px solid black",
            margin: "30px",
            padding: "30px",
            backgroundColor: "lightcoral",
          }}
        >
          <p>Joueurs :</p>
          <p>
            {game.creator.name} {displayRole(game.creator)}
          </p>
          <p>{game.players[1]?.name || "En attente du 2eme joueur..."}</p>
          {game.players.length < 2 && (
            <button onClick={() => onJoin(game)}>Rejoindre cette partie</button>
          )}
        </div>
      ))}
    </div>
  );
};

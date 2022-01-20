import { useEffect, useState } from "react";
import { createNewGame } from "./api";
import "./App.css";
import { GameRender } from "./components/GameRender";
import { Game, Grid, Player } from "./types";
import { io } from "socket.io-client";
import { DisplayCurrentGames } from "./components/DisplayCurrentGames";

const socket = io("http://localhost:8000/", {
  transports: ["websocket"],
});

function App() {
  const [currentGames, setCurrentGames] = useState<Game[]>([]);

  const handleNewGame = async () => {
    const name = window.prompt("Quel est votre nom ?");
    socket.emit("create-game-request", name);
  };

  const handlJoinGame = (game: Game) => {
    const name = window.prompt("Quel est votre nom ?");
    socket.emit("join-game-request", {
      name,
      game,
    });
  };

  useEffect(() => {
    socket.on("current-games", (socket) => {
      setCurrentGames(socket);
    });
  }, []);

  useEffect(() => {
    socket.on("game-created", (socket) => {
      setCurrentGames([...currentGames, socket]);
      const { grid, players } = socket;
    });
  }, [currentGames]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Parties en cours : ({currentGames.length})</p>
        <DisplayCurrentGames
          currentGames={currentGames}
          onJoin={handlJoinGame}
        />
        <button onClick={handleNewGame}>Créer une partie</button>
      </header>
    </div>
  );
}

export default App;

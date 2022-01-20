import { useEffect } from "react";
import "./App.css";
import { Game } from "./types";
import { io } from "socket.io-client";
import { DisplayCurrentGames } from "./components/DisplayCurrentGames";
import { useCurrentGames } from "./hooks/useCurrentGames";

const socket = io("http://localhost:8000/", {
  transports: ["websocket"],
});

function App() {
  const currentGames = useCurrentGames(socket);

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

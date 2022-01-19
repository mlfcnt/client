import { useEffect, useState } from "react";
import { createNewGame } from "./api";
import "./App.css";
import { GameRender } from "./components/GameRender";
import { Grid, Player } from "./types";
import { io } from "socket.io-client";

const socket = io("https://localhost:8000/", {
  transports: ["websocket"],
});

function App() {
  const [grid, setGrid] = useState<Grid | null>(null);
  const [players, setPlayers] = useState<Player[]>([]);

  const handleNewGame = async () => {
    const name = window.prompt("Quel est votre nom ?");
    socket.emit("connecting-player", name);
    const grid = await createNewGame();
    setGrid(grid);
  };

  useEffect(() => {
    socket.on("player-connected", (socket) => {
      setPlayers(socket);
    });
  }, [players]);

  return (
    <div className="App">
      <header className="App-header">
        {grid ? (
          <GameRender grid={grid} players={players} />
        ) : (
          <button onClick={handleNewGame}>New Game</button>
        )}
      </header>
    </div>
  );
}

export default App;

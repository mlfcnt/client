import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import { Game } from "../types";

export const useCurrentGames = (socket: Socket) => {
  const [currentGames, setCurrentGames] = useState<Game[]>([]);
  useEffect(() => {
    socket.on("current-games", (socket) => {
      setCurrentGames(socket);
    });
  }, [socket]);

  return currentGames;
};

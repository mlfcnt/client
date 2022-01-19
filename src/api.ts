import { Grid } from "./types";

export const createNewGame = async (): Promise<Grid> => {
  const res = await fetch("http://localhost:8000/new-game");
  const { grid } = await res.json();
  return grid;
};

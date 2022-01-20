export type Grid = {
  height: number;
  width: number;
};

export type Player = {
  name: string;
  role: "hunter" | "haunted";
};

export type Game = {
  id: number;
  players: Player[];
  creator: Player;
  grid: Grid;
  status: "created" | "full";
};

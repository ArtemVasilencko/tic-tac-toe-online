export type initialGameStateType = {
  playersCount: number;
};

export type gameStateType = {
  cells: Array<string | null>;
  currentMove: string;
  playersCount: number;
};

export type gameActionType = {
  type: string;
  index: number;
};

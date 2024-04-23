export type gameStateType = {
  cells: Array<string | null>;
  currentMove: string;
  playersCount: number;
  currentMoveStart: number;
  timers: timersType;
};

export type extraParametersType = {
  playersCount: number;
  defaultTimer: number;
  currentMoveStart: number;
};

export type gameActionType = {
  type: string;
  index?: number;
  now: number;
};

export type timersType = {
  [key: string]: number;
};

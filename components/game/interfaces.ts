import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface GameFieldPropsI {
  className: string;
  cells: Array<string | null>;
  currentMove: string;
  nextMove: string;
  handleCellClick: (index: number) => void;
  winnerSequence: number[] | undefined;
  isWinner: boolean;
}

export interface GameCellPropsI {
  children: ReactNode;
  onClick: () => void;
  isWinner: boolean | undefined;
  disabled: boolean;
}

export interface GameFieldLayoutPropsI {
  children: ReactNode;
  className: string;
}

export interface GameMoveInfoPropsI {
  actions: ReactNode;
  currentMove: string;
  nextMove: string;
}

export interface GameGridPropsI {
  children: ReactNode;
}

export interface useGameStateI {
  cells: Array<string | null>;
  currentMove: string;
  playersTimeOver: string[];
}

export interface GameInfoPropsI {
  className: string;
  playersCount: number;
  currentMove: string;
  isWinner: string | null;
  onPlayerTimeOver: OnTimeOverType;
}

export interface PlayerInfoPropsI {
  playerInfo: PlayerType;
  isRight: boolean;
  isTimerRunning: boolean;
  onTimeOver: OnTimeOverType;
}

type OnTimeOverType = (symbol: string) => void;

interface PlayerType {
  id: number;
  name: string;
  rating: number;
  avatar: StaticImageData;
  symbol: string;
}

import { NOT_FOUND_INDEX } from "../constants";
import { gameStateType } from "./types";

export function computeWinnerSymbol(
  state: gameStateType,
  winnerSequence: number[] | undefined,
  nextMove: string,
) {
  const winnerSymbol =
    nextMove === state.currentMove
      ? state.currentMove
      : state.cells[winnerSequence?.[1] || NOT_FOUND_INDEX];
  return winnerSymbol;
}

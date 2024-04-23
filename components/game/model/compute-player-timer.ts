import { gameStateType } from "./types";

export function computePlayerTimer(
  gameState: gameStateType,
  playerSymbol: string,
) {
  return {
    timer: gameState.timers[playerSymbol],
    timerStartAt:
      playerSymbol === gameState.currentMove
        ? gameState.currentMoveStart
        : undefined,
  };
}

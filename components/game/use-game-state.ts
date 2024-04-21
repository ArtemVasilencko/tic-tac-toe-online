import { useState } from "react";
import { GAME_SYMBOLS, NOT_FOUND_INDEX } from "./constants";
import { computeWinner, getNextMove } from "./model";
import { useGameStateI } from "./interfaces";

export function useGameState(playersCount: number) {
  const [{ cells, currentMove, playersTimeOver }, setGameState] =
    useState<useGameStateI>(() => ({
      cells: new Array(19 * 19).fill(null),
      currentMove: GAME_SYMBOLS.CROSS,
      playersTimeOver: [],
    }));
  const winnerSequence = computeWinner(cells);
  const nextMove = getNextMove(currentMove, playersCount, playersTimeOver);
  console.log(winnerSequence);

  const winnerSymbol =
    nextMove === currentMove
      ? currentMove
      : cells[winnerSequence?.[1] || NOT_FOUND_INDEX];

  const handleCellClick = (index: number) => {
    if (cells[index]) return;
    setGameState((lastGameState) => {
      if (lastGameState.cells[index]) return lastGameState;
      return {
        ...lastGameState,
        currentMove: getNextMove(
          lastGameState.currentMove,
          playersCount,
          playersTimeOver,
        ),
        cells: lastGameState.cells.map((cell, i) =>
          i === index ? lastGameState.currentMove : cell,
        ),
      };
    });
  };

  const handlePlayerTimeOver = (symbol: string) => {
    setGameState((lastGameState) => ({
      ...lastGameState,
      playersTimeOver: [...lastGameState.playersTimeOver, symbol],
      currentMove: getNextMove(
        lastGameState.currentMove,
        playersCount,
        lastGameState.playersTimeOver,
      ),
    }));
  };

  return {
    cells,
    currentMove,
    nextMove,
    winnerSequence,
    winnerSymbol,
    handleCellClick,
    handlePlayerTimeOver,
  };
}

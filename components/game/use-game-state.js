import { useState } from "react";
import { GAME_SYMBOLS, MOVE_ORDER } from "./constants";

function getNextMove(currentMove, playersCount) {
  const slicedMOvedOrder = MOVE_ORDER.slice(0, playersCount);
  const nextMoveIndex = slicedMOvedOrder.indexOf(currentMove) + 1;
  return slicedMOvedOrder[nextMoveIndex] ?? slicedMOvedOrder[0];
}

export function useGameState(playersCount) {
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
  }));

  const nextMove = getNextMove(currentMove, playersCount);

  const handleCellClick = (index) => {
    if (cells[index]) return;
    setGameState((lastGameState) => {
      if (lastGameState.cells[index]) return lastGameState;
      return {
        ...lastGameState,
        currentMove: getNextMove(lastGameState.currentMove, playersCount),
        cells: lastGameState.cells.map((cell, i) =>
          i === index ? lastGameState.currentMove : cell,
        ),
      };
    });
  };

  return {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
  };
}

import { MOVE_ORDER } from "../constants";

export function getNextMove(
  currentMove: string,
  playersCount: number,
  playersTimeOver?: string[],
) {
  const slicedMOvedOrder = MOVE_ORDER.slice(0, playersCount).filter(
    (symbol) => !playersTimeOver?.includes(symbol),
  );
  const nextMoveIndex = slicedMOvedOrder.indexOf(currentMove) + 1;
  return slicedMOvedOrder[nextMoveIndex] ?? slicedMOvedOrder[0];
}

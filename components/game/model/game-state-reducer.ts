import { GAME_SYMBOLS, MOVE_ORDER, NOT_FOUND_INDEX } from "../constants";
import { getNextMove } from "./get-next-move";
import { extraParametersType, gameActionType, gameStateType } from "./types";

export const GAME_STATE_ACTIONS = { CELL_CLICK: "cell-click", TICK: "tick" };

export const initialGameState = ({
  playersCount,
  defaultTimer,
  currentMoveStart,
}: extraParametersType): gameStateType => {
  return {
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
    playersCount,
    currentMoveStart,
    // TODO
    // Fix any type
    timers: MOVE_ORDER.reduce((timers: any, symbol, index) => {
      if (index < playersCount) {
        timers[symbol] = defaultTimer;
      }
      return timers;
    }, {}),
  };
};

export const gameStateReducer = (
  state: gameStateType,
  action: gameActionType,
) => {
  switch (action.type) {
    case GAME_STATE_ACTIONS.CELL_CLICK: {
      const { index, now } = action;
      if (state.cells[checkEmptyCell(index)]) return state;
      return {
        ...state,
        timers: updateTimers(state, now),
        currentMove: getNextMove(state),
        currentMoveStart: now,
        cells: updateCell(state, checkEmptyCell(index)),
      };
    }

    case GAME_STATE_ACTIONS.TICK: {
      const { now } = action;

      if (!isTimeOver(state, now)) {
        return state;
      }

      return {
        ...state,
        timers: updateTimers(state, now),
        currentMove: getNextMove(state),
        currentMoveStart: now,
      };
    }

    default: {
      return state;
    }
  }
};

function updateTimers(state: gameStateType, now: number) {
  const diff = now - state.currentMoveStart;
  const timer = state.timers[state.currentMove];

  return {
    ...state.timers,
    [state.currentMove]: timer - diff,
  };
}

function updateCell(state: gameStateType, index: number) {
  return state.cells.map((cell, i) => (i === index ? state.currentMove : cell));
}

function isTimeOver(state: gameStateType, now: number) {
  const timer = updateTimers(state, now)[state.currentMove];
  return timer <= 0;
}

function checkEmptyCell(index: number | undefined): number {
  return index !== undefined ? index : NOT_FOUND_INDEX;
}

import { GAME_SYMBOLS } from "../constants";
import { getNextMove } from "./get-next-move";
import { gameActionType, gameStateType, initialGameStateType } from "./types";

export const GAME_STATE_ACTIONS = { CELL_CLICK: "cell-click" };

export const gameStateReducer = (
  state: gameStateType,
  action: gameActionType,
) => {
  switch (action.type) {
    case GAME_STATE_ACTIONS.CELL_CLICK: {
      if (state.cells[action.index]) return state;
      return {
        ...state,
        currentMove: getNextMove(state.currentMove, state.playersCount),
        cells: state.cells.map((cell, i) =>
          i === action.index ? state.currentMove : cell,
        ),
      };
    }

    default: {
      return state;
    }
  }
};

export const initialGameState = ({ playersCount }: initialGameStateType) => {
  return {
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
    playersCount,
  };
};

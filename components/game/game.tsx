import { useReducer } from "react";
import { useInterval } from "../lib/timers";
import { UiButton } from "../uikit/ui-button";
import { PLAYERS, PLAYERS_COUNT, TIME_ON_MOVE } from "./constants";
import { computePlayerTimer } from "./model/compute-player-timer";
import { computeWinner } from "./model/compute-winner";
import { computeWinnerSymbol } from "./model/compute-winner-symbol";
import {
  GAME_STATE_ACTIONS,
  gameStateReducer,
  initialGameState,
} from "./model/game-state-reducer";
import { getNextMove } from "./model/get-next-move";
import { BackLink } from "./ui/back-link";
import { GameCell } from "./ui/game-cell";
import { GameInfo } from "./ui/game-info";
import { GameLayout } from "./ui/game-layout";
import { GameMoveInfo } from "./ui/game-move-info";
import { GameOverModal } from "./ui/game-over-modal";
import { GameTitle } from "./ui/game-title";
import { PlayerInfo } from "./ui/player-info";

export function Game() {
  const [gameState, dispatch] = useReducer(
    gameStateReducer,
    {
      playersCount: PLAYERS_COUNT,
      defaultTimer: 60000,
      currentMoveStart: Date.now(),
    },
    initialGameState,
  );

  const winnerSequence = computeWinner(gameState.cells);
  const nextMove = getNextMove(gameState);
  const winnerSymbol = computeWinnerSymbol(gameState, winnerSequence, nextMove);
  const winnerPlayer = PLAYERS.find((player) => player.symbol === winnerSymbol);

  useInterval(1000, !!gameState.currentMoveStart && !winnerSymbol, () => {
    dispatch({ type: GAME_STATE_ACTIONS.TICK, now: Date.now() });
  });

  return (
    <>
      <GameLayout
        backLink={<BackLink />}
        title={<GameTitle />}
        gameInfo={
          <GameInfo
            isRatingGame
            playersCount={PLAYERS_COUNT}
            timeMode={TIME_ON_MOVE}
          />
        }
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => {
          const { timer, timerStartAt } = computePlayerTimer(
            gameState,
            player.symbol,
          );
          return (
            <PlayerInfo
              key={player.id}
              name={player.name}
              rating={player.rating}
              avatar={player.avatar}
              symbol={player.symbol}
              isRight={index % 2 === 1}
              timer={timer}
              timerStartAt={timerStartAt}
            />
          );
        })}
        actions={
          <>
            <UiButton size="md" variant="primary">
              Ничья
            </UiButton>
            <UiButton size="md" variant="outline">
              Сдаться
            </UiButton>
          </>
        }
        gameMoveInfo={
          <GameMoveInfo
            currentMove={gameState.currentMove}
            nextMove={nextMove}
          />
        }
        gameCells={gameState.cells.map((cell, index) => (
          <GameCell
            key={index}
            symbol={cell}
            isWinner={winnerSequence?.includes(index)}
            disabled={!!winnerSymbol}
            onClick={() => {
              dispatch({
                type: GAME_STATE_ACTIONS.CELL_CLICK,
                index: index,
                now: Date.now(),
              });
            }}
          />
        ))}
      />
      <GameOverModal
        players={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => {
          const { timer, timerStartAt } = computePlayerTimer(
            gameState,
            player.symbol,
          );
          return (
            <PlayerInfo
              key={player.id}
              name={player.name}
              rating={player.rating}
              avatar={player.avatar}
              symbol={player.symbol}
              isRight={index % 2 === 1}
              timer={timer}
              timerStartAt={timerStartAt}
              isWinner={!!winnerSymbol}
            />
          );
        })}
        winnerName={winnerPlayer?.name || ""}
      />
    </>
  );
}

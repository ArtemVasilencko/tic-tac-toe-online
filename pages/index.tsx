import { useState } from "react";
import { GameField, GameInfo, GameTitle } from "../components/game";
import { Header } from "../components/header";
import { useGameState } from "../components/game/use-game-state";
import { GameSymbol } from "../components/game/game-symbol";
import { UiModal } from "../components/uikit/ui-modal";
import { UiButton } from "../components/uikit/ui-button";

export default function HomePage() {
  const [playersCount] = useState(4);
  const {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
    winnerSequence,
    winnerSymbol,
    handlePlayerTimeOver,
  } = useGameState(playersCount);
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          playersCount={playersCount}
          currentMove={currentMove}
          isWinner={winnerSymbol}
          onPlayerTimeOver={handlePlayerTimeOver}
          className="mt-4"
        />
        <GameSymbol symbol={winnerSymbol || ""} />
        <UiModal
          width="md"
          isOpen={!!winnerSymbol}
          onClose={() => console.log("close")}
        >
          <UiModal.Header>Игра завершена!</UiModal.Header>
          <UiModal.Body className="px-6">
            <div className="text-sm">
              Победитель: <span className="text-teal-600">Paromovevg </span>{" "}
            </div>
          </UiModal.Body>
          <UiModal.Footer>
            <UiButton size="md" variant="outline">
              Вернуться
            </UiButton>
            <UiButton size="md" variant="primary">
              Играть снова
            </UiButton>
          </UiModal.Footer>
        </UiModal>
        <GameField
          cells={cells}
          currentMove={currentMove}
          nextMove={nextMove}
          handleCellClick={handleCellClick}
          winnerSequence={winnerSequence}
          isWinner={!!winnerSymbol}
          className="mt-6"
        />
      </main>
    </div>
  );
}

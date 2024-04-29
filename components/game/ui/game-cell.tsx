import clsx from "clsx";
import { GameSymbol } from "./game-symbol";
import { RefCallback, memo } from "react";

interface GameCellPropsI {
  symbol: string | null;
  onClick: (index: number) => void;
  isWinner: boolean | undefined;
  disabled: boolean;
  index: number;
}

export const GameCell = memo(function GameCell({
  onClick,
  isWinner,
  disabled,
  symbol,
  index,
}: GameCellPropsI) {
  console.log("game cell");
  return (
    <button
      onClick={() => onClick(index)}
      disabled={disabled}
      className={clsx(
        "border border-slate-200 -ml-px -mt-px flex items-center justify-center",
        isWinner && "bg-red-200",
      )}
    >
      {symbol && <GameSymbol symbol={symbol} className="w-5 h-5" />}
    </button>
  );
});

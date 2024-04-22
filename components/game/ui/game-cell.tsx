import clsx from "clsx";
import { GameSymbol } from "./game-symbol";

interface GameCellPropsI {
  symbol: string | null;
  onClick: () => void;
  isWinner: boolean | undefined;
  disabled: boolean;
}

export function GameCell({
  onClick,
  isWinner,
  disabled,
  symbol,
}: GameCellPropsI) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "border border-slate-200 -ml-px -mt-px flex items-center justify-center",
        isWinner && "bg-red-200",
      )}
    >
      {symbol && <GameSymbol symbol={symbol} className="w-5 h-5" />}
    </button>
  );
}

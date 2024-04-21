import { ReactNode } from "react";
import { GAME_SYMBOLS } from "./constants";
import { CrossIcon } from "./icons/cross-icon";
import { SquareIcon } from "./icons/square-icon";
import { TriangleIcon } from "./icons/triangle-icon";
import { ZeroIcon } from "./icons/zero-icon";

interface GameSymbolPropsI {
  symbol: string;
  className?: string;
}

export function GameSymbol({ symbol, className }: GameSymbolPropsI) {
  const Icon =
    {
      [GAME_SYMBOLS.CROSS]: CrossIcon,
      [GAME_SYMBOLS.ZERO]: ZeroIcon,
      [GAME_SYMBOLS.TRIANGLE]: TriangleIcon,
      [GAME_SYMBOLS.SQUARE]: SquareIcon,
    }[symbol] ?? null;

  return Icon && <Icon className={className} />;
}

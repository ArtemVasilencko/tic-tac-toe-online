import Image, { StaticImageData } from "next/image";
import { GameSymbol } from "./game-symbol";
import clsx from "clsx";

interface PlayerInfoPropsI {
  isRight: boolean;
  name: string;
  rating: number;
  avatar: StaticImageData;
  symbol: string;
  isTimerRunning?: boolean;
  seconds: number;
}

export function PlayerInfo({
  isRight,
  name,
  rating,
  avatar,
  symbol,
  isTimerRunning,
  seconds,
}: PlayerInfoPropsI) {
  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(seconds % 60).padStart(2, "0");
  const isDanger = seconds < 10;

  function getTimerColor() {
    if (isTimerRunning) {
      return isDanger ? "text-orange-600" : "text-slate-900";
    }
    return "text-slate-200";
  }

  return (
    <div className="flex gap-3 items-center">
      <div className={clsx("relative", isRight && "order-3")}>
        <div className="ml-auto flex items-center text-teal-600 gap-2 text-start w-44">
          <Image src={avatar} width={48} height={48} alt="avatar" unoptimized />
          <div className="overflow-hidden">
            <div className="text-lg leading-tight truncate">{name}</div>
            <div className="text-xs leading-tight">Рейтинг: {rating}</div>
          </div>
        </div>
        <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
          <GameSymbol symbol={symbol} />
        </div>
      </div>
      <div className={clsx("h-6 w-px bg-slate-200", isRight && "order-2")} />
      <div
        className={clsx(
          "text-lg font-semibold w-[60px]",
          isRight && "order-1",
          getTimerColor(),
        )}
      >
        {minutesString}:{secondsString}
      </div>
    </div>
  );
}

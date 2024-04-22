import { HistoryIcon } from "./icons/history-icon";
import { StarIcon } from "./icons/star-icon";
import { UserIcon } from "./icons/user-icon";

interface GameInfoPropsI {
  playersCount: number;
  isRatingGame: boolean;
  timeMode: string;
}

export function GameInfo({
  playersCount,
  isRatingGame,
  timeMode,
}: GameInfoPropsI) {
  return (
    <div className="flex items-center gap-3 text-xs text-slate-400">
      {isRatingGame && <StarIcon />}
      <div className="flex items-center gap-1">
        <UserIcon /> {playersCount}
      </div>
      <div className="flex items-center gap-1">
        <HistoryIcon /> {timeMode}
      </div>
    </div>
  );
}

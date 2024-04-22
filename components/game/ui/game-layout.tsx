import { ReactNode } from "react";

interface GameLayoutPropsI {
  backLink: ReactNode;
  title: ReactNode;
  gameInfo: ReactNode;
  playersList: ReactNode;
  gameMoveInfo: ReactNode;
  actions: ReactNode;
  gameCells: ReactNode;
}

export function GameLayout({
  backLink,
  title,
  gameInfo,
  playersList,
  gameMoveInfo,
  actions,
  gameCells,
}: GameLayoutPropsI) {
  return (
    <div className="pb-10">
      <div className="pl-2">
        {backLink} {title} {gameInfo}
      </div>
      <div className="mt-4 bg-white rounded-2xl shadow-md px-8 py-4 grid grid-cols-2 gap-3">
        {playersList}
      </div>
      <div className={"bg-white rounded-2xl shadow-md px-8 pt-5 pb-7 mt-6"}>
        <div className="flex gap-3 items-center ">
          <div className="mr-auto">{gameMoveInfo}</div>
          {actions}
        </div>
        <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-x pt-px mt-3">
          {gameCells}
        </div>
      </div>
    </div>
  );
}

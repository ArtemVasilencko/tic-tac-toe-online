import clsx from "clsx";
import Image from "next/image";
import avatarSrc from "./avatar.png";

export function Profile({ className, name, rating, avatar = avatarSrc }) {
  return (
    <div
      className={clsx(
        className,
        "ml-auto flex items-center text-teal-600 gap-2 text-start",
      )}
    >
      <Image src={avatar} width={48} height={48} alt="avatar" unoptimized />
      <div className="overflow-hidden">
        <div className="text-lg leading-tight truncate">{name}</div>
        <div className="text-xs leading-tight">Рейтинг: {rating}</div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import { characterType } from "../types/characterType";
import { useAppDispatch } from "../store/store";
import { changeLike } from "../store/features/cardsSlice";

type CardProps = {
  card: characterType;
};

export function Card({ card }: CardProps) {
  const dispatch = useAppDispatch();
  const handleLikeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(changeLike(card._id));
  };

  return (
    <Link
      to={`${card._id}`}
      className="w-[180px] h-[230px] gap-2 flex flex-col border-[3px] border-solid border-[#CD63FF] p-4 text-ellipsis rounded-2xl"
    >
      <p className="overflow-hidden whitespace-nowrap text-ellipsis">
        {card.name}
      </p>
      <img
        src={card.image}
        alt={card.name}
        className="w-[140px] h-[140px] object-cover rounded-full"
      />
      <div onClick={handleLikeClick}>
        <img
          src={card.isLiked ? "/like-active.svg" : "/like-not-active.svg"}
          alt="like"
          className="w-4 h-4 fill-white scale-image"
        />
      </div>
    </Link>
  );
}

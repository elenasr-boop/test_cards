import { Link } from "react-router-dom";
import { characterType } from "../types/characterType";
import { useAppDispatch } from "../store/store";
import { changeLike, deleteCard } from "../store/features/cardsSlice";

type CardProps = {
  card: characterType;
};

export function Card({ card }: CardProps) {
  const dispatch = useAppDispatch();
  const handleLikeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(changeLike(card._id));
  };
  const handleDeleteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(deleteCard(card._id));
  };

  return (
    <Link
      to={`${card._id}`}
      className="w-[180px] h-[240px] gap-2 flex flex-col border-[3px] border-solid border-[#CD63FF] p-4 text-ellipsis rounded-2xl"
    >
      <p className="overflow-hidden whitespace-nowrap text-ellipsis">
        {card.name}
      </p>
      <img
        src={card.image}
        alt=""
        className="w-[140px] h-[140px] object-cover rounded-full"
      />
      <div className="buttons flex flex-row justify-between">
        <div onClick={handleLikeClick}>
          <img
            src={card.isLiked ? "/like-active.svg" : "/like-not-active.svg"}
            alt="like"
            className="w-6 h-6 scale-image"
          />
        </div>
        <div onClick={handleDeleteClick}>
          <img src="/trash.svg" alt="Delete card" className="w-6 h-6 scale-image" />
        </div>
      </div>
    </Link>
  );
}

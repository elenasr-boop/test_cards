import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { characterType } from "../../types/characterType";
import { changeLike, deleteCard } from "../../store/features/cardsSlice";

export function Product() {
  const { id } = useParams();
  const characters = useAppSelector((state) => state.cards.products);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const card: characterType | undefined = characters.find(
    (card: characterType) => card._id === parseInt(id!)
  );

  if (!card) {
    return <Navigate to="/thisPageIsNotFound" />;
  }

  const handleLikeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(changeLike(card._id));
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(deleteCard(card._id));
  };

  return (
    <div className="product absolute w-[100vw] h-[100%] top-0 left-0 bg-black bg-opacity-60 flex justify-center items-center">
      <div className="h-[90vh] w-[70vw] md:h-[70vh] border-[3px] border-solid border-[#CD63FF] rounded-3xl  bg-gray-200 p-10 flex flex-col justify-between">
        <div className="flex flex-col md:grid grid-cols-2 grid-rows-4">
          <img
            src={card.image}
            alt={card.name}
            className="row-span-4 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] object-cover rounded-full"
          />
          <p className="text-2xl font-bold">{card.name}</p>
          {card.films.length !== 0 && (
            <div>
              <p className="font-bold">Films:</p>
              <ul>
                {card.films.map((film: string) => (
                  <li key={card._id}>{film}</li>
                ))}
              </ul>
            </div>
          )}
          {card.videoGames.length !== 0 && (
            <div>
              <p className="font-bold">Videogames:</p>
              <ul>
                {card.videoGames.map((videoGame: string) => (
                  <li key={card._id}>{videoGame}</li>
                ))}
              </ul>
            </div>
          )}
          {card.tvShows.length !== 0 && (
            <div>
              <p className="font-bold">TV shows:</p>
              <ul>
                {card.tvShows.map((tvShow: string) => (
                  <li key={card._id}>{tvShow}</li>
                ))}
              </ul>
            </div>
          )}
          <p className="font-bold overflow-hidden whitespace-nowrap text-ellipsis">
            Link:{" "}
            <a href={card.url} target="_blank" rel="noopener noreferrer">
              {card.url}
            </a>
          </p>
        </div>
        <div className="buttons flex justify-between">
          <div onClick={handleLikeClick}>
            <img
              src={card.isLiked ? "/like-active.svg" : "/like-not-active.svg"}
              alt="like"
              className="w-10 h-10 fill-white scale-image"
            />
          </div>
          <div onClick={handleDeleteClick}>
            <img
              src="/trash.svg"
              alt="Delete card"
              className="w-10 h-10 scale-image"
            />
          </div>
          <button onClick={() => navigate("/")}>Back</button>
        </div>
      </div>
    </div>
  );
}

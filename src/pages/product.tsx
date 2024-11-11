import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../store/store";
import { characterType } from "../types/characterType";

export function Product() {
  const { id } = useParams();
  const characters = useAppSelector((state) => state.cards);
  const navigate = useNavigate();
  let card: characterType | undefined = undefined;
  if (id !== undefined) {
    card = characters.find((card) => card._id === parseInt(id));
  } else {
    navigate("thisPageIsNotFound");
  }

  if (card !== undefined) {
    return (
      <div className="product absolute w-[100vw] h-screen top-0 left-0 bg-[] bg-black bg-opacity-60 flex justify-center items-center">
        <div className="w-[70vw] h-[70vh] border-[3px] border-solid border-[#CD63FF] rounded-3xl  bg-gray-200 p-10 flex flex-col justify-between">
          <div className="grid grid-cols-2 grid-rows-4">
            <img
              src={card.image}
              alt={card.name}
              className="row-span-4 w-[300px] h-[300px] object-cover rounded-full"
            />
            <p className="text-2xl font-bold">{card.name}</p>
            {card.films.length !== 0 && (
              <div>
                <p className="font-bold">Films:</p>
                <ul>
                  {card.films.map((film) => (
                    <li key={card._id}>{film}</li>
                  ))}
                </ul>
              </div>
            )}
            {card.videoGames.length !== 0 && (
              <div>
                <p className="font-bold">Videogames:</p>
                <ul>
                  {card.videoGames.map((videoGame) => (
                    <li key={card._id}>{videoGame}</li>
                  ))}
                </ul>
              </div>
            )}
            {card.tvShows.length !== 0 && (
              <div>
                <p className="font-bold">TV shows:</p>
                <ul>
                  {card.tvShows.map((tvShow) => (
                    <li key={card._id}>{tvShow}</li>
                  ))}
                </ul>
              </div>
            )}
            <p className="font-bold">Link: <a href={card.url} target="_blank" rel="noopener noreferrer">{card.url}</a></p>
          </div>
          <div className="buttons flex justify-between">
            <button>Like</button>
            <button onClick={() => navigate("/")}>Back</button>
          </div>
        </div>
      </div>
    );
  }
}

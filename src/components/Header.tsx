import { Link } from "react-router-dom";
import { useAppDispatch } from "../store/store";
import { filtration, setCards } from "../store/features/cardsSlice";
import { useState } from "react";
import { searchBy } from "../api";
import { characterFromApi } from "../types/characterType";

export function Header() {
  const dispatch = useAppDispatch();
  const [request, setRequest] = useState("");

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setRequest(e.target.value);
  }

  function filterBy(e: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(filtration(e.target.value));
  }

  async function search() {
    console.log("Выполняю поиск по запросу ", request);
    searchBy(request).then((res) => {
      console.log(res);
      if (Array.isArray(res.data)) {
        const newCharacters = res.data.map((el: characterFromApi) => ({
          _id: el._id,
          name: el.name,
          image: el.imageUrl,
          films: el.films,
          videoGames: el.videoGames,
          url: el.sourceUrl,
          isLiked: false,
          apiUrl: el.url,
          tvShows: el.tvShows,
        }));
        dispatch(setCards(newCharacters));
      } else {
        throw new Error("Error fetching characters");
      }
    });
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      search();
    }
  }

  return (
    <div className="h-20 flex justify-between items-center">
      <input
        type="text"
        className="w-3/5"
        placeholder="Search"
        onChange={handleInputChange}
        onKeyUp={handleKeyPress}
      />
      <button>
        <Link to="create-product">Create new card</Link>
      </button>
      <select
        id="filter"
        name="filter"
        className="border-[3px] border-solid border-[#CD63FF] rounded-full h-10 p-[5px]"
        onChange={filterBy}
      >
        <option value="all">All</option>
        <option value="films">Films</option>
        <option value="tvShows">TV shows</option>
        <option value="games">VideoGames</option>
        <option value="likes">Like</option>
      </select>
    </div>
  );
}
